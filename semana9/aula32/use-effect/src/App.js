import './App.css';
import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components";

function App() {
  const [pokeList, setPokeList] = useState ([])
  const [pokeName, setPokeName] = useState ("")

  getList = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => setPokeList(response.data))
      .catch(err => console.log(err))
  }
  
  useEffect(() => {
    getList()
  },[])

   return (
      <div className="App">
   
        <select onChange= {changePokeName}>
          <option value={""}>Nenhum</option>
        
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
 
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
    );
  }

export default App;