const container = document.querySelector('.container')
const pokiCount = 150;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}
const colorKeys = Object.keys(colors)


const fetchPokemon = async () => {
    for(let i=1; i<=pokiCount; i++){
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url =  `https://pokeapi.co/api/v2/pokemon/${id}`
    const response = await fetch(url)
    const data = await response.json()
    makePokiCard(data)
}

const makePokiCard = (pokiData) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const id = pokiData.id.toString().padStart(3,'0')
    const name = pokiData.name
    const type = pokiData.types[0].type.name
    const backGround = colors[type]
    const imgUrl = pokiData.sprites.other["official-artwork"].front_default

    card.innerHTML = `<img src="${imgUrl}" alt="">
            <span class="id">#${id}</span>
            <span class="name">${name.toUpperCase()}</span>
            <span class="type">Type: ${type}</span>`
    card.style.backgroundColor = backGround
    container.appendChild(card)
}

fetchPokemon()