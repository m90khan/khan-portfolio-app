import React from 'react';
import styled from 'styled-components';
import { respondTo } from './../styles/RespondTo';
import { motion } from 'framer-motion';
import { COLORS } from '../styles/Theme';

const IntroSection = ({ story, title, description, job, notice, skills }) => {
  return (
    <>
      <InfoSection>
        <InfoHeader>
          <motion.h4 className='short'>{story}</motion.h4>
          <motion.h1 className='intro'>{title}</motion.h1>
          {skills &&
            skills.map((skill, i) => (
              <motion.p className='desc' key={i} style={{ padding: 0 }}>
                {skill}
              </motion.p>
            ))}

          {description && <p className='desc'>{description}</p>}
          {job && <h4 className='job'>{job}</h4>}
          {notice && <p className='notice'>{notice}</p>}
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
  ${respondTo.iPad`
           height: 60vh;  min-height: 80vh;
         `}
`;
const InfoHeader = styled(motion.div)`
  background: rgba(6, 176, 141, 0.8);
  z-index: 4;

  width: 60%;
  border-bottom-right-radius: 4rem;
  border-top-right-radius: 4rem;
  border-bottom-left-radius: 4rem;
  padding: 4rem 8rem;
  -webkit-box-shadow: 2px 5px 15px 8px rgba(0, 0, 0, 0.6);
  box-shadow: 2px 5px 15px 8px rgba(0, 0, 0, 0.6);
  ${respondTo.iPro`
          padding: 6rem 6rem;
          width: 80%;
         `}
  ${respondTo.iPad`
          padding: 6rem 6rem;
          width: 75%;
         `}
  ${respondTo.pMobile`
          padding: 2.5rem 2rem;
          width: 85%;
         `}
  border: 4px solid ${COLORS.secondary};

  .intro {
    -webkit-text-stroke: 2px ${COLORS.bodyDark};
    text-stroke: 2px ${COLORS.bodyDark};
  }
  .desc {
    font-weight: 500;
    line-height: 1.5;
    padding: 2rem 0;
    font-size: 2.2rem;
  }

  .notice {
    margin-top: 1rem;
    font-size: 1.5rem;
  }
`;

export default IntroSection;
