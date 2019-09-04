import React,{Component} from 'react';
import './PageLink.scss';

const PageLink = (props) =>{
    return(
        <div className='itemWrapper'>
            <div className="item__icon">
                {props.icon}
            </div>
            <div className="item__link">
                {props.name}
            </div>
        </div>
    );
}

export default PageLink;