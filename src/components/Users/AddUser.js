import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

//Import custom css module classes from matching module css file. 
import classes from './AddUser.module.css';

const AddUser = props => {
    //Initialize state for username input
    const [enteredUsername, setEnteredUsername] = useState('');
    //Do same for age
    const [enteredAge, setEnteredAge] = useState('');
    //Set state for error
    const [error, setError] = useState();

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
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values)"
            });
            return;
        }
        if(+enteredAge < 1) {
            setError({
                title: "Invalid Age",
                message: "Please enter a valid age greater than 0"
            });
            return;
        }

        //Using onAddUser prop passed in from App, add new user using current state; Passes this data back into App
        //Triggers addUserHandler back in App
        props.onAddUser(enteredUsername, enteredAge);

        //Reset state values
        setEnteredUsername('');
        setEnteredAge('');
    };

    //Reset the error message
    const errorHandler = () => {
        setError(null);
    };

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>

                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    )
};

export default AddUser;