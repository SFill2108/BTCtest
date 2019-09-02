import React,{Component} from 'react';
import './Header.scss';
import PageName from  './PageName/PageName.jsx';
import {NavLink} from "react-router-dom";


const Header = () =>{
    return(
        <div className='headerWrapper'>
            <PageName />
            

        </div>
    );
}

export default Header;