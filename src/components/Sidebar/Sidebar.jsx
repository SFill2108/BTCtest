import React,{Component} from 'react';
import './Sidebar.scss';
import AddBook from './AddBook/AddBook.jsx'

const Sidebar = () =>{
    return(
        <div className='sidebarWrapper'>
            <AddBook />
        </div>
    );
}

export default Sidebar;

