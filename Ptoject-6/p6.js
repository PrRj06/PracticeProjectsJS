const content = document.querySelector('.content')
const navContainer = document.querySelector('.container')
const menuOpen = document.getElementById('menu-open')
const menuClose = document.getElementById('menu-close')

menuOpen.addEventListener('click',()=>{
    navContainer.classList.add('rotate')
    content.classList.add('rotate')
    menuClose.classList.add('rotate')
})

menuClose.addEventListener('click',()=>{
    navContainer.classList.remove('rotate')
    content.classList.remove('rotate')
    menuClose.classList.remove('rotate')
})