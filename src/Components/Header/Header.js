import './Header.scss';
import React from 'react';
import pokemon from '../../Images/pokemon.svg';

const Header = () => {

    return (
    <div className="header">
        <img className="header-logo" src={pokemon} alt='logo'/>
    </div> 
    )
};

export default Header;
