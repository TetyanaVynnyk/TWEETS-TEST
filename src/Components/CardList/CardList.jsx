import React, { useEffect, useState } from 'react';

import Card from "../Card";
import Button from "../Button";
import Loader from '../Loader/Loader';

import { getAllUsers } from '../../shared/services/users';

import styles from "./cardList.module.css";

const CardList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(3);
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [isLoadMoreClicked, setIsLoadMoreClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAllUsers = async () => {
      setIsLoading(true);
      const fetchedUsers = await getAllUsers();
      setUsers(fetchedUsers);
      setIsLoading(false);
    };

    fetchAllUsers();
  }, []);

  useEffect(() => {
    const lastIndex = currentPage * usersPerPage;
    const updatedUsers = users.slice(0, lastIndex);
    setDisplayedUsers(updatedUsers);

    if (isLoadMoreClicked && updatedUsers.length > 0) {
      setIsLoadMoreClicked(false);
    }
  }, [users, currentPage, isLoadMoreClicked, usersPerPage]);

  const handleLoadMoreClick = () => {
    setCurrentPage(prevPage => prevPage + 1);
    setIsLoadMoreClicked(true);
  };
  return (
    <div>
    <ul className={styles.list}>
      {displayedUsers.map(({ id, user, tweets, followers, avatar }) => (
        <Card key={id} id={id}
        name={user}
        tweets={tweets}
        initialFollowers={followers}
        avatarUrl={avatar}
      />
      ))}
    </ul>
    {isLoading ? (
      <Loader />
    ) : (
      users.length > displayedUsers.length && (
        <Button onClick={handleLoadMoreClick}>Load More</Button>
      )
    )}
  </div>
  );
};

export default CardList;