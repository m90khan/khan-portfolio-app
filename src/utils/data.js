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
      title: 'AirHouse',
      overview:
        'https://res.cloudinary.com/m90khan/image/upload/v1614182839/KhanPortfolio/AirHouse/AirHouse_-Cover_uu3e0q.jpg',
      images: [
        'https://res.cloudinary.com/m90khan/image/upload/v1614182846/KhanPortfolio/AirHouse/AirHouse-1_nankq8.jpg',
        'https://res.cloudinary.com/m90khan/image/upload/v1614182845/KhanPortfolio/AirHouse/AirHouse-2_xjbi6b.jpg',
        'https://res.cloudinary.com/m90khan/image/upload/v1614182845/KhanPortfolio/AirHouse/AirHouse-3_knbsvz.jpg',
        'https://res.cloudinary.com/m90khan/image/upload/v1614182845/KhanPortfolio/AirHouse/AirHouse-4_mwllg3.jpg',
        'https://res.cloudinary.com/m90khan/image/upload/v1614182846/KhanPortfolio/AirHouse/AirHouse-5_yy5onb.jpg',
      ],
      builtWith:
        'React, AntDesign, TypeScript, GraphQL, Apollo, Express, Nodejs, MondoDB',
      description:
        'It is an AirBnB clone where a user can host a listing to rent a place, book a listing and ability to sign-in with google account',
      side: 'Full-Stack',
      primaryColor: '#1890FF',
      live: 'https://airhouse-app.herokuapp.com/',
      video: 'https://www.youtube.com/watch?v=FwDx11A4ojI&ab_channel=uxdKhan',
      socialIcons: [
        {
          name: 'behance',
          link: 'https://www.behance.net/gallery/114105641/AirHouse',
        },
        {
          name: 'github',
          link: 'https://github.com/m90khan/uhouse-full-stack-airbnb-clone',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Aloha Travels Part 1',
      overview:
        'https://res.cloudinary.com/m90khan/image/upload/v1614178792/KhanPortfolio/AlohaTravels/AlohaUX-Cover_qifwd0.jpg',
      images: [
        'https://res.cloudinary.com/m90khan/image/upload/v1614178802/KhanPortfolio/AlohaTravels/AlohaUX-1_n7qjid.jpg',
        'https://res.cloudinary.com/m90khan/image/upload/v1614178809/KhanPortfolio/AlohaTravels/AlohaUX-2_xyckjq.jpg',
        'https://res.cloudinary.com/m90khan/image/upload/v1614178815/KhanPortfolio/AlohaTravels/AlohaUX-3_bdmt5r.jpg',
        'https://res.cloudinary.com/m90khan/image/upload/v1614178807/KhanPortfolio/AlohaTravels/AlohaUX-4_xiffdj.jpg',
        'https://res.cloudinary.com/m90khan/image/upload/v1614178812/KhanPortfolio/AlohaTravels/AlohaUX-5_ejvliw.jpg',
        'https://res.cloudinary.com/m90khan/image/upload/v1614178801/KhanPortfolio/AlohaTravels/AlohaUX-6_lcgh03.jpg',
      ],
      builtWith: 'HTML5, CSS3 (SCSS), JS, NodeJS, Express, Mongoose, MondoDB, Pug, JWT',
      description:
        'It is a Full Stack UX/UI case study for Aloha Travels to be able to increase their revenue',
      side: 'UX/UI',
      primaryColor: '#FFBC4B',
      live: 'https://aloha-travels-app.herokuapp.com/',
      video: 'https://www.youtube.com/watch?v=quGAUd1b95E&t=10s&ab_channel=uxdKhan',
      socialIcons: [
        {
          name: 'dribble',
          link:
            'https://dribbble.com/shots/15101775-UX-UI-Design-and-Development-Case-Study-Aloha-Travels',
        },
        {
          name: 'behance',
          link: 'https://www.behance.net/gallery/113025531/Aloha-Travels-Part-One',
        },
        {
          name: 'github',
          link: 'https://github.com/m90khan/Aloha-Travels-Full-Stack',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'AyaKaffee',
      overview:
        'https://res.cloudinary.com/m90khan/image/upload/v1614179675/KhanPortfolio/AyaKaffee/AyaKaffee-Cover_eusxol.jpg',
      images: [
        'https://res.cloudinary.com/m90khan/image/upload/v1614179665/KhanPortfolio/AyaKaffee/AyaKaffee-1_vrrwev.jpg',
        'https://res.cloudinary.com/m90khan/image/upload/v1614179674/KhanPortfolio/AyaKaffee/AyaKaffee-2_fucr5y.jpg',
        'https://res.cloudinary.com/m90khan/image/upload/v1614179680/KhanPortfolio/AyaKaffee/AyaKaffee-3_bwvcoz.jpg',
        'https://res.cloudinary.com/m90khan/image/upload/v1614179678/KhanPortfolio/AyaKaffee/AyaKaffee-4_ayykve.jpg',
      ],
      builtWith:
        'HTML5, CSS3 (SCSS), JS, NodeJS, Express, Mongoose, MondoDB, React, Redux, PayPal, JWT',
      description:
        'AyaKaffee needs an online eCommerce platform to sell their products to the world',
      side: 'Full-Stack',
      primaryColor: '#033F3D',
      live: 'https://ayakaffee-app.herokuapp.com/',
      video: 'https://www.youtube.com/watch?v=kldxqMhJbik&t=2s&ab_channel=uxdKhan',
      socialIcons: [
        {
          name: 'dribble',
          link: 'https://dribbble.com/shots/15125208-ayaKaffee',
        },
        {
          name: 'behance',
          link: 'https://www.behance.net/gallery/113528841/AyaKaffee',
        },
        {
          name: 'github',
          link: 'https://github.com/m90khan/Imart-Full-MERN-Stack-Ecommerce-App',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Hey Boba',
      overview:
        'https://res.cloudinary.com/m90khan/image/upload/v1614181958/KhanPortfolio/HeyBoba/Boba_-_Cover_eyns3u.jpg',
      images: [
        'https://res.cloudinary.com/m90khan/image/upload/v1614181947/KhanPortfolio/HeyBoba/Boba-1_jeynba.jpg',
        'https://res.cloudinary.com/m90khan/image/upload/v1614181951/KhanPortfolio/HeyBoba/Boba-2_lmkpc9.jpg',
        'https://res.cloudinary.com/m90khan/image/upload/v1614181961/KhanPortfolio/HeyBoba/Boba-3_neyk71.jpg',
        'https://res.cloudinary.com/m90khan/image/upload/v1614181960/KhanPortfolio/HeyBoba/Boba-4_busbra.jpg',
        'https://res.cloudinary.com/m90khan/image/upload/v1614181962/KhanPortfolio/HeyBoba/Boba-5_cikn4r.jpg',
        'https://res.cloudinary.com/m90khan/image/upload/v1614181954/KhanPortfolio/HeyBoba/Boba-6_xua8ft.jpg',
      ],
      builtWith: 'Photoshop, Illustrator, Figma, Miro, Research, Interviews, UX Testing',
      description:
        'Design a boba tea app experience that is easy enough for anyone to order boba tea online.',
      side: 'UX/UI',
      primaryColor: '#CF9775',
      live: 'https://www.behance.net/gallery/105591761/Hey-Boba',
      video: '',
      socialIcons: [
        {
          name: 'behance',
          link: 'https://www.behance.net/gallery/105591761/Hey-Boba',
        },
      ],
    },
  ];
};
export default data;
