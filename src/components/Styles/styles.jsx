import styled from "styled-components";

const Li = styled.li`
  & {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & p {
    text-transform: capitalize;
  }
  & button {
    width: 100px;
    height: 30px;
    border-radius: 3px;
    border: 0.1px solid gray;
    background: #f5f5f5;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 20px,
      rgba(0, 0, 0, 0.05) 0px 3px 7px;
    transition: box-shadow 0.5s;
  }
  & button:active {
    transform: translateY(0.5px);
  }
  & button:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
      rgba(0, 0, 0, 0.05) 0px 5px 10px;
  }
`;

const Buttons = styled.button`
  & {
    width: 90px;
    height: 30px;
    background: #ece7ee;
    border: 0.1px solid #ccc;
    margin: 0 5px 0 0;
    border-radius: 3px;
    transition: box-shadow 0.3s;
    text-transform: capitalize;
    font-size: 16px;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  }
  &:active {
    box-shadow: none;
    color: gray;
  }
`;

export { Li, Buttons };
