import React from 'react';

//Use modules feature to import the classes from matching css module
//Note we will also be passing in an additional class 'className' via props to the card component
import classes from './Card.module.css';

const Card = props => {
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
};

export default Card; 