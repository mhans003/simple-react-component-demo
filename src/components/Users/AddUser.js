import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

//Import custom css module classes from matching module css file. 
import classes from './AddUser.module.css';

const AddUser = props => {
    //Create references to name and age user inputs.
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    //Set state for error
    const [error, setError] = useState();

    //Handle what happens when user submits username and age
    const addUserHandler = event => {
        event.preventDefault();

        //Use Ref to name and age
        const enteredUserName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        //Validate inputs
        if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values)"
            });
            return;
        }
        if(+enteredUserAge < 1) {
            setError({
                title: "Invalid Age",
                message: "Please enter a valid age greater than 0"
            });
            return;
        }

        //Using onAddUser prop passed in from App, add new user using current state; Passes this data back into App
        //Triggers addUserHandler back in App
        props.onAddUser(enteredUserName, enteredUserAge);

        //Reset inputs
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    //Reset the error message state
    const errorHandler = () => {
        setError(null);
    };

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username" 
                        type="text" 
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age</label>
                    <input 
                        id="age" 
                        type="number" 
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    )
};

export default AddUser;