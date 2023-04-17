import Card from "./Card";

import styles from "./UserList.module.css";

const UserList = (props) => {
    console.log(props.users)
  return (
    <Card className = {styles.users}>
      <ul>
        {props.users.map((user) => {
          return <li key = {user.key}>
            {user.name} ({user.age} Years Old.)
          </li>;
        })}
      </ul>
    </Card>
  );
};

export default UserList;
