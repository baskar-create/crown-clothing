import React from "react";
import {withRouter} from "react-router-dom";
import './menuitems.styles.scss';

 function MenuItem(props){

    return (

<div  className={`${props.size} menu-item`} onClick={()=>props.history.push(`${props.match.url}${props.linkurl}`)}>
<div style={{backgroundImage:`url(${props.imgurl})`}}  className='background-image'/>
<div className="content">
<h1 className="title">{props.title.toUpperCase()}</h1>
<span className="subtitle">ShopNow</span>
</div>
</div>
    );
}

export default withRouter(MenuItem);