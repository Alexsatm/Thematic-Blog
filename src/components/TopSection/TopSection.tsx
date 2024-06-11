import styles from './topSection.module.css';
import top1 from '../../assets/top-1.png';
import top2 from '../../assets/top-2.png';
import top3 from '../../assets/top-3.png';

export const TopSection = () => {
  return (
    <div className={styles.top}>
      <div className="heading-box">
        <h2 className="heading">Top 3</h2>
        <div className="heading-line"></div>
      </div>
      <div className={styles.topRow}>
        <div className={styles.topBox}>
          <img src={top1} alt="" />
          {/*  */}
          <div className={styles.topBoxRight}>
            <span className="subtitle">MINIMALISM</span>
            <h3 className="title">Culpa sit Laboris Exercitation ea Fugiat</h3>
            <span className="meta">Leslie Pena April 25, 2012 (6 mins read)</span>
            <p className="desc">
              Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore
              consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu
              aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo
              proident nulla commodo ullamco labore et esse.
            </p>
          </div>
        </div>
        {/*  */}
        <div className={styles.topBox}>
          <img src={top2} alt="" />
          {/*  */}
          <div className={styles.topBoxRight}>
            <span className="subtitle">MINIMALISM</span>
            <h3 className="title">Culpa sit Laboris Exercitation ea Fugiat</h3>
            <span className="meta">Leslie Pena April 25, 2012 (6 mins read)</span>
            <p className="desc">
              Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore
              consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu
              aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo
              proident nulla commodo ullamco labore et esse.
            </p>
          </div>
        </div>
        {/*  */}
        <div className={styles.topBox}>
          <img src={top3} alt="" />
          {/*  */}
          <div className={styles.topBoxRight}>
            <span className="subtitle">MINIMALISM</span>
            <h3 className="title">Culpa sit Laboris Exercitation ea Fugiat</h3>
            <span className="meta">Leslie Pena April 25, 2012 (6 mins read)</span>
            <p className="desc">
              Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore
              consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu
              aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo
              proident nulla commodo ullamco labore et esse.
            </p>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};
