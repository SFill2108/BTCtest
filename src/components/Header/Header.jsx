import React,{Component} from 'react';
import './Header.scss';
import PageName from  './PageName/PageName.jsx';
import Navbar from './Navbar/Navbar.jsx';
import {Route} from "react-router-dom";
import {BrowserRouter, Router} from "react-router-dom"


const Header = () =>{
    return(
        <div className='headerWrapper'>
            {/* <Route path='/browse' render={ () => <PageName name="Browse Available Book"/>}/> */}
            <PageName />
            <Navbar />
        </div>
    );
}

export default Header;