import { Link } from 'react-router-dom';

import styles from './mainPage.module.css';

import tweetPct from '../../assets/images/tweet-pct.png';

const MainPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainPageWrapper}>
        <h1 className={styles.title}>Welcome to Tweets-page</h1>
      </div>
      <div className={styles.mainPageWrapper}>
        <img className={styles.mainImg} src={tweetPct} alt="mainImage" />
      </div>
      <div>
      <nav>
      <ul className={styles.nav__list}>
        <li>
          <Link className={styles.nav__link} to="/" >
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.nav__link} to="/users">
            Users
          </Link>
        </li>
      </ul>
    </nav>
      </div>
      
    </div>);
};

export default MainPage;