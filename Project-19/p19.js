const target = 2;
const glassQuantityVolumeInLitre = 0.25;
const glassQuantityPercentage = 12.5;


const remaining = document.querySelector('.remaining')
const remainingQuantity = document.querySelector('.remainingQuantity')
const filled = document.querySelector('.filled')
const filledQuantity = document.querySelector('.filledQuantity')
const glasses = document.querySelectorAll('.glass')


let lastDrinkedGlass = 0;
glasses.forEach(glass => {
    glass.addEventListener('click',(e)=>{
        const glassNo = Number(e.target.id)
        glassUpdate(glassNo)
    })
})

function heightUpdate(lastDrinkedGlass){
    const height = lastDrinkedGlass * glassQuantityPercentage
    remaining.style.height = `${100 - height}%`
    remainingQuantity.innerText = `${target - (glassQuantityVolumeInLitre * lastDrinkedGlass)}L`;
    filled.style.height = `${height}%`;
    filledQuantity.innerText = `${lastDrinkedGlass * glassQuantityPercentage}%`;
}

function glassUpdate(glassNo){
    if(glassNo === lastDrinkedGlass){
        glasses[glassNo-1].classList.remove('active')
        lastDrinkedGlass = glassNo - 1;
    }else{
        glasses.forEach((glass) => {
            const glassId = Number(glass.id)
            if(glassId <= glassNo){
                glass.classList.add('active')
            }else{
                glass.classList.remove('active')
            }
        })
        lastDrinkedGlass = glassNo;
    }
    heightUpdate(lastDrinkedGlass)
}