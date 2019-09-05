import React,{Component} from 'react';
import './Catalog.scss';
import CatalogItem from './CatalogItem/CatalogItem.jsx'

const Catalog = () =>{
    var books = [
        {
            id: 1,
            name:"34234",
            autor:"dfdfg",
            raiting: 4,
            property: ["All Books", "Free books"]
        },
    ];


    localStorage.setItem("books", books);


    return(
        <div className='catalogWrapper'>
            <CatalogItem />
        </div>
    );
}

export default Catalog;