import React from "react";
import './menuitems.styles.scss';

export default function MenuItem(props){
    return (
<div  className={`${props.size} menu-item`}>
<div style={{backgroundImage:`url(${props.imgurl})`}}  className='background-image'/>
<div className="content">
<h1 className="title">{props.title.toUpperCase()}</h1>
<span className="subtitle">ShopNow</span>
</div>
</div>
    );
}