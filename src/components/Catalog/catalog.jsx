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

let R = <figure className="icon-star"></figure>;
    return(
        <div className='catalogWrapper'>
            <CatalogItem img="./../../img/itemImg/book1.png" name="Jewels of Nizam" author="Greeta Davi" rait={R}/>
            <CatalogItem img="./../../img/itemImg/book1.png" name="Jewels of Nizam" author="Greeta Davi" />
            <CatalogItem img="./../../img/itemImg/book1.png" name="Jewels of Nizam" author="Greeta Davi" />
            <CatalogItem img="./../../img/itemImg/book1.png" name="Jewels of Nizam" author="Greeta Davi" />
            <CatalogItem img="./../../img/itemImg/book1.png" name="Jewels of Nizam" author="Greeta Davi" />
            <CatalogItem img="./../../img/itemImg/book1.png" name="Jewels of Nizam" author="Greeta Davi" />
            <CatalogItem img="./../../img/itemImg/book1.png" name="Jewels of Nizam" author="Greeta Davi" />
            <CatalogItem img="./../../img/itemImg/book1.png" name="Jewels of Nizam" author="Greeta Davi" />
            <CatalogItem img="./../../img/itemImg/book1.png" name="Jewels of Nizam" author="Greeta Davi" />
        </div>
    );
}

export default Catalog;