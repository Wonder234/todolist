import { useState } from "react";

import "./App.css";

function App() {
  const [task, setask] = useState("");
  const [tasklist, setasklist] = useState([]);
  function inputs(event) {
    event.preventDefault();
    setask(event.target.value);
  }
  function add() {
    if (task != "") {
      const element = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };
      setasklist([...tasklist, element]);
    }
  }
  function deletes(e, id) {
    e.preventDefault();
    setasklist(tasklist.filter((prev) => prev.id != id));
  }
  function Completed(elem, id) {
    elem.preventDefault();
    const element = tasklist.findIndex((prev) => prev.id == id);
    const news = [...tasklist];
    news[element] = {
      ...news[element],
      isCompleted: true,
    };
    setasklist(news);
  }
  function clear() {
    setasklist([]);
  }
  return (
    <div className="everything">
      <h1 className="head">wonder todo app</h1>
      <div className="diver">
        <input
          type="text"
          className="text"
          placeholder="what are you craving for! ?"
          onChange={inputs}
        />
        <button className="add" onClick={add}>
          Add
        </button>
      </div>
      <div>
        {tasklist != [] ? (
          <ul>
            {tasklist.map((prev) => (
              <li
                key={prev.id}
                className={prev.isCompleted ? "listed" : "crosstext"}
              >
                {prev.value}
                <button
                  className="deletes"
                  onClick={(e) => deletes(e, prev.id)}
                >
                  Delete
                </button>
                <button
                  className="completed"
                  onClick={(e) => Completed(e, prev.id)}
                >
                  completed
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <button className="clear" onClick={clear}>
        Clear
      </button>
    </div>
  );
}

export default App;
