import React,{Component} from 'react';
import './CatalogItem.scss';

const CatalogItem = (props) =>{
    return(
        <div className='itemCard'>
            <div className="itemImg" id="itemImg">
                <img src={props.img} alt=""/>
            </div>
            <div className="itemName">
                <h1>{props.name}</h1>
            </div>
            <div className="itemAuthor">
                <h2>by {props.author}</h2>
            </div>
            <div className="itemRaiting">
                {props.rait}
            </div>
        </div>
    );
}

export default CatalogItem;