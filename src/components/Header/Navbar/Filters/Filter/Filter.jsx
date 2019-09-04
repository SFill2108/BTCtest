import React,{Component} from 'react';
import './Filter.scss';
import {NavLink} from "react-router-dom";

const Filter = (props) =>{
    return(
        <NavLink to={"/"+ props.name}>
        <div className='filter'>
            <div className='item'>
                {props.name}
            </div>
        </div>
        </NavLink>

    );
}

export default Filter;