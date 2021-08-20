import React from "react";
import ToDoListItem from "./ToDoListItem";

const ToDoList = ({ toDo, setToDo }) => {
  return (
    <div className="list-container">
      {toDo.map((toDoItem) => (
        <ToDoListItem
          toDo={toDo}
          setToDo={setToDo}
          toDoItem={toDoItem}
          key={toDoItem.key}
        />
      ))}
    </div>
  );
};

export default ToDoList;
