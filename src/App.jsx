import './App.css'
import PokemonCard from './components/PokemonCard'
import React from 'react'

function App() {
 
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    },
    {
        name: "mew"
    }
]

  return (
    <div className="App">
      <PokemonCard pokemonList={pokemonList[0]}/>
    </div>
  )
}

export default App
