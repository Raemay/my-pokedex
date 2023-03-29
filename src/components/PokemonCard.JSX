import React from 'react'

export default function PokemonCard({pokemonList}) {
  return (
    <div>
        <figure>
            <img src={pokemonList.imgSrc} alt={pokemonList.imgSrc ? pokemonList.imgSrc : "???"}/>
            <figcaption>{pokemonList.name}</figcaption>
        </figure>
    </div>
  )
}
