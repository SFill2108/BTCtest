import React,{Component} from 'react';
import './Header.scss';
import PageName from  './PageName/PageName.jsx';
import Navbar from './Navbar/Navbar.jsx';


const Header = () =>{
    return(
        <div className='headerWrapper'>
            <PageName />
            <Navbar />
        </div>
    );
}

export default Header;