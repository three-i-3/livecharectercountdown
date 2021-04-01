const textarea = document.querySelector('div.container textarea');
const count = document.querySelector('div.container p span.count')

function countLetters () {
	const text = textarea.value;
	const textLength = textarea.value.length;
	count.innerText = `${textLength}`;
}