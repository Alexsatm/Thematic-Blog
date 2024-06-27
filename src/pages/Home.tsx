import { Newest } from '../components/Newest/Newest';
import { TopSection } from '../components/TopSection/TopSection';

export const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="article">
          <span className="subtitle">FEATURED ARTICLE</span>
          <h3 className="title">World`s Most Dangerous Technology Ever Made.</h3>
          <span className="meta">Ralph Hawkins May 7, 2019 (10 mins read)</span>
          <p className="desc">
            Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit
            incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint
            consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip
            mollit nulla consequat velit magna.
          </p>
        </div>
      </div>
      <TopSection />
      <Newest />
    </div>
  );
};
