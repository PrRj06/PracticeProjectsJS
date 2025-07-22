const span = document.querySelector('span')
const img = document.querySelector('.container')
const heart = document.querySelector('i')
let numLikes = parseInt(span.innerText)
img.addEventListener('dblclick',(e)=>{
    numLikes++;
    span.innerText = numLikes;
    
    const heart = document.createElement('i');
    heart.classList.add('fas', 'fa-heart'); 
    heart.style.left = `${e.offsetX}px`;
    heart.style.top = `${e.offsetY}px`;

    img.appendChild(heart);
    setTimeout(()=>{
        heart.remove()
    },1000)
})