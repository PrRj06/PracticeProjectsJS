const progress = document.querySelector('.progress')
const circles = document.querySelectorAll('.circle')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

let activeElem = 1

prev.addEventListener('click',() => {
    activeElem--
    if(activeElem < 1){
        activeElem = 1
    }
    progressUpdate()
})
next.addEventListener('click',() => {
    activeElem++
    if(activeElem == circles.length){
        activeElem = circles.length
    }
    progressUpdate()
})

function progressUpdate(){
    circles.forEach((circle, id)=>{
        if(id < activeElem){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1)/(circles.length - 1)*100 +'%'

    if(activeElem == 1){
        prev.disabled = true
    }else if(activeElem == circles.length){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }
}