import React from "react";
import Card from "../Card";
import users from "../../assets/users.json";
import styles from "./cardList.module.css";

const CardList = () => {
  return (
    <div className={styles.list}>
      {users &&
        users.map(({ avatar, user, id, tweets, followers }) => (
          <li key={id}>
            <Card
              name={user}
              tweets={tweets}
              initialFollowers={followers}
              avatarUrl={avatar}
            />
          </li>
        ))}
    </div>
  );
};

export default CardList;