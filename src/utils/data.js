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
      title: 'Khan Portfolio',
      overview: KhanPortfolio,
      images: [imgKP1],
      builtWith:
        'HTML5, Styled-components, JS, React, Framer, React-router, uuid, Figma, Illustrator',
      description:
        'A Portfolio website to showcase projects including design, code, case-studies amd Blog for future ',
      side: 'Front-End',
      socialIcons: [
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
  ];
};
export default data;
