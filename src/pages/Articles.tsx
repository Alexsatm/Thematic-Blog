
import styles from './allArticle.module.css';

import newest1 from '../assets/newWest-1.png';
import newest2 from '../assets/newWest-2.png';
import newest3 from '../assets/newWest-3.png';
import newest4 from '../assets/newWest-4.png';


export const Articles = () => {
  return (
    <div className={styles.top}>
    <div className="heading-box">
      <h2 className="heading">All Articles</h2>
      <div className="heading-line"></div>
    </div>
    <div className={styles.topRow}>
      <div className={styles.topBox}>
        <img src={newest1} alt="" />
        {/*  */}
        <div className={styles.topBoxRight}>
          <span className="subtitle">NATURE</span>
          <h3 className="title">Tempor deserunt Sunt Qui</h3>
          <span className="meta">Connie Robertson November 3, 2012</span>
          <p className="desc">
            Ea qui dolor aute cupidatat ad pariatur proident. Mollit nulla tempor aute
            reprehenderit ut dolore mollit nisi consequat excepteur ex officia pariatur irure.
          </p>
        </div>
      </div>
      {/*  */}
      <div className={styles.topBox}>
        <img src={newest2} alt="" />
        {/*  */}
        <div className={styles.topBoxRight}>
          <span className="subtitle">PLANTS</span>
          <h3 className="title">Occaecat Anim eu Qui</h3>
          <span className="meta">Eleanor Williamson September 28, 2014</span>
          <p className="desc">
            Qui ipsum consectetur ad incididunt et aliquip exercitation laboris nisi
            reprehenderit. Et excepteur commodo esse enim ea aliqua officia reprehenderit.
          </p>
        </div>
      </div>
      {/*  */}
      <div className={styles.topBox}>
        <img src={newest3} alt="" />
        {/*  */}
        <div className={styles.topBoxRight}>
          <span className="subtitle">FOOD</span>
          <h3 className="title">Fugiat Incididunt Voluptate Consequat</h3>
          <span className="meta">Bessie Watson June 13, 2012</span>
          <p className="desc">Mollit ea culpa ipsum pariatur eiusmod. Irure et.</p>
        </div>
      </div>
      {/*  */}
      <div className={styles.topBox}>
        <img src={newest4} alt="" />
        {/*  */}
        <div className={styles.topBoxRight}>
          <span className="subtitle">COLORFUL</span>
          <h3 className="title">Occaecat Anim eu Qui</h3>
          <span className="meta">Ted Simmmons June 21, 2015</span>
          <p className="desc">
            Amet ipsum occaecat aliqua aute nisi laboris nostrud culpa est do. Aliqua esse velit
            in excepteur esse qui voluptate laboris adipisicing qui irure elit amet excepteur.
          </p>
        </div>
      </div>
      {/*  */}
      <div className={styles.topBox}>
        <img src={newest1} alt="" />
        {/*  */}
        <div className={styles.topBoxRight}>
          <span className="subtitle">NATURE</span>
          <h3 className="title">Tempor deserunt Sunt Qui</h3>
          <span className="meta">Connie Robertson November 3, 2012</span>
          <p className="desc">
            Ea qui dolor aute cupidatat ad pariatur proident. Mollit nulla tempor aute
            reprehenderit ut dolore mollit nisi consequat excepteur ex officia pariatur irure.
          </p>
        </div>
      </div>
      {/*  */}
      <div className={styles.topBox}>
        <img src={newest2} alt="" />
        {/*  */}
        <div className={styles.topBoxRight}>
          <span className="subtitle">PLANTS</span>
          <h3 className="title">Occaecat Anim eu Qui</h3>
          <span className="meta">Eleanor Williamson September 28, 2014</span>
          <p className="desc">
            Qui ipsum consectetur ad incididunt et aliquip exercitation laboris nisi
            reprehenderit. Et excepteur commodo esse enim ea aliqua officia reprehenderit.
          </p>
        </div>
      </div>
      {/*  */}
      <div className={styles.topBox}>
        <img src={newest3} alt="" />
        {/*  */}
        <div className={styles.topBoxRight}>
          <span className="subtitle">FOOD</span>
          <h3 className="title">Fugiat Incididunt Voluptate Consequat</h3>
          <span className="meta">Bessie Watson June 13, 2012</span>
          <p className="desc">Mollit ea culpa ipsum pariatur eiusmod. Irure et.</p>
        </div>
      </div>
      {/*  */}
      <div className={styles.topBox}>
        <img src={newest4} alt="" />
        {/*  */}
        <div className={styles.topBoxRight}>
          <span className="subtitle">COLORFUL</span>
          <h3 className="title">Occaecat Anim eu Qui</h3>
          <span className="meta">Ted Simmmons June 21, 2015</span>
          <p className="desc">
            Amet ipsum occaecat aliqua aute nisi laboris nostrud culpa est do. Aliqua esse velit
            in excepteur esse qui voluptate laboris adipisicing qui irure elit amet excepteur.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}
