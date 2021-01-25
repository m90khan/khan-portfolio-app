import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../styles/Theme';

import { respondTo } from './../styles/RespondTo';
import { alohaOverview } from '../assets/projects/AlohaT';
import { behance, dribble, github } from '../assets/social';
import { Link } from 'react-router-dom';

const ProjectCard = ({ onClick, keyv }) => {
  const socialLinks = [behance, dribble, github];

  return (
    <Project key={keyv}>
      <div className='header-img' onClick={onClick}>
        <img src={alohaOverview} alt='overview' />
      </div>
      <div className='content'>
        <div className='title'>
          <h4>Aloha Travels</h4>
          <div className='icons-socials'>
            {socialLinks.map((icon, index) => (
              <button>
                <img src={icon} key={index} alt='overview' />
              </button>
            ))}
          </div>
        </div>
        <p className='short-desc'>
          Premium pepperoni and cheese is made with real ozzarella on original hand-tossed
          crust.
        </p>
        <div className='title skills-desc'>
          <p>HTML5, CSS3, SCSS, JS, NodeJS, MondoDB</p>
          <p>Duration: 72h</p>
        </div>
        <div className='title'>
          <h4 style={{ color: COLORS.primary }}>Front-End</h4>
          <div className='icons'>
            <button style={{ marginRight: '1rem' }}>Live</button>
            <Link to='/contact'>
              <button>Details</button>
            </Link>
          </div>
        </div>
      </div>
    </Project>
  );
};

const Project = styled(motion.div)`
  flex: 0 0 45%;
  background: ${COLORS.white};
  margin-bottom: 10rem;
  border-radius: 2rem;
  box-shadow: rgba(48, 111, 219, 0.25) 0px 50px 100px -20px,
    rgba(221, 37, 37, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  ${respondTo.pMobile` 
   flex: 0 0 100%;
  `}

  .header-img {
    cursor: pointer;
    img {
      object-fit: cover;
      width: 100%;
    }
  }
  .content {
    padding: 2rem 1.5rem;
  }
  .title,
  .icons-socials {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h4 {
    color: ${COLORS.bodyDark};
    font-size: 2.8rem;
  }
  .icons-socials {
    button {
      margin-right: 1rem;
      border-radius: 50%;
      padding: 0.5rem 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      :hover {
        background-color: ${COLORS.white} !important;
      }
      img {
        height: 2rem;
      }
    }
  }
  .short-desc {
    padding: 1.5rem 0;
    color: ${COLORS.textgrey};
    text-align: left;
  }
  .skills-desc {
    padding: 1rem 0;
    color: ${COLORS.textgrey};
    opacity: 0.6;
    p {
      font-size: 1.8rem;
    }
  }
`;

export default ProjectCard;
