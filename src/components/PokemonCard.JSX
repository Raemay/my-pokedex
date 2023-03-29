import React from 'react'
import PropTypes from 'prop-types'

export default function PokemonCard({pokemonList}) {

    pokemonList.propTypes = {
        
        name: PropTypes.string.isRequired,
      
        imgSrc: PropTypes.string,
      
      }
  return (
    <div>
        <figure>
            <img src={pokemonList.imgSrc} alt={pokemonList.imgSrc ? pokemonList.imgSrc : "???"}/>
            <figcaption>{pokemonList.name}</figcaption>
        </figure>
    </div>
  )
}
