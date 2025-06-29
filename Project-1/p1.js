const button = document.querySelectorAll('.button')
button.forEach((elem) => {
  elem.addEventListener('click', (eventElem) => {
    const btnColor = eventElem.target.id
    document.body.style.backgroundColor = btnColor
  })
})