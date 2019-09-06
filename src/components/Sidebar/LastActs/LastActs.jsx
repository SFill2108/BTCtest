import React,{Component} from 'react';
import './LastActs.scss'
import LastAct from './LastAct/LastAct.jsx'


const LastActs = () =>{
    return(
        <div className='lastActsWrapper'>
            <LastAct />
            <LastAct />
        </div>
    );
}

export default LastActs;