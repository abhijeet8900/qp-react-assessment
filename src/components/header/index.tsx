import React from "react";
import CheckIcon from "../../icons/check-icon";
import styles from "./styles.module.css";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className={styles.container}>
      <CheckIcon className={styles.icon} />{" "}
      <h1 className={styles.header}>Todo App</h1>
    </div>
  );
};

export default Header;
