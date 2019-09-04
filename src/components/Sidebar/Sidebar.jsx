import React,{Component} from 'react';
import './Sidebar.scss';
import AddBook from './AddBook/AddBook.jsx'
import PagesNav from './PagesNav/PagesNav.jsx'

const Sidebar = () =>{
    return(
        <div className='sidebarWrapper'>
            <AddBook />
            <PagesNav />
        </div>
    );
}

export default Sidebar;

