const container = document.querySelector('.text-container')
const text = 'Hello, I\'m Prabhat Ranjan'
container.classList.add('border')
text.split('').forEach((char, index) => {
    setTimeout(() => {
        container.innerText += char;
    }, 200 * index);
});


setTimeout(() => {
    container.classList.remove('border')
}, 200 * text.length + 500)