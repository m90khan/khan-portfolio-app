import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../styles/Theme';
import { respondTo } from './../styles/RespondTo';
import { Link } from 'react-router-dom';
const CheckWork = () => {
  return (
    <Work>
      <div className='video-block'>
        <Link to='/work'>
          <h1>Check Out My Work</h1>
        </Link>
      </div>
    </Work>
  );
};
const Work = styled(motion.div)`
  height: 100vh;
  width: 80%;
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
    padding: 15% 2rem;
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
    h1 {
      text-decoration: none;
      text-decoration-color: white;
      transition: all 0.2s ease-out;

      :hover {
        color: ${COLORS.bodyDark};
      }
    }
    ${respondTo.pMobile` 
      width: 100%;
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
