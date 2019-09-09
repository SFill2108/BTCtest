import React,{Component} from 'react';
import './Rating.scss';

const Rating = (props) =>{
    return(
            <input className="ratingStar" type="radio" name={props.name}></input>
    );
}

export default Rating;