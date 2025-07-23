const lengthEl = document.getElementById('length')
const upperCaseEl = document.getElementById('uppercase')
const lowerCaseEl = document.getElementById('lowercase')
const numberEl = document.getElementById('number')
const symbolEl = document.getElementById('symbol')
const resultEl = document.getElementById('result')
const generateButton = document.getElementById('generate')

const requirements = {
    upper : getRandomUpper,
    lower : getRandomLower,
    number : getRandomNumber,
    symbol : getRandomSymbol
}

generateButton.addEventListener('click',()=>{
    const hasUpper = upperCaseEl.checked
    const hasLower = lowerCaseEl.checked
    const hasNumber = numberEl.checked
    const hasSymbol = symbolEl.checked
    const length = lengthEl.value

    resultEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length)

})

function generatePassword(upper,lower,number,symbol,length){
    let password = ''
    typeCount = upper + lower + number + symbol
    typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0])
    
    if(typeCount === 0){
        return ''
    }

    for(let i=0; i<length; i += typeCount){
        typesArr.forEach(type =>{
            const functionName = Object.keys(type)[0]
            password += requirements[functionName]()
        })
    }
    return password.slice(0,length)
}

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}