import styles from './topSection.module.css';
import top1 from '../../assets/top-1.png';
import top2 from '../../assets/top-2.png';
import top3 from '../../assets/top-3.png';

export const TopSection = () => {
  return (
    <div className={styles.top}>
      <div className="heading-box">
        <h2 className="heading">Топ 3</h2>
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
            <span className="subtitle">TECHNOLOGY</span>
            <h3 className="title">Amet non Ex Officia nulla Cupidatat</h3>
            <span className="meta">Jacob Henry September 27, 2017 (8 mins read)</span>
            <p className="desc">
              Sint anim Lorem aute duis Lorem incididunt. Nulla nostrud irure id ipsum aute
              excepteur duis sint. Do occaecat sit dolor magna esse. Mollit incididunt cillum
              consectetur fugiat adipisicing dolor est id minim amet cillum esse Lorem. Deserunt non
              duis excepteur aliqua duis eu reprehenderit.
            </p>
          </div>
        </div>
        {/*  */}
        <div className={styles.topBox}>
          <img src={top3} alt="" />
          {/*  */}
          <div className={styles.topBoxRight}>
            <span className="subtitle">ARTICLE</span>
            <h3 className="title">Dolor ex Tempor Cotur Culpa li</h3>
            <span className="meta">Darrell Lane May 16, 2017 (3 mins read)</span>
            <p className="desc">
              Incididunt sint nulla eu adipisicing eu reprehenderit proident consequat est. Nisi
              consectetur incididunt mollit officia ut cupidatat laborum proident eu velit Lorem
              deserunt deserunt voluptate. Proident nostrud laborum reprehenderit culpa irure id
              labore do ad do minim nisi. Incididunt ex.
            </p>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};
