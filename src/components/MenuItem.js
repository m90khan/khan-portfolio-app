import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { COLORS } from '../styles/Theme';
import { Link, useHistory, useLocation, useRouteMatch } from 'react-router-dom';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

// {
//   title: 'SOCIAL',
//   links: [
//     { name: 'Linkedin', link: 'https://www.linkedin.com/in/khanmohsinx/' },
//     { name: 'Github', link: 'https://github.com/m90khan' },
//     {
//       name: 'Behance',
//       link: 'https://www.behance.net/Khan_Mohsin',
//     },
//     {
//       name: 'Dribble',
//       link: 'https://dribbble.com/khanx',
//     },
//   ],
// },

export const MenuItem = ({ menuItem, toggle }) => {
  const history = useHistory();
  const { title, links } = menuItem;
  const toggleHandler = (link) => {
    if (history.location.pathname === link) {
      toggle();
    } else {
      history.push(link);
      toggle();
    }
  };

  return (
    <Item variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <div className='icon-placeholder'>
        <h4>{title}</h4>
      </div>
      <div className='text-placeholder'>
        {links.map((item, i) =>
          item.link[0] === '/' ? (
            <Link to={`${item.link}`} key={i}>
              <p onClick={() => toggleHandler(item.link)}>{item.name}</p>
            </Link>
          ) : (
            <Link to={{ pathname: item.link }} key={i} target='_blank'>
              <p>{item.name}</p>
            </Link>
          )
        )}
      </div>
    </Item>
  );
};

const Item = styled(motion.li)`
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 45;
  cursor: pointer;
  .icon-placeholder {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    flex: 40px 0;
    margin-right: 20px;
    h4 {
      color: ${COLORS.primary};
      font-size: 1.8rem;
      font-weight: 500;
    }
  }

  .text-placeholder {
    border-radius: 5px;
    width: 200px;
    height: 20px;
    flex: 1;
    p {
      color: ${COLORS.white};
    }
    p:hover {
      color: ${COLORS.secondary};
      text-decoration: underline;
    }
  }
`;
