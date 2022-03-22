import './PokeList.scss';
import React from 'react';
import Pokemon from '../Pokemon/Pokemon';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const PokeList = () => {

    const [pokeList, setPokeList] = useState([]);
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=9');
    const [byId, setById] = useState(true);
    const [byName, setByName] = useState(false);
    const [byTag, setByTag] = useState(false);

    const getAllPokemons = async () => {

        const response = await axios.get(loadMore);
        const data = await response.data;
        setLoadMore(data.next);

        createPokemonObject(data.results);  

       async function createPokemonObject (result) {

            result.map(async (pokemon) => {

                console.log(pokemon, "for each");

                const response = await axios.get(`${pokemon.url}`);    
                const data = await response.data;
                setPokeList(currentList => [...currentList, data]);     
                              
            })     
            
        }
    }   

    console.log(pokeList);

    const sortById = () => {
        pokeList.sort(function (a, b) {
          return a.id - b.id;
        });
      };

    const sortByName = () => {
        pokeList.sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
    }

    const sortByTag = () => {
        pokeList.sort(function (a, b) {
          if (a.types[0].type.name < b.types[0].type.name) {
            return -1;
          }
          if (a.types[0].type.name > b.types[0].type.name) {
            return 1;
          }
          return 0;
        });
    }

    const handleSortId = () => {
        setById(true);
        setByName(false);
        setByTag(false);
    }

    const handleSortName = () => {
        setById(false);
        setByName(true);
        setByTag(false);
    }

    const handleSortTag = () => {
        setById(false);
        setByName(false);
        setByTag(true);
    }

    useEffect(() => {        
        getAllPokemons();
    },[]);



    return (
        <>
            <button onClick={() =>handleSortName()}>trier par nom</button>
            <button onClick={() =>handleSortId()}>trier par id</button>
            <button onClick={() =>handleSortTag()}>trier par tag</button>
            <ul className="pokelist">

            {byId && sortById()}
            {byName && sortByName()}
            {byTag && sortByTag()}

            {   
                
                pokeList.map((pokemon,index) => 
                    
                 <Pokemon
                        item={pokemon}
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.sprites.other.dream_world.front_default}
                        type={pokemon.types[0].type.name}
                        key={index}
                    />
                )
            }       
            </ul> 

            <div onClick={() => getAllPokemons()} className="pokeball">
                {/* <p className='pokelist-more'>LOAD MORE</p> */}
            </div>
            
        </>    
    
    )
    
};

export default PokeList;
