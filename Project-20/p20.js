const  left = document.querySelector('.arrow-left')
const  right = document.querySelector('.arrow-right')
const body= document.body
const slides = document.querySelectorAll('.slide')

right.addEventListener('click',moveRight)
left.addEventListener('click',moveLeft)

function moveRight(){
    const currentIndex = Array.from(slides).findIndex(slide => 
        slide.classList.contains('active')
    );
    slides[currentIndex].classList.remove('active');
    const nextIndex = (currentIndex + 1) % slides.length;
    slides[nextIndex].classList.add('active')
    body.style.backgroundImage = slides[nextIndex].style.backgroundImage
}

function moveLeft(){
    const currentIndex = Array.from(slides).findIndex(slide => 
        slide.classList.contains('active')
    );
    slides[currentIndex].classList.remove('active');
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[prevIndex].classList.add('active')
    body.style.backgroundImage = slides[prevIndex].style.backgroundImage
}
