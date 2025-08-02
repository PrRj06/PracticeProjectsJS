const search = document.querySelector('input')
const detailsObj = []

async function fetchData() {
    const res = await fetch('https://randomuser.me/api?results=50')
    const data = await res.json()
    for(let i=0; i<data.results.length; i++){
        detailsObj.push({
            img : data.results[i].picture.large,
            username : data.results[i].name.first + ' ' +  data.results[i].name.last,
            location : data.results[i].location.state + ', ' + data.results[i].location.country 
        })
    }
    renderUsers(detailsObj)         // initial render to show all users
    search.addEventListener('input',() => filterUser(search.value.trim()))
}
fetchData()


function renderUsers(obj){
    const feed = document.querySelector('.user-feed')
    feed.innerHTML = ''     // to clear previous renderUsers()

    if(obj.length === 0){
        feed.innerHTML = `<p class = 'empty'>No users found.</p>`;
        return
    }

    for(let i=0; i<obj.length; i++){
        const user = document.createElement('div')
        user.classList.add('user')
        user.innerHTML = `
        <img src= '${obj[i].img}' alt="">
        <div class="details">
        <span class="name">${obj[i].username}</span>
        <span class="location"><small>${obj[i].location}</small></span>
        </div>                
        `
        feed.appendChild(user)
    }
}


function filterUser(str){
    const filterObj = detailsObj.filter(obj => checkValid(obj, str))
    renderUsers(filterObj)                  // render based on filter if user perform input event on search

}
function checkValid(obj, str){
    return (
        obj.username.toLowerCase().includes(str.toLowerCase()) || obj.location.toLowerCase().includes(str.toLowerCase())
    )
}
