import React,{Component} from 'react';
import './CatalogItem.scss';
import Rating from "./Rating/Rating.jsx"

const CatalogItem = (props) =>{


    return(
        <div className='itemCard'>
            <div className="itemImg"  >
                <img src={props.img}></img>
            </div>
            <div className="itemName">
                <h2>{props.name}</h2>
            </div>
            <div className="itemAuthor">
                <h3>by {props.author}</h3>
            </div>
            <div className="itemRating">
                <fieldset className="rating">
                    <div className="ratingGroup">
                        <Rating name={props.name}/>
                        <Rating name={props.name}/>
                        <Rating name={props.name}/>
                        <Rating name={props.name}/>
                        <Rating name={props.name}/>
                    </div>
                </fieldset>
            </div>
        </div>  
    );
}

export default CatalogItem;