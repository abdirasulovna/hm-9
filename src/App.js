import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
// import UseLocalStorage from "./hooks/use-localstorage/UseLocalStorage";
// import Wrapper from "./components/Helpers/Wrapper";

function App() {
  // const [userList, setUserList] = useState([]);
  const [userList, setUserList] = useState( [
    { name: "nurtilek", age: 19, id: Math.random().toString(), delete: false },
  ]);
  const [empty, setEmpty] = useState(false);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString(), delete: false },
      ];
    });
    setEmpty(true);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} key="add-user" />
      <UsersList
        users={userList}
        setUsers={setUserList}
        key="use-list"
        userList={empty}
      />
    </div>
  );
}

export default App;
