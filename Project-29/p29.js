const input = document.querySelector('.search-bar')
const card = document.querySelector('.card-container')
const url = 'https://api.github.com/users/'

input.addEventListener('keyup',showProfile)

function showProfile(event){
    if(event.key === 'Enter'){
        const reqUrl = url + input.value
        fetch(reqUrl)
            .then(response => response.json())
            .then(data => {
                profile.style.backgroundImage = `url(${data.avatar_url})`
                name.innerText = data.name 
                userName.innerText = '@' + data.login
                followers.innerText = `Followers :- ${data.followers}`
                following.innerText = `Following :- ${data.following}`


            })
            .catch(error => {
                console.error('Error :- ',error)
            })

        setTimeout(()=>{
            input.value = ''
        },100)

    }
}
// console.log(url)

const profile = document.querySelector('.profile-pic-container')
const name = document.querySelector('#name')
const userName = document.querySelector('#username')
const followers = document.querySelector('.followers')
const following = document.querySelector('.following')
