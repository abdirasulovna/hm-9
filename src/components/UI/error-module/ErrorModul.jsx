import React from "react";
import { Buttons } from "../../Styles/styles";
import Button from "../Button";
import Card from "../Card";
import styles from "./Error.module.css";

const ErrorModall = (props) => {
  return (
    <div className={styles.backdrop}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          {props.isTrue ? (
            <>
              <Buttons onClick={() => props.filteredHandler(props.setId)}>
                yes
              </Buttons>
              <Buttons onClick={() => props.closeAnimationHandler(props.setId)}>
                no
              </Buttons>
            </>
          ) : (
            <Button onClick={props.onConfirm}>Okay</Button>
          )}
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModall;
