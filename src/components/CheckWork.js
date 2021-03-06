import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../styles/Theme';
import { respondTo } from './../styles/RespondTo';
import { useHistory } from 'react-router-dom';
import { Line } from '../styles/styles';
import { useScroll } from './useScroll';
import { fade } from '../styles/Animation';

const CheckWork = ({ project = '', detail }) => {
  const [element, controls] = useScroll({ threshold: 0 });
  const history = useHistory();

  const { title, overview, id, primaryColor } = project;
  const nextHandler = () => {
    if (id) {
      history.push(`/work/${id}`);
    } else {
      history.push(`/work`);
    }
  };

  return (
    <Work
      style={
        overview && {
          margin: '0 auto',
          background: primaryColor,
          width: '100%',
        }
      }
      onClick={nextHandler}
    >
      <motion.div
        className='video-block'
        variants={fade}
        animate={controls}
        initial='hidden'
        ref={element}
        style={
          overview && {
            background: `linear-gradient(to right, rgba(25, 32, 44,0.7), rgba(0, 255, 132,.6)), url("${overview}") `,
            backgroundPosition: 'center center ',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }
        }
      >
        <div>
          <h1>{title && title ? `${detail}: ${title}` : 'Check Out My Work'}</h1>
          <LineAnim
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            ref={element}
          />
        </div>
      </motion.div>
    </Work>
  );
};

const LineAnim = styled(Line)`
  bottom: -20%;
`;
const Work = styled(motion.div)`
  height: 100vh;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  overflow: hidden;
  ${respondTo.iPro` 
  height: 60vh;
      `}

  .video-block {
    /* background: rgba(25, 32, 44, 0.5); */
    padding: 15% 10rem;
    width: 80%;
    color: ${COLORS.white};
    /* background: rgba(25, 32, 44, 0.8); */
    border-bottom-right-radius: 4rem;
    border-top-right-radius: 4rem;
    border-bottom-left-radius: 4rem;
    border: 2px solid ${COLORS.secondary};
    overflow: hidden;
    position: relative;
    text-align: center;
    -webkit-box-shadow: 2px 5px 15px 8px rgba(0, 0, 0, 0.6);
    box-shadow: 2px 5px 15px 8px rgba(0, 0, 0, 0.6);
    ${respondTo.iPro` 
    width: 95%;
      `}
    h1 {
      text-decoration: none;
      transition: all 0.2s ease-out;
      font-size: 4rem;
      cursor: pointer;
      :hover {
        color: ${COLORS.bodyDark};
        -webkit-text-fill-color: ${COLORS.bodyDark}; /* Will override color (regardless of order) */
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: ${COLORS.secondary};
      }
      ${respondTo.pMobile` 
       font-size: 3rem;

      `}
    }
    ${respondTo.pMobile` 
      width: 100%;
      padding: 20% 5%
      `}
  }
  .video-block::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0%;
    background: ${COLORS.primary};
    z-index: -1;
    transform: translateY(100%);
    transition: all 0.2s ease-out;
  }
  .video-block:hover::after {
    transform: translateY(0%);
  }
`;
export default CheckWork;
