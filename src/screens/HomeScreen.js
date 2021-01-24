import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { headerMap, pakistan } from './../assets/images';
import { COLORS } from '../styles/Theme';
const HomeScreen = () => {
  return (
    <>
      <Header>
        <img src={headerMap} className='background' />
        <img src={pakistan} className='map' />
        <h2>
          Full Stack Web <br></br> Developer
        </h2>
      </Header>
      <InfoSection>
        <InfoHeader>
          <p>Short Bio</p>
          <h1>Hi, I'm Khan</h1>
          <p>
            and I am a full-stack web developer. I like working on challenging projects. I
            like the visual aspects while building things. My experience with startups has
            also allowed me to gain knowledge of UX/UI design. My current stack is MERN
            with GraphQL & TypeScript.{' '}
          </p>
          <h4>I am looking for full-time developer job</h4>
          <p>
            Note: I Prefer remote position for now and have no objection for relocation
            once the Covid situation settles down.
          </p>
        </InfoHeader>
      </InfoSection>
    </>
  );
};
const InfoSection = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InfoHeader = styled.div`
  background: ${COLORS.primary};
  height: 50vh;
  width: 60%;
  border-radius: 2rem;
`;
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
    color: white;
    position: absolute;
    top: 25rem;
    z-index: 20;
  }
`;

export default HomeScreen;
