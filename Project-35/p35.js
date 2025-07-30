const carousel = document.querySelector('.carousel-images')
const images = document.querySelectorAll('img')

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

const widthImg = 500;
const sizeImg = images.length
let indx = 0;

prev.addEventListener('click',()=>{
    indx = (indx - 1 + sizeImg)%sizeImg
    carouselFn()
})
next.addEventListener('click',()=>{
    indx = (indx + 1 + sizeImg)%sizeImg
    carouselFn()
})


function carouselFn(){
    carousel.style.transform = `translate(-${indx * widthImg}px)`
}