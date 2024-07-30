import * as React from "react";
import Header from "../../components/Header";

import ToDoCard from "../../components/ToDoCard";
import { ToDoContainer, ToDoContainerCard, ToDoTitle } from "./style";

const ToDoList = () => {
  return (
    <>
      <Header />
      <ToDoContainer>
        <ToDoContainerCard>
          <ToDoTitle>New</ToDoTitle>
          <ToDoCard />
        </ToDoContainerCard>
        <ToDoContainerCard>
          <ToDoTitle>To Do</ToDoTitle>
          <ToDoCard />
        </ToDoContainerCard>
        <ToDoContainerCard>
          <ToDoTitle>Doing</ToDoTitle>
          <ToDoCard />
        </ToDoContainerCard>
        <ToDoContainerCard>
          <ToDoTitle>Done</ToDoTitle>
          <ToDoCard />
        </ToDoContainerCard>
      </ToDoContainer>
    </>
  );
};

export default ToDoList;
