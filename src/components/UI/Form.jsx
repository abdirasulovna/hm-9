import React from "react";
import Button from "./Button";

const Form = ({
  addUserHandler,
  enteredAge,
  enteredUsername,
  usernameChangeHandler,
  classes,
  ageChangeHandler,
}) => {
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        className={classes.username}
        value={enteredUsername}
        type="text"
        onChange={usernameChangeHandler}
      />
      <label htmlFor="age">Age (years)</label>
      <input
        id="age"
        className={classes.age}
        type="number"
        value={enteredAge}
        onChange={ageChangeHandler}
      />
      <Button type="submit">Add user</Button>
    </form>
  );
};

export default Form;
