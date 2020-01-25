import connect_our_kids from './images/connect_our_kids.png';
import post from './images/post.png';
import mataka from './images/mataka.png';
const data = [
    {
        image: mataka,
        title: 'Mataka (School Calendar)',
        description: 'School Calendar was an app idea from a high school basketball coach. He wanted to easily schedule game practices and other events.',
        url: 'https://maramataka.com/',
        github: 'https://github.com/Lambda-School-Labs/school-calendar-fe/',
        tech: ['React', 'Material-UI', 'Node.js', 'Express.js', 'SQLite3']
    },
    {
        image: connect_our_kids,
        title: 'Connect Our Kids',
        description: 'Connect Our Kids is an App built with React Native to help kids in foster homes find families. This tool will help social workers quickly place foster kids into permanent homes',
        url: 'https://www.connectourkids.org/',
        github: 'https://github.com/labs13-connect-kids/mobile',
        tech: ['React Native', 'Native Base', 'Redux', 'Auth0']
    },
    {
        image: post,
        title: 'POST',
        description: 'POST is a full CRUD note taking app created using React to showcase my skills with react and react router',
        url: 'https://nervous-bardeen-69bc6f.netlify.com/',
        github: 'https://github.com/pedrolmr/post',
        tech: ['React', 'Styled components']
    },
]
export default data;