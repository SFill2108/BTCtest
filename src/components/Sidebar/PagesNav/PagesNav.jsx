import React,{Component} from 'react';
import './PagesNav.scss';
import PageLink from './PageLink/PageLink.jsx'
import {NavLink} from "react-router-dom"

const PagesNav = () =>{

    return(
        <div className='pagesNavWrapper'>
            <NavLink to="/nowreading"><PageLink name='Now Reading' icon='icon-book' /></NavLink>
            <NavLink to="/browse"><PageLink name='Browse' icon='icon-globe'/></NavLink>
            <NavLink to="/buybook"><PageLink name='Buy Books' icon='icon-basket-1' /></NavLink>
            <NavLink to="/favouritebook"><PageLink name='Favourite Books' icon='icon-star' /></NavLink>
            <NavLink to="/wishlist"><PageLink name='Wishlist' icon='icon-th-list' /></NavLink>
        </div>
        
    );
}


export default PagesNav;