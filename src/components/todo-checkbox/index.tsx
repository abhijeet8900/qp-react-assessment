import React from "react";
import styles from "./styles.module.css";

type Props = {
  checked: boolean;
};

const TodoCheckbox = ({ checked }: Props) => {
  return (
    <div className={styles.round}>
      <input type="checkbox" checked={checked} id="checkbox" />
      <label></label>
    </div>
  );
};

export default TodoCheckbox;
