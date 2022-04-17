import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

//Import custom css module classes from matching module css file. 
import classes from './AddUser.module.css';

const AddUser = props => {
    //Initialize state for username input
    const [enteredUsername, setEnteredUsername] = useState('');
    //Do same for age
    const [enteredAge, setEnteredAge] = useState('');

    //Update username state when input is changed
    const usernameChangeHandler = event => {
        //Access new value of username and update state.
        setEnteredUsername(event.target.value);
    };

    //Update age state when input is changed
    const ageChangeHandler = event => {
        //Access new value of username and update state.
        setEnteredAge(event.target.value);
    };

    //Handle what happens when user submits username and age
    const addUserHandler = event => {
        event.preventDefault();
        console.log(enteredUsername);
        console.log(enteredAge);
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={usernameChangeHandler}/>

                <label htmlFor="age">Age</label>
                <input id="age" type="number" onChange={ageChangeHandler}/>

                <Button type="submit">Add User</Button>
            </form>
        </Card>
        
    )
};

export default AddUser;