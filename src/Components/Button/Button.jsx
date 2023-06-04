import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, onClick, name, className }) => {
  return (
    <button className={className} onClick={onClick} name={name}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default Button;