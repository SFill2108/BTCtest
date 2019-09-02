import React,{Component} from 'react';
import './Filters.scss';
import Filter from './Filter/Filter.jsx'

const Filters = () =>{
    return(
        <div className='filtersWrapper'>
            <Filter name='All Books' id='filter1'/>
            <Filter name='Most Recent' id='filter2'/>
            <Filter name='Most Popular' id='filter3'/>
            <Filter name='Free Books' id='filter4'/>
        </div>
    );
}

export default Filters;