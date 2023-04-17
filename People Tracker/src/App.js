import React  , {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/UI/UserList';

function App() {
  const [usersList , setUsersList] = useState([]);

  const addUserHandler = (username , userage) => {
    console.log(username , userage);
    setUsersList((prevUserList) => {
        return [...prevUserList , {key : Math.random().toString() , name:username , age : userage}];
    });
  }

  return (
    <div>
      <AddUser onAddUser = {addUserHandler}></AddUser>
      <UserList users = {usersList}></UserList>
    </div>
  );
}

export default App;
