import React from "react";
import PropTypes from "prop-types";
import styles from "./avatar.module.css"

const Avatar = ({ name, avatarUrl }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatarBorder}>
        <div className={styles.avatarWrapper}>
          <img src={avatarUrl} alt={name} width="62px" height="62px" />
        </div>
      </div>
    </div>
  );
};

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

export default Avatar;