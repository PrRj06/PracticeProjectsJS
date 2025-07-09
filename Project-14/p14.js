const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click',()=>{
        button.parentElement.classList.toggle('active')
        const faqText = button.parentNode.querySelector('.faq-text')
        faqText.classList.toggle('active')
        const icon = button.querySelector('i')
        icon.classList.toggle('bx-plus')
        icon.classList.toggle('bx-chevron-down')
        icon.style.rotate = icon.classList.contains('bx-plus') ? '45deg' : '0deg'
    })
})