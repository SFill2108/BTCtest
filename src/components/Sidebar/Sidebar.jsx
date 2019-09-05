import React,{Component} from 'react';
import './Sidebar.scss';
import AddBook from './AddBook/AddBook.jsx'
import PagesNav from './PagesNav/PagesNav.jsx'
import LastActs from './LastActs/LastActs.jsx'

const Sidebar = () =>{
    return(
        <div className='sidebarWrapper'>
            <AddBook />
            <PagesNav />
            <LastActs />
        </div>
    );
}

export default Sidebar;

