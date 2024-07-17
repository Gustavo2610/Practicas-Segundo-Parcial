import React, { useState, useEffect } from 'react';
import './AgeCalc.css'; // Incluye los estilos compartidos

const RickAndMortyComponent = () => {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
                const data = await response.json();
                setCharacters(data.results);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchCharacters();
    }, [page]);

    return (
        <div className="container">
            <div className="card">
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Estado</th>
                            <th>Especie</th>
                            <th>Género</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {characters.map(character => (
                            <tr key={character.id} onClick={() => setSelectedCharacter(character)}>
                                <td>{character.name}</td>
                                <td>{character.status}</td>
                                <td>{character.species}</td>
                                <td>{character.gender}</td>
                                <td>
                                    <img src={character.image} alt={character.name} style={{ width: '50px', height: '50px' }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <button className="button" onClick={() => setPage(prevPage => Math.max(prevPage - 1, 1))}>Previous</button>
                    <button className="button" onClick={() => setPage(prevPage => prevPage + 1)}>Next</button>
                </div>
                {selectedCharacter && (
                    <div className="card">
                        <h2>Información del personaje seleccionado</h2>
                        <p>Nombre: {selectedCharacter.name}</p>
                        <p>Estado: {selectedCharacter.status}</p>
                        <p>Especie: {selectedCharacter.species}</p>
                        <p>Género: {selectedCharacter.gender}</p>
                        <img src={selectedCharacter.image} alt={selectedCharacter.name} style={{ width: '100px', height: '100px' }} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default RickAndMortyComponent;
