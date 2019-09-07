import React,{Component} from 'react';
import './Filters.scss';
import Filter from './Filter/Filter.jsx'

const Filters = () =>{
    let filterData =  [
        {id:1, name:'All Books'},
        {id:2, name:'Most Recent'},
        {id:3, name:'Most Popular'},
        {id:4, name:'Free Books'},
    ]
    let filterElements = filterData.map(filter => <Filter name={filter.name} id={filter.id} />);
    return(
        <div className='filtersWrapper'>
            {filterElements}
        </div>
    );
}

export default Filters;



