import React, { useState } from "react";
import styles from "./styles.module.css";

type AddTodoProps = {
  onAdd: (text: string) => void;
};

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [title, setTitle] = useState<string>("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() !== "") {
      onAdd(title);
      setTitle("");
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        value={title}
        onChange={handleTitleChange}
        placeholder="Add a new todo"
      />
      <button className={styles.button} type="submit">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
