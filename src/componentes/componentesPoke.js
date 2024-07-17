import React, { useState, useEffect } from "react";
import axios from "axios";
import './AgeCalc.css'; // Incluye los estilos compartidos

const PokemonSearch = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonData, setPokemonData] = useState(null);

    const fetchData = async () => {
        if (pokemonName.trim() !== ''){
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLocaleLowerCase()}`);
                setPokemonData(response.data);
            } catch (error) {
                console.error('Error fetching data', error);
                setPokemonData(null);
            }
        } else {
            setPokemonData(null);
        }
    };

    useEffect(() => {
        fetchData();
    }, [pokemonName]);

    return (
        <div className="container">
            <div className="card">
                <label>Buscar pokemon</label>
                <br />
                <label>Nombre del Pokemon:</label>
                <input
                    type="text"
                    value={pokemonName}
                    onChange={(event) => setPokemonName(event.target.value)}
                />
                <button className="button" onClick={fetchData}>Buscar</button>
                {pokemonData && (
                    <div>
                        <h3>{pokemonData.name}</h3>
                        <img src={pokemonData.sprites.front_default} alt={pokemonData.name} style={{ width: '100px', height: '100px' }} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default PokemonSearch;
