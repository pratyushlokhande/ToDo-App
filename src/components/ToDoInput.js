import React, { useState } from "react";
import { uuid } from "uuidv4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ToDoInput = ({ toDo, setToDo }) => {
  const [inputValue, setInputValue] = useState("");
  const id = uuid();
  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      setToDo([...toDo, { key: id, value: inputValue }]);
      setInputValue("");
    }
  };
  return (
    <div className="input-container">
      <input
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => handleKeypress(e)}
        type="text"
        value={inputValue}
        placeholder="Enter Note"
      />
      <button
        onClick={() => {
          setToDo([...toDo, { key: id, value: inputValue }]);
          setInputValue("");
        }}
        className="input-button"
      >
        <FontAwesomeIcon size="lg" icon={faPlus} />
      </button>
    </div>
  );
};

export default ToDoInput;
