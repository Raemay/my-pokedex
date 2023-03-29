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
            {pokemonList.imgSrc ? <img src={pokemonList.imgSrc}></img> : "???"}
            <figcaption>{pokemonList.name}</figcaption>
        </figure>
    </div>
  )
}
