import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";
import Lists from "../UI/Lists";
import Confirm from "../UI/Confirm";

const UsersList = ({ users, setUsers }) => {
  const [isSure, setIsSure] = useState(false);
  const [isTrue, setIsTrue] = useState(true);
  const [closeAnimation, setCloseAnimation] = useState(true);

  const [getId, setGetId] = useState("");

  const AreYouSure = (id, remove) => {
    setIsSure({
      title: "Delete users",
      message: "Are you sure?",
    });
    getIdHandler(id);

    let newTodo = [...users].filter((item) => {
      if (item.delete === remove) {
        item.delete = !item.delete;
      }
      return item;
    });
    setUsers(newTodo);
  };
  const changeIsSure = () => {
    setIsSure(null);
  };

  const filteredHandler = (id) => {
    let newTodo = [...users].filter((item) => item.id !== id);
    setUsers(newTodo);
    setIsSure(null);
  };

  const getIdHandler = (id) => {
    setGetId(id);
  };

  const closeModalHandler = (id) => {
    setCloseAnimation(false);
    setIsSure(null);
  };

  return (
    <>
      <Confirm
        isSure={isSure}
        isTrue={isTrue}
        changeIsSure={changeIsSure}
        filteredHandler={filteredHandler}
        closeModalHandler={closeModalHandler}
        getId={getId}
      />
      <Card className={classes.users}>
        <Lists users={users} AreYouSure={AreYouSure} />
      </Card>
    </>
  );
};

export default UsersList;
