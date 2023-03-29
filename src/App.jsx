import './App.css'
import PokemonCard from './components/PokemonCard'
import React from 'react'
import { useState } from 'react';

function App() {
 
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

    const [pokemonIndex, setPokemonIndex] = useState(0);
    const handleClick = () => {
      setPokemonIndex(pokemonIndex +1)
    }

    const handlePreviousClick = () => {
      setPokemonIndex(pokemonIndex -1)
    }
    
  return (
    <div className="App">
      <PokemonCard pokemonList={pokemonList[pokemonIndex]}/>
      {pokemonIndex > 0 ? <button onClick={handlePreviousClick}>Précédent</button> : null}
      {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClick}>Suivant</button> : null}
    </div>
  )
}

export default App
