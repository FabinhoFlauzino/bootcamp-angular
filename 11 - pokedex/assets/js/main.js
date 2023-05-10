const pokemonListHtml = document.querySelector('#pokemonList')
const btn = document.querySelector('#loadMoreButton')
const limit = 5
let offset = 0


function loadPokemonItems(offset, limit) {

  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {

    const newItem = pokemons.map((pokemon) => {
      return `
        <li class="pokemon ${pokemon.type}">
          <span class="number">#${pokemon.number}</span>
          <span class="name">${pokemon.name}</span>
          <div class="detail">
            <ol class="types">
              ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}"
              alt="${pokemon.name}">
          </div>
        </li>
      `
    })

    const newHtml = newItem.join('')
    pokemonListHtml.innerHTML += newHtml
  })
}

loadPokemonItems(offset, limit)

btn.addEventListener('click', () => {
  offset += limit
  loadPokemonItems(offset, limit)
})