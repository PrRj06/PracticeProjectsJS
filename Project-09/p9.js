const boxes = document.querySelectorAll('.box')

function chekBoxes(){

    // find the height from where, if the boxes are in,
    //  triggers the animation
    const triggerHeight = window.innerHeight / 5 * 4     // 80% of viewport height

    boxes.forEach(box => {
        //gets the postion of boxes from top so we can check
        //whether the box has crossed the triggerHeight or not
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerHeight){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}

// if there is a name function for event listener, must pass the function reference, not function call
window.addEventListener('scroll',chekBoxes)
chekBoxes()