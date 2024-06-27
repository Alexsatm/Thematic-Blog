import styles from './allArticles.module.css';

import newest1 from '../../assets/newWest-1.png';
// import newest2 from '../../assets/newWest-2.png';
// import newest3 from '../../assets/newWest-3.png';
// import newest4 from '../../assets/newWest-4.png';

export const AllArticles = () => {
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.topRow}>
          <div className={styles.topBox}>
            <img src={newest1} alt="" />
            {/*  */}
            <div className={styles.topBoxRight}>
              <span className="subtitle">NATURE</span>
              <h3 className="title">Tempor deserunt Sunt Qui</h3>
              <span className="meta">Connie Robertson November 3, 2012</span>
              <p className={styles.desc}>
                Ea qui dolor aute cupidatat ad pariatur proident. Mollit nulla tempor aute
                reprehenderit ut dolore mollit nisi consequat excepteur ex officia pariatur irure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
