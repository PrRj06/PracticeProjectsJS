const inputs = document.querySelectorAll('input')
inputs[0].focus()

inputs.forEach((input,index) => {
    input.addEventListener('keydown',(e)=>{
        const key = e.key
        if(e.key >= '0' && e.key <= '9'){
            input.value = key;
            e.preventDefault();
            if (index + 1 < inputs.length) {
                inputs[index + 1].focus();
            }
        }else if(e.key === 'Backspace'){
            if(input.value === ''){
                if(index - 1 >= 0){
                    inputs[index - 1].focus()
                }
            }else{
                input.value = ''
            }
        }
    })
})