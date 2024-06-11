import styles from './hero.module.css'

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.article}>
        <span className="subtitle">FEATURED ARTICLE</span>
        <h3 className="title">World`s Most Dangerous Technology Ever Made.</h3>
        <span className="meta">Ralph Hawkins May 7, 2019 (10 mins read)</span>
        <p className="desc">
          Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt.
          Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim.
          Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.
        </p>
      </div>
    </div>
  );
}