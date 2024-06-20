import { AllArticles } from '../components/AllArticles/AllArticles';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

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
    <div className='articles'>
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
        {/*  */}
      </div>
      {/* pagination */}
      <div className='pagination-box'>
        <Stack spacing={2}>
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
        </div>
    </div>
  );
};
