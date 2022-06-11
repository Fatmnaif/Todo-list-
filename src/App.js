import React, { useState } from "react";
import "./App.css";
import shortid from "shortid";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addtask = ()=> {
    const item = {
      id: shortid.generate(),
      value: task,
    };
    setTasks([...tasks, item])
    setTask('');
  }

  function deleteTask(id) {
    const newlist = tasks.filter((item) => item.id !== id);
    setTasks(newlist);
    // const itemsCopy = [...tasks];
    // itemsCopy.splice(id, 1);
    // setTasks(itemsCopy)
  }

  return (
    <div className="app">
      <h1>Todos</h1>

      <input
        type="text"
        placeholder="write a task..."
        value={task}
        onInput={(e) => setTask(e.target.value)}
      />

      <button className="add-button" onClick={() => addtask()}>+</button>

      <ul>
        {tasks.map((item) => {
          return (
            <div>
              <li key={item.id}>
                {item.value}
                <button
                  className="delete-button"
                  onClick={() => deleteTask(item.id)}
                >X</button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;