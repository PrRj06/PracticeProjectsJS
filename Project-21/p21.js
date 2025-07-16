const secondHand = document.querySelector('.second')
const minuteHand = document.querySelector('.minute')
const hourHand = document.querySelector('.hour')
const month = document.querySelector('.month')
const day = document.querySelector('.day')
const date = document.querySelector('.date')
const hourMinuteAmPm = document.querySelector('.hourMinuteAmPm')
setInterval(()=>{
    const now = new Date()
    const second = now.getSeconds()
    const minute = now.getMinutes()
    const hour = now.getHours()

    const monthName = now.toLocaleDateString("en-Us" ,{month: "long"})
    const dateName = now.getDate()
    const dayName = now.toLocaleDateString("en-US", { weekday: "long" });
    secondHand.style.transform = `translate(-50%, -100%) rotate(${6 * second}deg)`
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${6 * minute}deg)`
    hourHand.style.transform = `translate(-50%, -100%) rotate(${30 * hour + 0.5 * minute}deg)`

    hourMinuteAmPm.innerText = now.toLocaleTimeString('en-US',{
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    })

    day.innerText = `${dayName.toUpperCase()},`
    month.innerText = monthName.toUpperCase() 
    date.innerText = dateName
},1000)    