import connect_our_kids from './images/connect_our_kids.png';
import post from './images/post.png';
import mataka from './images/mataka.png';
const data = [
  {
    image: mataka,
    title: 'Mataka (School Calendar)',
    purpose:
      'School Calendar was an app idea from a high school basketball coach. He wanted to easily schedule game practices and other events.',
    description: [
      'Team Lead overseeing 6 Fullstack web developers and 2 UX designers',
      'Helped deploy Frontend and add a domain to Netlify DNS',
      'Used Rrule JS library to be able to create recurrent events',
      'Moment.js was used to display dates and times in the events',
      'Worked with the Full Calendar API to display the calendar',
      "Google calendar API was used to push events to a user's google calendar",
    ],
    url: 'https://maramataka.com/',
    github: 'https://github.com/Lambda-School-Labs/school-calendar-fe/',
    tech: [
      'React.js',
      'Material-UI',
      'Node.js',
      'Express.js',
      'Context API',
      'Full Calendar API',
      'Rrule.js',
      'Moment.js',
      'Google calendar API',
    ],
    categories: ['front-end', 'back-end'],
  },
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
