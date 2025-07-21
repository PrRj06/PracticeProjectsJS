const button = document.querySelector('button')
const toasts = document.querySelector('.toasts')
const messageInfo = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
]
const messageType = ['info', 'success', 'error']
button.addEventListener('click',()=>{
    const message = document.createElement('div')
    message.classList.add('toast')
    message.classList.add(getRandomType())
    message.innerText = getRandomMessage()
    toasts.appendChild(message)

    setTimeout(()=>{
        message.remove()
    },3000)
})

function getRandomType(){
    return messageType[Math.floor(Math.random() * messageType.length)]
}
function getRandomMessage(){
    return messageInfo[Math.floor(Math.random() * messageInfo.length)]
}