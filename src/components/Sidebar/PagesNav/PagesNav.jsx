import React,{Component} from 'react';
import './PagesNav.scss';
import PageLink from './PageLink/PageLink.jsx'
import {NavLink} from "react-router-dom"

const PagesNav = () =>{

    return(
        <div className='pagesNavWrapper'>
            <NavLink to="/nowreading"><PageLink name='Now Reading'/></NavLink>
            <NavLink to="/browse"><PageLink name='Browse'/></NavLink>
            <NavLink to="/buybook"><PageLink name='Buy Books'/></NavLink>
            <NavLink to="/favouritebook"><PageLink name='Favourite Books'/></NavLink>
            <NavLink to="/wishlist"><PageLink name='Wishlist'/></NavLink>
        </div>
        
    );
}


export default PagesNav;