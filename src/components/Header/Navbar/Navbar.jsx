import React,{Component} from 'react';
import './Navbar.scss'
import Filters from './Filters/Filters.jsx'
import Search from './Search/Search.jsx'

const Navbar = () =>{
    return(
        <div className='navbarWrapper'>
            <Filters />
            <Search />
        </div>
    );
}

export default Navbar;
