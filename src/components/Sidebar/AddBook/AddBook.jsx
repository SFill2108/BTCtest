import React,{Component} from 'react';
import './AddBook.scss';

const AddBook = () =>{
    return(
        <div className='addBookWrapper'>
                <button class="addBookButton">
                    <span>+</span> add a book
                </button>
        </div>
    );
}

export default AddBook;