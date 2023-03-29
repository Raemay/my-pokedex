import './App.css'
import PokemonCard from './components/PokemonCard'
import React from 'react'
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';

function App() {
    useEffect(
    () => {
      alert("hello pokemon trainer :)");
    }, []);
 
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

    useEffect(
      () => {
        pokemonIndex === 3 ? alert("pika pikachu !!!") : null;
      }, [pokemonIndex]);
    
  return (
    <div className="App">
      <PokemonCard pokemonList={pokemonList[pokemonIndex]}/>
      <NavBar pokemonList={pokemonList} pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex}/>
    </div>
  )
}

export default App
