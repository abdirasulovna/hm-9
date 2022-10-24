import React from "react";
import ReactDOM from "react-dom";
import ErrorModall from "./error-module/ErrorModul";

const Confirm = ({
  isSure,
  changeIsSure,
  isTrue,
  filteredHandler,
  getId,
  closeModalHandler,
}) => {
  return (
    <>
      {isSure &&
        ReactDOM.createPortal(
          <ErrorModall
            {...isSure}
            onConfirm={changeIsSure}
            isTrue={isTrue}
            filteredHandler={filteredHandler}
            setId={getId}
            closeAnimationHandler={closeModalHandler}
          />,
          document.getElementById("confirm-root")
        )}
    </>
  );
};

export default Confirm;
