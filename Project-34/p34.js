window.addEventListener('DOMContentLoaded',()=>{
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || []
    savedNotes.forEach(noteContent => addNote(noteContent))
})
// to add a new note
const add = document.querySelector('.add')
add.addEventListener('click', () => {
    addNote()
    saveNote()
})

function addNote(content = ''){
    const note = document.createElement('div')
    note.classList.add('note')
    note.innerHTML = `
        <div class="tool-bar">
            <button class="edit">
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="delete">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        <textarea class="text" style="width: 100%; height: calc(100% - 50px);font-size: 16px" readonly>${content}</textarea>
    `
    document.body.appendChild(note)

    const del = note.querySelector('.delete')
    const edit = note.querySelector('.edit')
    const textArea = note.querySelector('.text')

    del.addEventListener('click', () => {
        note.remove()
        saveNote();   
    })

    edit.addEventListener('click', () => {
        textArea.readOnly = !textArea.readOnly

        // Optional: highlight border or change edit button style
        note.style.scale = textArea.readOnly ? '1' : '1.05'
        edit.style.backgroundColor = textArea.readOnly ? '' : 'lightgreen'
            
        if(textArea.readOnly) saveNote();
    })

    textArea.addEventListener('input',saveNote)
}


function saveNote(){
    const allNote = []
    document.querySelectorAll('.text').forEach(textarea => {
        allNote.push(textarea.value)
    })
    localStorage.setItem('notes',JSON.stringify(allNote))
}