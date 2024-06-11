import { AllArticles } from '../components/AllArticles/AllArticles';

const tags = [
  'Technology',
  'Open Source',
  'JavaScript',
  'Minimalism',
  'Self-help',
  'Animals',
  'Herbivores',
  'HTML',
  'CSS',
  'PHP',
  'Web Technologies',
  'Career',
  'Life',
  'Spirituality',
  'Food',
  'Cooking',
  'Sports',
  'Racing',
  'Mountain Hiking',
  'Cruising',
];

export const Articles = () => {
  return (
    <div>
      <div className="heading-box">
        <h2 className="heading">All Articles</h2>
        <div className="heading-line"></div>
      </div>
      {/*  */}
      <div className="main-article">
        <AllArticles />
        {/* tags */}
        <div className="tags-box">
          <h4 className="tags">tags.</h4>
          <ul>
            {tags.map((item, index) => (
              <li className="tags-item" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* pagination */}
    </div>
  );
};
