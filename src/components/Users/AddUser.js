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

        //Validate inputs
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if(+enteredAge < 1) {
            return;
        }

        //Using onAddUser prop passed in from App, add new user using current state; Passes this data back into App
        //Triggers addUserHandler back in App
        props.onAddUser(enteredUsername, enteredAge);

        //Reset state values
        setEnteredUsername('');
        setEnteredAge('');
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>

                <label htmlFor="age">Age</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>

                <Button type="submit">Add User</Button>
            </form>
        </Card>
        
    )
};

export default AddUser;