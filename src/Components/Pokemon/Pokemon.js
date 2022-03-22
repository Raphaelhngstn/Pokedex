import './Pokemon.scss';
import React from 'react';

const Pokemon = ({item, id, name, image, type}) => {

    const style = `pokemon-type ${type}`

    return (
    
        <li className="pokemon">             
                <img 
                className='pokemon-image'
                src={image} alt={name} />
                <p className="pokemon-title">{name.toUpperCase()}</p>
                <p className={style}>{type.toUpperCase()}</p>
                <p className="pokemon-number">{id}</p>
        </li> 
   
    )
};

export default Pokemon;