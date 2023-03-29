import React from 'react'

export default function NavBar({pokemonIndex, setPokemonIndex, pokemonList}) {
    const handleClick = () => {
        setPokemonIndex(pokemonIndex +1)
      }
  
      const handlePreviousClick = () => {
        setPokemonIndex(pokemonIndex -1)
      }
      
  return (
    <div>
    {pokemonIndex > 0 ? <button onClick={handlePreviousClick}>Précédent</button> : null}
    {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClick}>Suivant</button> : null}
    </div>
  )
}
