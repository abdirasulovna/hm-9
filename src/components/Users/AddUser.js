import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Wrapper from "../Helpers/Wrapper";
import ErrorModall from "../UI/error-module/ErrorModul";
import ReactDOM from "react-dom";
import Form from "../UI/Form";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isError, setIsError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsError({
        title: "Invalid input",
        message: "Please enter a validd and age",
      });
      return;
    }

    if (+enteredAge < 1) {
      setIsError({
        title: "Invalid input",
        message: `Pleae enter a valid more than ${enteredAge} `,
      });
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };
  console.log(isError);
  console.log(enteredAge);

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const onConfirm = () => {
    setIsError(null);
  };

  return (
    <Wrapper>
      {isError &&
        ReactDOM.createPortal(
          <ErrorModall {...isError} onConfirm={onConfirm} />,
          document.getElementById("modal-root")
        )}
      <Card className={classes.input}>
        <Form
          addUserHandler={addUserHandler}
          enteredAge={enteredAge}
          enteredUsername={enteredUsername}
          usernameChangeHandler={usernameChangeHandler}
          classes={classes}
          ageChangeHandler={ageChangeHandler}
        />
      </Card>
    </Wrapper>
  );
};

export default AddUser;
