const poke_container = document.getElementById('poke-container')
const pokemon_count = 1025
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#ffe000',
    water: '#DEF3FD',
    ground: '#684d31',
    rock: '#422a0e',
    fairy: '#ef62f3',
    poison: '#7f11e0',
    bug: '#7bcd4d',
    dragon: '#aaac1f',
    psychic: '#9e6efe',
    flying: '#95d2e8',
    fighting: '#ff8b00',
    normal: '#f5f5f5',
    ice: '#98d5e9',
    ghost: '#bbabd7',
    steel: '#6e6e6e',
    dark: '#707070'

}



const main_types = Object.keys(colors)

const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id = pokemon.id.toString().padStart(3, '0')
    const poke_types = pokemon.types.map(type => type.type.name)
    const type = main_types.find(type => poke_types.indexOf(type) > -1)
    const color = colors[type]

    pokemonEl.style.backgroundColor = color

    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span> </small>
    </div>
    `
    pokemonEl.innerHTML = pokemonInnerHTML
    poke_container.appendChild(pokemonEl)
}

fetchPokemons()