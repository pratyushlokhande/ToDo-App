import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash, faRedo } from "@fortawesome/free-solid-svg-icons";

const ToDoListItem = ({ toDo, setToDo, toDoItem }) => {
  const [taskStatus, setTaskStatus] = useState(false);

  const getDateTime = () => {
    const currentdate = new Date();
    const datetime =
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();

    return datetime;
  };

  const [dateTime, setDateTime] = useState(getDateTime());

  if (toDoItem.value === "") {
    const emojis = [
      "😎",
      "🤷‍♂️",
      "💭",
      "👀",
      "😬",
      "🙄",
      "😯",
      "❓",
      "❔",
      "😋",
      "🤔",
      "🤨",
      "😉",
    ];
    toDoItem.value = emojis[Math.floor(Math.random() * emojis.length)];
  }

  return (
    <div className={`item-container ${taskStatus ? "completed" : ""}`}>
      <div className="todo">
        <div className="todo-content">{toDoItem.value}</div>
        <div className="date-time">{dateTime}</div>
      </div>
      <div className="todo-btn">
        <button
          onClick={() => {
            setTaskStatus(!taskStatus);
            setDateTime(getDateTime());
          }}
        >
          <FontAwesomeIcon size="lg" icon={taskStatus ? faRedo : faCheck} />
        </button>
        <button
          onClick={() => setToDo(toDo.filter((i) => i.key !== toDoItem.key))}
        >
          <FontAwesomeIcon size="lg" icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default ToDoListItem;
