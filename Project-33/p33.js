const btns = document.querySelectorAll('.btn')
const statusObj = {
    "good" : false,
    "cheap" : false,
    "fast" : false
}

btns.forEach(btn => {
    btn.addEventListener('click',()=>{
        const key = btn.id
        statusObj[key] = !statusObj[key]

        const circle = btn.querySelector('.btn-circle')
        circle.classList.toggle('active')

        applyToogle(statusObj,key)
        updateBackgound()
        
    })
})
function applyToogle(statusObj, key) {
    if (statusObj.good && statusObj.cheap && statusObj.fast) {
        if (key === 'good') {
            statusObj.fast = false;
            document.querySelector("#fast .btn-circle").classList.remove("active");
        }
        else if (key === 'cheap') {
            statusObj.good = false; 
            document.querySelector("#good .btn-circle").classList.remove("active");
        }
        else if (key === 'fast') {
            statusObj.cheap = false;
            document.querySelector("#cheap .btn-circle").classList.remove("active");
        }
    }
}

function updateBackgound(){
    btns.forEach(btn => {
        if(statusObj[btn.id]){
            btn.style.background = '#8e44ad'
        }else{
            btn.style.background = ''
        }
    })
}