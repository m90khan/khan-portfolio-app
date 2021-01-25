import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { headerMap, pakistan } from './../assets/images';
import { COLORS } from '../styles/Theme';
import IntroSection from '../components/IntroSection';
import WorkSection from '../components/WorkSection';
const HomeScreen = () => {
  return (
    <>
      <Header>
        <img src={headerMap} className='background' />
        <img src={pakistan} className='map' />
        <h2>
          Full Stack <br></br> Web Developer
        </h2>
      </Header>
      <IntroSection />
      <WorkSection />
    </>
  );
};

const Header = styled(motion.div)`
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  .background {
    width: 40%;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -10%);
    object-fit: cover;
  }
  .map {
    z-index: 10;
    position: relative;
    top: 0rem;
    left: 0%;
    width: 20%;
    object-fit: cover;
  }
  h2 {
    color: ${COLORS.white};
    position: absolute;
    top: 25rem;
    z-index: 20;
  }
`;

export default HomeScreen;
