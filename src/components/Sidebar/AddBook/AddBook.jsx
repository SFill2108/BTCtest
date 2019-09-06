import React,{Component} from 'react';
import './AddBook.scss';


const AddBook = () =>{
    return(
        <div className='addBookWrapper'>
                <button class="addBookButton">
                    <figure className="icon-plus"></figure> add a book
                </button>
        </div>
    );
}

export default AddBook;