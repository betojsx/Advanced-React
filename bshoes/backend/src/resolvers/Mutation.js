const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const { promisify } = require('util');
const { transport, makeTemplate } = require('../mail');

const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: check if user is logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in to do that!');
    }

    const item = await ctx.db.mutation.createItem(
      {
        data: {
          // this is how we create relationship
          // between the item and the user
          user: {
            connect: {
              id: ctx.request.userId
            }
          },
          ...args
        }
      },
      info
    );

    return item;
  },

  updateItem(parent, args, ctx, info) {
    const updates = { ...args };
    delete updates.id;

    return ctx.db.mutation.updateItem(
      {
        data: updates,
        where: {
          id: args.id
        }
      },
      info
    );
  },

  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };

    const item = await ctx.db.query.item({ where }, `{ id, title }`);
    // Verify if user has permission to delete item
    const hasPermissions = ctx.request.user.permissions.some(
      permission => permission === 'ADMIN'
    );

    if (!hasPermissions) {
      throw new Error(`You don't have permissions to perform this action`);
    }

    return ctx.db.mutation.deleteItem({ where }, info);
  },

  async signup(parent, args, ctx, info) {
    args.email = args.email.toLowerCase();

    const password = await bcrypt.hash(args.password, 10);

    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args,
          password,
          permissions: { set: ['USER'] }
        }
      },
      info
    );

    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    //set the jwt as a cookie on the response
    ctx.response.cookie('token', token, {
      httpOnly: true, //prevent extensions or third part javascript to access the cookie
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie
    });

    return user;
  },

  async signin(parent, { email, password }, ctx, info) {
    //check if has user with that email
    const user = await ctx.db.query.user({ where: { email } });

    if (!user) {
      throw new Error(`No such user found for email ${email}`);
    }
    //check if their password is correct
    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      throw new Error(`Invalid password!`);
    }
    //generate the jwt
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    //set the cookie with the token
    ctx.response.cookie('token', token, {
      httpOnly: true, //prevent extensions or third part javascript to access the cookie
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie
    });

    //return the user
    return user;
  },

  async signout(parent, args, ctx, info) {
    await ctx.response.clearCookie('token');
    return { message: 'Signed out' };
  },

  async requestReset(parent, args, ctx, info) {
    //check if is a real user
    const user = await ctx.db.query.user({ where: { email: args.email } });
    if (!user) {
      throw new Error(`No such user found for email ${args.email}`);
    }
    // set a reset token and expiry on that user
    const randomBytesPromise = promisify(randomBytes);
    const resetToken = (await randomBytesPromise(20)).toString('hex');
    const resetTokenExpiry = Date.now() + 1000 * 60 * 60; // 1 hour from now
    const res = await ctx.db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry }
    });
    // email them that reset token
    const mailRes = await transport.sendMail({
      from: 'betodasilvajr@gmail.com',
      to: user.email,
      subject: 'Your password reset token',
      html: makeTemplate(
        `You can now reset your password clicking the following link: \n\n<a href="${process.env.FRONTEND_URL}/reset?resetToken=${resetToken}">Click to reset your password</a>`
      )
    });

    // return success message
    return { message: 'Success' };
  },

  async resetPassword(
    parent,
    { password, confirmPassword, resetToken },
    ctx,
    info
  ) {
    // check if passwords match
    if (password !== confirmPassword) {
      throw new Error(`Passwords don't match`);
    }
    // check if it's a legit reset token
    // check if it's expired
    const [user] = await ctx.db.query.users({
      where: {
        resetToken: resetToken,
        resetTokenExpiry_gte: Date.now() - 1000 * 60 * 60
      }
    });

    if (!user) {
      throw new Error(`This token is either invalid or expired`);
    }

    // hash their new password
    const newPassword = await bcrypt.hash(password, 10);
    // save the new password and reset old resetToken fields
    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: {
        password: newPassword,
        resetToken: null,
        resetTokenExpiry: null
      }
    });
    // generate jwt
    const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);
    // set the jwt cookie
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });
    // return the new user
    return updatedUser;
  }
};

module.exports = Mutations;
