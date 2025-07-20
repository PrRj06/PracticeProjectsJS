const leftSlides = document.querySelectorAll('.ls-img')
const rightSlides = document.querySelectorAll('.rs-img')
const down = document.querySelector('.down-button')
const up = document.querySelector('.up-button')

let currentLeft = 0
let currentRight = rightSlides.length - 1

down.addEventListener('click',downScroll)
up.addEventListener('click',upScroll)

function downScroll(){
    leftSlides[currentLeft].classList.remove('active')
    currentLeft = (currentLeft + 1) % leftSlides.length
    leftSlides[currentLeft].classList.add('active')
    
    rightSlides[currentRight].classList.remove('active')
    currentRight = (currentRight - 1 + rightSlides.length) % rightSlides.length;
    rightSlides[currentRight].classList.add('active')

}

function upScroll(){
    leftSlides[currentLeft].classList.remove('active')
    currentLeft = (currentLeft - 1 + leftSlides.length) % leftSlides.length;
    leftSlides[currentLeft].classList.add('active')
    
    rightSlides[currentRight].classList.remove('active')
    currentRight = (currentRight + 1) % rightSlides.length
    rightSlides[currentRight].classList.add('active')

}

