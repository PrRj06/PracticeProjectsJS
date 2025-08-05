const body = document.body
const loadPercentage = document.querySelector('.loadPercentage')
let load = 0
const intervalId = setInterval(()=>{
    load++
    if(load > 99){
        clearInterval(intervalId)
    }
    loadPercentage.innerText = `${load}%`
    loadPercentage.style.opacity = scale(load,0,100,1,0)
    body.style.backdropFilter = `blur(${scale(load,0,100,20,0)}px)`
},30)

function scale(num, in_min, in_max, out_min, out_max){
    return ((num - in_min)*(out_max - out_min))/(in_max - in_min)+out_min
}