import React, { useState } from "react";

// Importing Styles
import "./styles/app.scss";

// Importing Components
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
  const [toDo, setToDo] = useState([]);

  return (
    <div className="App">
      <div className="app-title">TODO</div>
      <ToDoInput toDo={toDo} setToDo={setToDo} />
      <ToDoList toDo={toDo} setToDo={setToDo} />
    </div>
  );
}

export default App;
