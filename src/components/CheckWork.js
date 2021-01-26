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
  height: 110vh;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  .video-block {
    /* background: rgba(25, 32, 44, 0.5); */
    padding: 15% 2rem;
    width: 80%;
    color: ${COLORS.white};
    background: rgba(25, 32, 44, 1);
    border-bottom-right-radius: 4rem;
    border-top-right-radius: 4rem;
    border-bottom-left-radius: 4rem;
    border: 2px solid ${COLORS.secondary};
    position: relative;
    text-align: center;
    -webkit-box-shadow: 2px 5px 15px 8px rgba(0, 0, 0, 0.6);
    box-shadow: 2px 5px 15px 8px rgba(0, 0, 0, 0.6);
    h1 {
      text-decoration: none;
      text-decoration-color: white;
    }
    ${respondTo.pMobile` 
      width: 100%;
      `}
  }
`;
export default CheckWork;
