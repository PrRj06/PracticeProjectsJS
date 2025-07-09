const instructionText = document.querySelector('h3')
const insert = document.getElementById('insert')
window.addEventListener('keydown',(e)=>{
    instructionText.style.display = 'none'
    insert.innerHTML = `
    <table>
        <tr>
            <th>event.key</th>
            <th>event.keyCode</th>
            <th>event.code</th>
        </tr>
        <tr>
            <td>${e.key === ' ' ? "space" : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>
    `
})