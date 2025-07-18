const size = document.querySelector('.size-info')
const sizeDecrement = document.querySelector('.size-decrement')
const sizeIncrement = document.querySelector('.size-increment')
const eraseAll = document.querySelector('.erase-all')
const color = document.querySelector('.color-info')


let drawingPensize = parseInt(size.innerText)
let penColor = color.value
let isDrawing = false

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.addEventListener('mousedown',()=>{
    isDrawing = true
})

canvas.addEventListener('mouseleave',()=>{
    isDrawing = false
    ctx.beginPath()
})

canvas.addEventListener('mouseup',()=>{
    isDrawing = false
    ctx.beginPath()
})

canvas.addEventListener('mousemove',(e)=>{
    if(!isDrawing) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    ctx.lineWidth = drawingPensize * 1.5
    ctx.lineCap = 'round'
    ctx.strokeStyle = penColor
    ctx.lineTo(x,y)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x,y)

})

sizeDecrement.addEventListener('click',()=>{
    if(drawingPensize == 5) return
    drawingPensize -= 5
    size.innerText = drawingPensize
})

sizeIncrement.addEventListener('click',()=>{
    if(drawingPensize == 50) return
    drawingPensize += 5
    size.innerText = drawingPensize
})

color.addEventListener('input',()=>{
    penColor = color.value
})

eraseAll.addEventListener('click',()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
})