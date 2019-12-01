import Head from "next/head";
import React from 'react';

const Meta = () => {
	return (
		<Head>
			<meta charSet="utf-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			<link rel="shortcut icon" href="/static/favicon.png"/>
			<link rel="stylesheet" type="text/css" href="/static/nprogress.css"/>
			<title>bShoes</title>

			
			<link rel="dns-prefetch" href="https://fonts.gstatic.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
			<link rel="preload" href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap" as="fetch" crossorigin="anonymous" />
			<script type="text/javascript" dangerouslySetInnerHTML={ {__html: `!function(e,n,t){"use strict";var o="https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap",r="__3perf_googleFonts_c36ae";function c(e){(n.head||n.body).appendChild(e)}function a(){var e=n.createElement("link");e.href=o,e.rel="stylesheet",c(e)}function f(e){if(!n.getElementById(r)){var t=n.createElement("style");t.id=r,c(t)}n.getElementById(r).innerHTML=e}e.FontFace&&e.FontFace.prototype.hasOwnProperty("display")?(t[r]&&f(t[r]),fetch(o).then(function(e){return e.text()}).then(function(e){return e.replace(/@font-face {/g,"@font-face{font-display:swap;")}).then(function(e){return t[r]=e}).then(f).catch(a)):a()}(window,document,localStorage);`}} />


		</Head>
	);
}

export default Meta;
