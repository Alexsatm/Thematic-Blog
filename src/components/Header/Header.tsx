import styles from './header.module.css'
import logo from '../../assets/Logo.svg'
import search from '../../assets/search.svg'

import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className="d-flex align-center">
        <img className='mr-50' src={logo} alt="logo" />
        <nav>
          <ul className={styles.navItem}>
            <Link to="/"><li className={styles.navList}>Home</li></Link>
            <Link to='/articles'><li className={styles.navList}>Articles</li></Link>
            <li className={styles.navList}>Favorites</li>
          </ul>
        </nav>
      </div>
      {/*  */}
      <div className={styles.rightNav}>
        <img src={search} alt="search" />
        <button className={styles.btn}>Login</button>
      </div>
    </div>
  );
}
