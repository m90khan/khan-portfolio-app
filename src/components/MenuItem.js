import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { COLORS } from '../styles/Theme';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Line } from './../styles/styles';
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

export const MenuItem = ({ menuItem, toggle }) => {
  const history = useHistory();
  const { pathname } = useLocation();
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
            <>
              <Link to={`${item.link}`} key={i}>
                <div
                  onClick={() => toggleHandler(item.link)}
                  key={i}
                  style={item.link === pathname ? { opacity: 1 } : { opacity: 0.8 }}
                  className='text-placeholder__item'
                >
                  <p> {item.name}</p>
                  <Line
                    transition={{ duration: 0.75 }}
                    initial={{ width: '0%' }}
                    key={i}
                    animate={{ width: item.link === pathname ? '30%' : '0%' }}
                  />
                </div>
              </Link>
            </>
          ) : (
            <Link to={{ pathname: item.link }} key={i} target='_blank'>
              <p key={i} className='text-placeholder__item' style={{ opacity: '.8' }}>
                {item.name}
              </p>
            </Link>
          )
        )}
      </div>
    </Item>
  );
};

const Item = styled(motion.li)`
  list-style: none;
  margin-bottom: 4rem;
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
    padding: 2rem 0;
    width: 200px;
    height: 3rem;
    flex: 1;

    &__item {
      position: relative;
      margin-bottom: 1rem;

      color: ${COLORS.white};
      &:hover {
        color: ${COLORS.primary};
      }
      a {
        color: ${COLORS.white};
      }
    }
  }
`;
