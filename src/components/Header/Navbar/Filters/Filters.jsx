import React,{Component} from 'react';
import './Filters.scss';
import Filter from './Filter/Filter.jsx'

const Filters = () =>{
    return(
        <div className='filtersWrapper'>
            <Filter name='All&nbsp;Books' id='filter1'/>
            <Filter name='Most&nbsp;Recent' id='filter2'/>
            <Filter name='Most&nbsp;Popular' id='filter3'/>
            <Filter name='Free&nbsp;Books' id='filter4'/>
        </div>
    );
}

export default Filters;



