export default function remSize(value, baseSize = 16){
	return `${Number(value) / Number(baseSize)}rem`;
}