import React,{Component} from 'react';
import './Filter.scss';
import {NavLink} from "react-router-dom";

const Filter = (props) =>{
    let path = "/" + props.name
    return(
        <div className='filterRadio'>
            <div className='item'>
                <input type="radio" id={props.id} name="filter" value="all" />
                <label for={props.id}>{props.name}</label>
            </div>
        </div>

    );
}

export default Filter;