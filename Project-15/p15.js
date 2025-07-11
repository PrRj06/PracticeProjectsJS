const textArea = document.getElementById('textarea')
const  choices = document.querySelector('.choices')

textArea.addEventListener('keyup',(e)=>{
    createChoiceElem(e.target.value)
    if(e.key === 'Enter'){
        setTimeout(()=>{
            e.target.value = ''
        },10)
        pickRandomChoice()
    }
})


function createChoiceElem(input){
    const choice = input.split(',').filter(elem => elem.trim() !== '').map(elem => elem.trim())
    choices.innerHTML = ''

    choice.forEach(elem => {
        const eachChoice = document.createElement('div')
        eachChoice.classList.add('choice')
        eachChoice.innerText = elem
        choices.appendChild(eachChoice)
    })
}

function pickRandomChoice(){
    const tags = document.querySelectorAll('.choice')

    if(tags.length === 0) return;
    const highlightCount = 20
    let intervalId = setInterval(()=>{
        const randomTag = pickRadomTag(tags)
        addHighlight(randomTag)

        setTimeout(()=>{
            removeHighlight(randomTag)
        },100)
    },100)

    setTimeout(()=>{
        clearInterval(intervalId)
        setTimeout(()=>{
            const finalTag = pickRadomTag(tags)
            addHighlight(finalTag)
        },100)
    },highlightCount * 100)
}

function pickRadomTag(tags){
    return tags[Math.floor(Math.random()*tags.length)]
}

function addHighlight(tag){
    tag.classList.add('tag')
}

function removeHighlight(tag){
    tag.classList.remove('tag')
}







