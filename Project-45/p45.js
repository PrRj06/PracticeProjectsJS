const timer = document.querySelector('.timer')
const resume = document.querySelector('.resume')
const reset = document.querySelector('.reset')

let i = 60
let pause = true
let interval;



resume.addEventListener('click',resumeFn)
reset.addEventListener('click',resetFn)
function resumeFn(){
    resume.firstChild.classList.toggle('fa-play');
    resume.firstChild.classList.toggle('fa-pause');
    if(!pause){
        clearInterval(interval)
        pause = true
    }
    else{  
        timeCalc()
        pause = false
    }
}

function resetFn(){
    clearInterval(interval)
    i = 60
    pause = true
    timer.innerText = `01 : 00`      
}

function timeCalc(){
    interval = setInterval(()=>{
        if(i <= 0){
            resetFn();
            return
        }
        updateDisplay()
        i--;
    },1000)
}

function updateDisplay(){
    let minute = Math.floor(i/60)
    let second = Math.floor(i%60)
    timer.innerText = `${minute.toString().padStart(2,'0')} : ${second.toString().padStart(2,'0')}`  
}
updateDisplay()

