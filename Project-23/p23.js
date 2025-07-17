const draggable = document.querySelector('.drag-element')
const dropzones = document.querySelectorAll('.box')

draggable.addEventListener('dragstart',(e)=>{
    setTimeout(()=>{
        draggable.style.display = 'none'
    },0)
    draggable.classList.add('hold')
    e.dataTransfer.setData('text/plain','drag-element')
})
draggable.addEventListener('dragend',(e)=>{
    draggable.classList.remove('hold')
    draggable.style.display = 'block'
})

dropzones.forEach((dropzone)=>{
    dropzone.addEventListener('dragover',(e)=>{
        e.preventDefault()
    })
    
    dropzone.addEventListener('dragenter',(e)=>{
        e.target.classList.add('hover')
    })

    dropzone.addEventListener('dragleave',(e)=>{
        e.target.classList.remove('hover')
    })

    dropzone.addEventListener('drop',(e)=>{
        const data = e.dataTransfer.getData('text/plain')
        if(data === 'drag-element'){
            dropzone.appendChild(draggable)
        }
        dropzone.classList.remove('hover')      // removing 'hover' again because 'dragleave' only fires when you leave but, when we drop we don't leave
    })

})