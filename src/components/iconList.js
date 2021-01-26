import React from 'react';
import styled from 'styled-components';
import { behance, dribble, github } from '../assets/social';
import { COLORS } from '../styles/Theme';
import { motion } from 'framer-motion';

const iconList = ({ socialIcons }) => {
  const getPlatform = (platform) => {
    switch (platform) {
      case 'dribble':
        return dribble;
      case 'github':
        return github;
      case 'behance':
        return behance;
      default:
        return null;
    }
  };
  return (
    <iconsSocial>
      {socialIcons.map((icon, index) => (
        <a
          href={icon.link}
          target='_blank'
          rel='noreferrer noopener'
          className='icon-back'
        >
          <img src={getPlatform(icon.name)} key={index} alt='overview' />
        </a>
      ))}
    </iconsSocial>
  );
};

const iconsSocial = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon-back {
    margin-right: 1rem;
    border-radius: 50%;
    padding: 0.5rem 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 5px solid ${COLORS.bodyLight};
    background: ${COLORS.bodyLight};
    transition: all 0.5s ease;
    :hover {
      background-color: ${COLORS.white} !important;
    }
    img {
      height: 2rem;
      pointer-events: none;
    }
  }
`;

export default iconList;
