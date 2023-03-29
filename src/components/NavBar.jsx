import React from 'react'

export default function NavBar({pokemonIndex, setPokemonIndex, pokemonList}) {
  
  return (
    <div>
     {pokemonList.map((pokemon, index) => (
          <ul key={index}>
            <button onClick={() => setPokemonIndex(index)}>{pokemon.name}</button>
          </ul>
        ))}
    </div>
  )
}
