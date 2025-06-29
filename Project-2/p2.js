const form = document.querySelector('form')
form.addEventListener('submit',(event) => {
  event.preventDefault()
  const height = Number(document.querySelector('#height').value)
  const weight = Number(document.querySelector('#weight').value)
  const result = document.querySelector('#results')
  
  if(height === '' || isNaN(height) || height <= 0){
    result.innerText = 'Please enter a valid height'
  }
  else if(weight === '' || isNaN(weight) || weight <= 0){
    result.innerText = 'Please enter a valid weight'
  }else{
    const res = weight/(Math.pow((height/100),2))
    if(res < 18.6){
      result.innerText = `${res.toFixed(2)} Under Weight`
    }else if(res >= 18.6 && res < 24.9){
      result.innerText = `${res.toFixed(2)} Normal Range`
    }else{
      result.innerText = `${res.toFixed(2)} Over Weight`
    }
  }

})