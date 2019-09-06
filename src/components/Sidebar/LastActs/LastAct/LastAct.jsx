import React,{Component} from 'react';
import './LastAct.scss'



const LastAct = () =>{
    return(
        <div className='lastActWrapper'>
            <div className="icon">
                <figure className="icon-clock"></figure>
            </div>
            <div className="act">
                You added <span>Fight Club</span> by <span>Chuck Palahniuk</span> to you <span>Must Read Titles</span>
                <div className="act__time">
                    24 minutes ago
                </div>
            </div>
        </div>
    );
}

export default LastAct;