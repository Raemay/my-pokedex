import React from 'react'

export default function PokemonCard() {
    const pokemonList = [
        {
            name: "bulbasaur",
            imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        },
        {
            name: "mew"
        }
    ]
    const pokemon = pokemonList[1];

  return (
    <div>
        <figure>
            <img src={pokemon.imgSrc} alt={pokemon.imgSrc ? pokemon.imgSrc : "???"}/>
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    </div>
  )
}
