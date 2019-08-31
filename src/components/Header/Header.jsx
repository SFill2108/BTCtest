import React,{Component} from 'react';
import './Header.scss';
import {NavLink} from "react-router-dom"

const Header = () =>{
    return(
        <div>
            <div>
                Browse Available Books
            </div>
            <div>
                <div>
                    <NavLink to='/allbooks'>All Books</NavLink>
                    <NavLink to='/mostrecent'>Most Recent</NavLink>
                </div>
                <div>
                    <input type="text"/>
                </div>
            </div>
        </div>
    );
}

export default Header;