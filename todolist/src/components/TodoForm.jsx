import { useEffect, useRef, useState } from "react";

export const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({ id: Math.floor(Math.random() * 10000), text: input });

    setInput("");
  };
  return (
    <form action="" className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Add a Todo"
            className="todo-input"
            value={input}
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a Todo"
            className="todo-input"
            value={input}
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Add todo</button>
        </>
      )}
    </form>
  );
};
