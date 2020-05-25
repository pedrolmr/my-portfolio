import connect_our_kids from './images/connect_our_kids.png';
import post from './images/post.png';
import mataka from './images/mataka.png';
const data = [
  {
    image: connect_our_kids,
    title: 'Connect Our Kids',
    purpose:
      'Connect Our Kids is an App built with React Native to help kids in foster care find families. This tool will help social workers quickly place foster kids into permanent homes.',
    description: [
      'Executed in 7 weeks with a team of 6 developers',
      'Auth0 used for Authentication and tokens',
      'Personally focused on warning messages, input validation and helped set up Auth0',
      "Used the People Search API that's built on the Pipl API",
    ],
    url: 'https://www.connectourkids.org/',
    github: 'https://github.com/labs13-connect-kids/mobile',
    tech: ['React Native', 'Native Base', 'Redux', 'Auth0'],
    categories: ['front-end', 'back-end'],
  },
  {
    image: post,
    title: 'POST',
    purpose:
      'POST is a full CRUD note taking app created with React to showcase my skills with react.',
    description: [
      'Executed in 2 weeks working on it part time',
      'Implemented CRUD operations',
      'Used React-router to implement routing functionality',
      'Styled-components was used to style the app',
    ],
    url: 'https://nervous-bardeen-69bc6f.netlify.com/',
    github: 'https://github.com/pedrolmr/post',
    tech: ['React', 'Styled components'],
    categories: ['front-end'],
  },
];
export default data;
