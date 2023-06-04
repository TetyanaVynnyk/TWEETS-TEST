import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Avatar from "../Avatar";
import Button from "../Button";
import Logo from "../../assets/icons/Vector.svg";
import styles from "./card.module.css";
import buttonStyles from "../Button/button.module.css"

const Card = ({ name, tweets, avatarUrl, initialFollowers }) => {
  const [followers, setFollowers] = useState(initialFollowers);

  useEffect(() => {
    const storedFollowers = localStorage.getItem(`${name}Followers`);
    if (storedFollowers) {
      setFollowers(parseInt(storedFollowers));
    }
  }, [name]);

  useEffect(() => {
    localStorage.setItem(`${name}Followers`, followers.toString());
  }, [followers, name]);

  const getVisibleFollowers = (followers) => {
    const str = followers.toString();
    return str.slice(0, -3) + "," + str.slice(-3);
  };

  const getButtonStatus = (followers) => {
    const ret = followers === initialFollowers ? "Follow" : "Following";
    console.log(ret);
    return ret;
  };

  const handleClick = () => {
    if (followers === initialFollowers) {
      setFollowers((prevState) => prevState + 1);
    } else {
      setFollowers((prevState) => prevState - 1);
    }
  };

  const buttonStatus = getButtonStatus(followers);

  return (
    <div className={styles.card}>
      <div className={styles.logoContainer}>
        <img
          className={styles.img}
          src={Logo}
          alt="Logo"
          width="76px"
          height="22px"
        />
      </div>
      <Avatar name={name} avatarUrl={avatarUrl} />
      <p className={styles.text}> {tweets} tweets</p>
      <p className={styles.text}>{getVisibleFollowers(followers)} Followers</p>
      {buttonStatus === "Following" && (
        <Button
          onClick={handleClick}
          name={buttonStatus}
          className={buttonStyles.activeBtn}
        >
          {buttonStatus}
        </Button>
      )}
      {buttonStatus === "Follow" && <Button onClick={handleClick} name={buttonStatus} className={buttonStyles.button}>
        {buttonStatus}
      </Button>}
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  initialFollowers: PropTypes.number.isRequired,
};

export default Card;
