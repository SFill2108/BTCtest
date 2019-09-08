import React,{Component} from 'react';
import './Catalog.scss';
import CatalogItem from './CatalogItem/CatalogItem.jsx'

const Catalog = () =>{
    var booksData = [
        {
            id: 1,
            img: '/src/img/itemImg/book1.png',
            name:"Jewels of Nizam",
            autor:"Greeta Devi",
            raiting: 5,
            property: [{tag:"All books"},{tag:"Most Recent"},{tag:"Most Popular", tag:"Free Books"}]
        },
        {
            id: 2,
            img: '/src/img/itemImg/book2.png',
            name:"Cakes & Bakes",
            autor:"Sanjeev Kapoor",
            raiting: 5,
            property: [{tag:"All books"},{tag:"Most Recent"},{tag:"Most Popular"}]
        },
        {
            id: 3,
            img: '/src/img/itemImg/book3.png',
            name:"Jamie's Kitchen",
            autor:"Jamie Oliver",
            raiting: 4.5,
            property: [{tag:"All books"},{tag:"Most Recent"},{tag:"Most Popular"}]
        },
        {
            id: 4,
            img: '/src/img/itemImg/book4.png',
            name:"Inexpensive Family Meals",
            autor:"Simon Holst",
            raiting: 4,
            property: [{tag:"All books"},{tag:"Most Recent"}]
        },
        {
            id: 5,
            img: '/src/img/itemImg/book5.png',
            name:"Paleo Slow Cooking",
            autor:"Chrissy Gower",
            raiting: 4.5,
            property: [{tag:"All books"},{tag:"Most Recent"}]
        },
        {
            id: 6,
            img: '/src/img/itemImg/book6.png',
            name:"Cook like an Italian",
            autor:"Tobie Puttock",
            raiting: 4,
            property: [{tag:"All books"},{tag:"Most Recent"}]
        },
        {
            id: 7,
            img: '/src/img/itemImg/book7.png',
            name:"Suneeta Vaswani",
            autor:"Greeta Devi",
            raiting: 5,
            property: [{tag:"All books"}]
        },
        {
            id: 8,
            img: '/src/img/itemImg/book8.png',
            name:"Jamie Does",
            autor:"Jamie Oliver",
            raiting: 4,
            property: [{tag:"All books"}]
        },
        {
            id: 9,
            img: '/src/img/itemImg/book9.png',
            name:"Jamie's italy",
            autor:"Jamie Oliver",
            raiting: 5,
            property: [{tag:"All books"}]
        },
        {
            id: 10,
            img: '/src/img/itemImg/book10.png',
            name:"Vegetables Cookbook",
            autor:"Matthew Biggs",
            raiting: 3.5,
            property: [{tag:"All books"}]
        }
    ];
    localStorage.setItem("books", booksData);
    let booksElements =
    booksData.map(book => <CatalogItem id={book.id} img={book.img} name={book.name} author={book.autor} raiting={book.raiting} />);
    return(
        <div className='catalogWrapper'>
            {booksElements}
        </div>
    );
}

export default Catalog;