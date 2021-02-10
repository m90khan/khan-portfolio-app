import { v4 as uuidv4 } from 'uuid';

import {
  imgKP1,
  imgAT4,
  imgAT1,
  imgAT2,
  imgAT3,
  AlohaTravels,
  KhanPortfolio,
} from './../assets/projects';

const data = () => {
  return [
    {
      id: uuidv4(),
      title: 'Aloha Travels',
      overview: AlohaTravels,
      images: [imgAT1, imgAT2, imgAT3, imgAT4],
      builtWith: 'HTML5, CSS3 (SCSS), JS, NodeJS, Express, Mongoose, MondoDB, Pug, JWT',
      description:
        'It is a Full Stack Tour booking platform that provide an comfortable experience to view tour and book it online.',
      side: 'Full-Stack',
      primaryColor: '#FFBC4B',
      socialIcons: [
        {
          name: 'dribble',
          link: null,
        },
        {
          name: 'behance',
          link: 'https://github.com/m90khan',
        },
        {
          name: 'github',
          link: 'https://github.com/m90khan/natures-tours-api',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Mifolio',
      overview: KhanPortfolio,
      images: [imgKP1],
      builtWith: 'HTML5, CSS3, SCSS, JavaScript, React, Framer, Figma',
      description: 'Portfolio for video editors built in react with framer motion',
      side: 'Front-End',
      primaryColor: '#23D997',
      live: 'https://github.com/m90khan/mifolio-react-app',
      video: '',
      socialIcons: [
        {
          name: 'github',
          link: 'https://github.com/m90khan/mifolio-react-app',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'GamerStore',
      overview: KhanPortfolio,
      images: [imgKP1],
      builtWith: 'HTML5, CSS3, SCSS, JavaScript, React, Redux, Api, Framer, Figma',
      description:
        'Search and View Games by fetching data from rawg.io api and render it into different sections',
      side: 'Front-End',
      primaryColor: '#FE7676',
      live: 'https://github.com/m90khan/gamer-store-react-app',
      video: '',
      socialIcons: [
        {
          name: 'github',
          link: 'https://github.com/m90khan/gamer-store-react-app',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Akademie Front',
      overview: KhanPortfolio,
      images: [imgKP1],
      builtWith: 'HTML5, CSS3, SCSS, JavaScript, Gatsby, Figma',
      description:
        'It is the test frontend for akademie, the learning platform for programming',
      side: 'Front-End',
      primaryColor: '#101010',
      live: 'https://github.com/m90khan/akademei-frontend-gatsby',
      video: '',
      socialIcons: [
        {
          name: 'github',
          link: 'https://github.com/m90khan/akademei-frontend-gatsby',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'PhotosPix',
      overview: KhanPortfolio,
      images: [imgKP1],
      builtWith: 'HTML5, CSS3, SCSS, JavaScript, APIs',
      description:
        'Fetching Data from Pexels and PixBay APIs and rendering them onto HTML Page',
      side: 'Front-End',
      primaryColor: '#F52853',
      live: 'https://m90khan.github.io/Photos-Pexels-Pix-api/',
      video: '',
      socialIcons: [
        {
          name: 'github',
          link: 'https://m90khan.github.io/Photos-Pexels-Pix-api',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Palette Generator',
      overview: KhanPortfolio,
      images: [imgKP1],
      builtWith: 'HTML5, CSS3, SCSS, JavaScript, GSAP, Scroll Magic, Figma',
      description:
        'To create a palette for the next development project. Color Palette Generator and brewer scheme',
      side: 'Front-End',
      primaryColor: '#0376C9',
      live: 'https://m90khan.github.io/Color-Palette-Generator/',
      video: 'Video Here',
      socialIcons: [
        {
          name: 'github',
          link: 'https://m90khan.github.io/Color-Palette-Generator',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Advanture',
      overview: KhanPortfolio,
      images: [imgKP1],
      builtWith: 'HTML5, CSS3, SCSS, JavaScript, GSAP, Scroll Magic, Figma',
      description:
        'Explore your new adventure in the mountains of Himalaya. The main focus was to practice GSAP library.',
      side: 'Front-End',
      primaryColor: '#567ce4',
      live: 'https://m90khan.github.io/Advanture-Web-GSAP/',
      video: 'Video Here',
      socialIcons: [
        {
          name: 'github',
          link: 'https://m90khan.github.io/Advanture-Web-GSAP',
        },
        {
          name: 'dribble',
          link: 'https://dribbble.com/shots/13958893-Advent-GSAP',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Campsel',
      overview: KhanPortfolio,
      images: [imgKP1],
      builtWith: 'HTML5, CSS3, SCSS, JavaScript, GSAP, Figma, Webpack',
      description:
        'Visit an adventurous location for your next trip. Complete setup of the environment with webpack',
      side: 'Front-End',
      primaryColor: '#FF8A6C',
      live: 'https://dazzling-mclean-a17029.netlify.app/',
      video: 'Video Here',
      socialIcons: [
        {
          name: 'github',
          link: 'https://github.com/m90khan/Campsel',
        },
        {
          name: 'dribble',
          link:
            'https://dribbble.com/shots/14027758-Campsel-Camping-Website-Front-end-Development',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'JS Projects 1',
      overview: KhanPortfolio,
      images: [imgKP1],
      builtWith: 'HTML5, CSS3, SCSS, JavaScript, APIs, Figma, Webpack',
      description: 'Combination of five different projects to practice javaScript.',
      side: 'Front-End',
      primaryColor: '#1F9CF0',
      live: 'https://m90khan.github.io/5-JavaScript-Projects-Part-1/',
      video: '',
      socialIcons: [
        {
          name: 'github',
          link: 'https://github.com/m90khan/5-JavaScript-Projects-Part-1',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Sergio De Paula',
      overview: KhanPortfolio,
      images: [imgKP1],
      builtWith: 'HTML5, CSS3, SCSS, JavaScript, GSAP, Figma, Webpack',
      description: 'It is a designer portfolio built from design to development',
      side: 'Front-End',
      primaryColor: '#21BDB4',
      live: 'https://github.com/m90khan/designer-paula/',
      video: '',
      socialIcons: [
        {
          name: 'github',
          link: 'https://github.com/m90khan/designer-paula',
        },
        {
          name: 'behance',
          link: 'https://www.behance.net/gallery/112665547/De-Paula',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'ChuckSum',
      overview: KhanPortfolio,
      images: [imgKP1],
      builtWith: 'HTML5, CSS3, SCSS, JavaScript, API, GSAP, Photoshop',
      description:
        'A Lorem Ipsum Generator based on Chuck Norris Jokes Choose X number of paragraphs and based on input value, X jokes will be generated',
      side: 'Front-End',
      primaryColor: '#154353',
      live: 'https://m90khan.github.io/ChuckSum---Lorem-Ipsum-Generator/',
      video: '',
      socialIcons: [
        {
          name: 'github',
          link: 'https://m90khan.github.io/ChuckSum---Lorem-Ipsum-Generator',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'BeatMaker',
      overview: KhanPortfolio,
      images: [imgKP1],
      builtWith: 'HTML5, CSS3, SCSS, JavaScript',
      description:
        'A recursive beat player of kick, snare and hihat based on tempo slider.',
      side: 'Front-End',
      primaryColor: '#F7A782',
      live: 'https://m90khan.github.io/Drum-Beats-Maker-WebApp/',
      video: '',
      socialIcons: [
        {
          name: 'github',
          link: 'https://github.com/m90khan/Drum-Beats-Maker-WebApp',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Mailbox',
      overview: KhanPortfolio,
      images: [imgKP1],
      builtWith: 'HTML5, CSS3, SCSS, JavaScript',
      description: 'Implementation of mailbox design into code',
      side: 'Front-End',
      primaryColor: '#5F77FB',
      live: 'https://m90khan.github.io/MailboxX',
      video: '',
      socialIcons: [
        {
          name: 'github',
          link: 'https://m90khan.github.io/MailboxX',
        },
      ],
    },

    {
      id: uuidv4(),
      title: 'FindYou',
      overview: KhanPortfolio,
      images: [imgKP1],
      builtWith: 'HTML5, CSS3, SCSS',
      description: 'It is an app landing page for a chat application',
      side: 'Front-End',
      primaryColor: '#80e0dd',
      live: 'https://github.com/m90khan/Find-You-App-Features-Page/',
      video: '',
      socialIcons: [
        {
          name: 'github',
          link: 'https://github.com/m90khan/Find-You-App-Features-Page',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'RealtorX',
      overview: KhanPortfolio,
      images: [imgKP1],
      builtWith: 'HTML5, CSS3, SCSS, NPM',
      description: 'Realtor Listing Website for the real estate agents',
      side: 'Front-End',
      primaryColor: '#ffb142',
      live: 'https://m90khan.github.io/RealtorX---Housing-Agency/',
      video: '',
      socialIcons: [
        {
          name: 'github',
          link: 'https://m90khan.github.io/RealtorX---Housing-Agency',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Travelo',
      overview: KhanPortfolio,
      images: [imgKP1],
      builtWith: 'HTML5, CSS3, SCSS, NPM',
      description: 'Travelo is a travel company front-end first overview of the company.',
      side: 'Front-End',
      primaryColor: '#ffb142',
      live: 'https://m90khan.github.io/Travelo---Front-End-for-WebApp/',
      video: '',
      socialIcons: [
        {
          name: 'github',
          link: 'https://m90khan.github.io/Travelo---Front-End-for-WebApp',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Natures',
      overview: KhanPortfolio,
      images: [imgKP1],
      builtWith: 'HTML5, CSS3, SCSS, NPM',
      description: 'Natures is a tours agency front-end website',
      side: 'Front-End',
      primaryColor: '#7ed56f',
      live: 'https://github.com/m90khan/Natures-Travel-agency-/',
      video: '',
      socialIcons: [
        {
          name: 'github',
          link: 'https://github.com/m90khan/Natures-Travel-agency-',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'InsignioX',
      overview: KhanPortfolio,
      images: [imgKP1],
      builtWith:
        'HTML5, CSS3, JavaScript ES6, WebPAck, NPM, Babel, Polyfill, High-Charts, Bootstrap',
      description: 'Redesigning and Implementation website for an application task ',
      side: 'Front-End',
      primaryColor: '#002E5F',
      live: 'https://m90khan.github.io/Redesign-Insignio-Task/dist/index.html',
      video: '',
      socialIcons: [
        {
          name: 'github',
          link: 'https://github.com/m90khan/Redesign-Insignio-Task',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'PortfolioX',
      overview: KhanPortfolio,
      images: [imgKP1],
      builtWith: 'HTML5, CSS3, SCSS',
      description: 'Developer Portfolio Website build with HTML5 and CSS',
      side: 'Front-End',
      primaryColor: '#154353',
      live: 'https://m90khan.github.io/Portfolio-X---Website-/',
      video: '',
      socialIcons: [
        {
          name: 'github',
          link: 'https://m90khan.github.io/Portfolio-X---Website-',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'AlinaX',
      overview: KhanPortfolio,
      images: [imgKP1],
      builtWith: 'HTML5, CSS3',
      description: 'Photography Website build with HTML5 and CSS3',
      side: 'Front-End',
      primaryColor: '#414141',
      live: 'https://m90khan.github.io/Alina-X---Professional-Photographer/',
      video: '',
      socialIcons: [
        {
          name: 'github',
          link: 'https://github.com/m90khan/Alina-X---Professional-Photographer',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Budgetry',
      overview: KhanPortfolio,
      images: [imgKP1],
      builtWith: 'HTML5, CSS3, JavaScript',
      description: 'Difference calculator for budget calculations',
      side: 'Front-End',
      primaryColor: '#28B9B4',
      live: 'https://github.com/m90khan/Budget-Calculator/',
      video: '',
      socialIcons: [
        {
          name: 'github',
          link: 'https://github.com/m90khan/Budget-Calculator/',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Homify',
      overview: KhanPortfolio,
      images: [imgKP1],
      builtWith: 'HTML5, CSS3, SCSS',
      description: 'App landing page for food delivery aggregators',
      side: 'Front-End',
      primaryColor: '#F7941D',
      live: 'https://github.com/m90khan/Homify---Only-Delicious-Food/',
      video: '',
      socialIcons: [
        {
          name: 'github',
          link: 'https://github.com/m90khan/Homify---Only-Delicious-Food',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'CSS Animation Kits',
      overview: KhanPortfolio,
      images: [imgKP1],
      builtWith: 'HTML5, CSS3, JavaScript',
      description:
        'Different animation techniques practiced for learning results in combining all assets into this kit',
      side: 'Front-End',
      primaryColor: '#101010',
      live: 'https://m90khan.github.io/CSS--Creative-Set-A/',
      video: '',
      socialIcons: [
        {
          name: 'github',
          link: 'https://github.com/m90khan/CSS--Creative-Set-A',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'TinCat',
      overview: KhanPortfolio,
      images: [imgKP1],
      builtWith: 'HTML5, CSS3, Bootstrap',
      description:
        'Find a partner for your cat. App landing page to practice Bootstrap Framework besides HTML',
      side: 'Front-End',
      primaryColor: '#EB3C62',
      live: 'https://m90khan.github.io/TinCat-Landing-Page-for-App/',
      video: '',
      socialIcons: [
        {
          name: 'github',
          link: 'https://github.com/m90khan/TinCat-Landing-Page-for-App',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Travelify',
      overview: KhanPortfolio,
      images: [imgKP1],
      builtWith: 'HTML5, CSS3',
      description: 'Single Page Travel Agency Website build with HTML5 and CSS3',
      side: 'Front-End',
      primaryColor: '#131C27',
      live: 'https://m90khan.github.io/Travelify-Travel-Trips-Agency-Website/',
      video: '',
      socialIcons: [
        {
          name: 'github',
          link: 'https://github.com/m90khan/Travelify-Travel-Trips-Agency-Website',
        },
      ],
    },
  ];
};

export default data;
