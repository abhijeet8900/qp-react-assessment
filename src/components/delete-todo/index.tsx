import React from "react";
import DeleteIcon from "../../icons/delete-icon";
import styles from "./styles.module.css";

type Props = { onClick: () => void };

function DeleteTodo({ onClick }: Props) {
  return (
    <div data-testid="delete-todo"  className={styles.container} onClick={onClick}>
      <DeleteIcon className={styles.icon} />
    </div>
  );
}

export default DeleteTodo;
