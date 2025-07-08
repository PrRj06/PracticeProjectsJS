const buttons = document.querySelectorAll('.btn')

buttons.forEach(button => {
    button.addEventListener('click',()=>{
        pauseRest()
        const audioId = button.innerText
        document.getElementById(audioId).play()
    })
})

function pauseRest(){
    const sounds = document.querySelectorAll('audio') 
    sounds.forEach(sound => {
        sound.pause()
        sound.currentTime = 0
    })
}