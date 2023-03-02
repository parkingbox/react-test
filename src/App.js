import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([{ id: 1, inputValue: 'react를 배워봅시다.' }]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodos = {
      id: todos.length + 1,
      inputValue,
    };
    setTodos([...todos, newTodos]);
  };
  const inputChange = (e) => {
    if (e.target.name === "inputValue") {
      return setInputValue(e.target.value);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div>
          <form>
            <input
              type="text"
              name="inputValue"
              value={inputValue}
              onChange={inputChange}
            />
            <button onClick={handleAddTodo}>추가하기</button>
          </form>
        </div>
        <h1>Todo List</h1>
      </div>
      <div className="todoList">
        {todos.map((todo, i) => {
          return (
            <div key={i} className="newTodo">
              <p>{todo.inputValue}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
