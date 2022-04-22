import React from 'react';
//Use for using portal to place modal into App
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

//Black overlay in background
const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onConfirm}/>;
};

//Modal window
const ModalOverlay = props => {
return (
    <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Close</Button>
        </footer>
    </Card>
)};

//Here we will 'put the backdrop and modal together' and send to the App via a portal
//Using createPortal from react-dom, place the backdrop and modal into the divs defined as backdrop-root and overlay-root
const ErrorModal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm}/>, 
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    );
};

export default ErrorModal;