import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  //Keep track of saved users.
  const [usersList, setUsersList] = useState([]);

  //Updates state in App by pushing new user (from AddUser component)
  const addUserHandler = (userName, userAge) => {
    //Update state array by inserting new object with retrieved values
    //Since we are relying on previous state, we pass function into setUsersList, which will allow access to previous state
    setUsersList(prevUsersList => {
      return [...prevUsersList, 
        {
          name: userName, 
          age: userAge
        }
      ];
    });
  };

  return (
    <div>
        <AddUser onAddUser={addUserHandler}/>
        <UsersList users={usersList}/>
    </div>
  );
}

export default App;
