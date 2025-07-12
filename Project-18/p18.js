const profilePic = document.querySelector('.profile-pic-container')
const name = document.getElementById('name')
const username = document.getElementById('username')
const email = document.getElementById('email')
const followers = document.querySelector('.followers')
const following = document.querySelector('.following')
const requestUrl = 'https://api.github.com/users/PrRj06'

// XMLHttpRequest() is an built in javascript object that allows to make HTTP requests to a server.
const xhr = new XMLHttpRequest()    // step-1 :- to make an xhr object.
// you can either use .onreadystatechange or .onload to decide what to do when response 
xhr.onload = function(){
    if(xhr.status === 200){
        const dataCard = JSON.parse(xhr.responseText)
        
        profilePic.style.backgroundImage = `url(${dataCard.avatar_url})`
        
        name.innerText = dataCard.name
        username.innerText = dataCard.login

        followers.innerText = `Followers :- ${dataCard.followers}`
        following.innerText = `Following :- ${dataCard.following}`
    }
}
xhr.open('GET',requestUrl)      // step-2 :- open a connection using .open(method,url)
xhr.send()                      // step-3 :- send the request using .send()