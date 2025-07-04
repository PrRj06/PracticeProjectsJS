const ps5 = document.querySelector('.ps5')
const xbox = document.querySelector('.xbox')

ps5.addEventListener('mouseenter',()=> {
    ps5.classList.add('hover-ps5')
    xbox.classList.add('hover-ps5')
})
ps5.addEventListener('mouseleave',()=> {
    ps5.classList.remove('hover-ps5')
    xbox.classList.remove('hover-ps5')
})

xbox.addEventListener('mouseenter',()=> {
    xbox.classList.add('hover-xbox')
    ps5.classList.add('hover-xbox')
})
xbox.addEventListener('mouseleave',()=> {
    xbox.classList.remove('hover-xbox')
    ps5.classList.remove('hover-xbox')
})