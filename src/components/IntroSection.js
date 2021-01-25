import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../styles/Theme';
const IntroSection = () => {
  return (
    <>
      <InfoSection>
        <InfoHeader>
          <h4 className='short'>Short Bio</h4>
          <h1 className='intro'>Hi, I'm Khan</h1>
          <p className='desc'>
            and I am a full-stack web developer. I like working on challenging projects. I
            like the visual aspects while building things. My experience with startups has
            also allowed me to gain knowledge of UX/UI design. My current stack is MERN
            with GraphQL & TypeScript.
          </p>
          <h4 className='job'>I am looking for full-time developer job</h4>
          <p className='notice'>
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
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InfoHeader = styled.div`
  background: ${COLORS.primary};
  height: 50vh;
  max-height: 70%;
  width: 60%;
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  padding: 2rem 6rem;

  .short {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: ${COLORS.bodyDark};
    text-decoration: underline;
  }
  .desc {
    font-weight: 500;
    line-height: 1.5;
    padding: 1rem 0;
  }
  .job {
    background-color: ${COLORS.bodyDark};
    width: 70%;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }
  .notice {
    margin-top: 1rem;
    font-size: 1rem;
  }
`;

export default IntroSection;
