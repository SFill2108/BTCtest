import React,{Component} from 'react';
import './Search.scss';

const Search = () =>{
    return(
        <div className='searchWrapper'>
            <div className="searchWrapper__panel">
                <input class="searchInput"type="text" name="" placeholder="Enter Keywords"/>
                <button class="searchButton">
                </button>
            </div>
        </div>
    );
}

export default Search;