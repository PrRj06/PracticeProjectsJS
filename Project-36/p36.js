const boxes = document.querySelectorAll('.box')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
boxes.forEach(box => {
    box.addEventListener('mouseover',()=>{
        const color = getRandomHexColor()
        box.style.backgroundColor = color
        box.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color} `
        setTimeout(()=>{
            box.style.backgroundColor = '#1d1d1d'
            box.style.boxShadow = `0 0 2px #000`
        },2000)
    })
})


function getRandomHexColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  return '#' + hex.padStart(6, '0');
}



