import React,{Component} from 'react';
import './Navbar.scss'
import Filters from './Filters/Filters.jsx'

const Navbar = () =>{
    return(
        <div className='navbarWrapper'>
            <Filters />
        </div>
    );
}

export default Navbar;
