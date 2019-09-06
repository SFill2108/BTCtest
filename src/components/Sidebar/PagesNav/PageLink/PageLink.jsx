import React,{Component} from 'react';
import './PageLink.scss';

const PageLink = (props) =>{
    return(
        <div className='itemWrapper'>
            <div className="item__icon">
                <figure className={props.icon}></figure>
            </div>
            <div className="item__link">
                {props.name}
            </div>
        </div>
    );
}

export default PageLink;