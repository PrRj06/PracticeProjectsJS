const input = document.querySelector('input')
const todosContainer = document.querySelector('.todos-container')
const todos = []
input.addEventListener('keydown',(e)=>{
   if(e.key === 'Enter' && e.target.value != ''){
    todos.push(e.target.value)
    addEvents()
    e.target.value = ''
   }
})
function addEvents(){
    todosContainer.innerHTML = '';
    todos.forEach((todo) =>{
        todosContainer.innerHTML += 
                `<div class="todo">${todo}</div>`
    })

    const todosEl = document.querySelectorAll('.todo')
    todosEl.forEach(todo => {
        todo.addEventListener('click',(e)=>{
            e.target.classList.toggle('done')
        })
        todo.addEventListener('contextmenu',(e)=>{
            e.target.remove()
        })
    })
} 