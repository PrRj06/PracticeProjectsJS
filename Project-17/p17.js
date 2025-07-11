const countertwitter = document.querySelector('.counterTwitter')
const counteryouTube = document.querySelector('.counterYouTube')
const counterFacebook = document.querySelector('.counterFacebook')
const twitterCounter = 12000;
const youTubeCounter = 5000;
const facebookCounter = 7500;
let value = 0
const intervalId = setInterval(()=>{
    value++;
    if(value >= 100){
        clearInterval(intervalId)
    }
    countertwitter.innerText = scale(value,0,100,0,twitterCounter).toFixed(0)
    counteryouTube.innerText = scale(value,0,100,0,youTubeCounter).toFixed(0)
    counterFacebook.innerText = scale(value,0,100,0,facebookCounter).toFixed(0)
},10)
function scale(load,in_min,in_max,out_min,out_max){
    return ((load-in_min)*(out_max-out_min)/(in_max-in_min) + out_min)
}