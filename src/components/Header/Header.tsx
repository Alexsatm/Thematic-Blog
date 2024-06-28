import styles from './header.module.css';
import logo from '../../assets/Logo.svg';
import search from '../../assets/search.svg';

import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className="d-flex align-center">
        <img className="mr-50" src={logo} alt="logo" />
        <nav>
          <ul className={styles.navItem}>
            <Link to="/">
              <li className={styles.navList}>Главная</li>
            </Link>
            <Link to="/articles">
              <li className={styles.navList}>Статьи</li>
            </Link>
            <Link to="/favorites">
              <li className={styles.navList}>Избранное</li>
            </Link>
          </ul>
        </nav>
      </div>
      {/*  */}
      <div className={styles.rightNav}>
        <img className={styles.search} src={search} alt="search" />
        <Link to="/forms"><button className={styles.btn}>Вход</button></Link>
        
      </div>
    </div>
  );
};
