import React from 'react';

import './Post.css';

const post = (props) => {
    console.log(props, 'posts')
    return (
        <article className="Post" onClick={props.clicked}>
        <h4>{props.title}</h4>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
        <h5>{props.body} </h5>
    </article>
    )
    
};

export default post;