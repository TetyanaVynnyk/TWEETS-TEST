import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.css";

const Button = ({ children, onClick, name }) => {
  return (
    <Button className={styles.button} onClick={onClick} name={name}>
      {children}
    </Button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default Button;