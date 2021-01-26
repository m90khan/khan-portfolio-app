import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../styles/Theme';
import { respondTo } from './../styles/RespondTo';
const WorkSection = () => {
  const works = [
    'Full Stack Web Developer @Freelance (August 2020 - Present)',
    'Web Developer @WebsiteKitchen (Jan 2020 - June 2020)',
    'Front End Developer @FoodiFie (April 2017 - Mar 2018)',
    'Intern Web Developer @ChinaSourcingCo (Jan 2015 - July 2016)',
    'Technical Support @LeejinSource (Jun 2011 - Dec 2011)',
    'CCNA Internship (Feb 2011 - Apr 2011)',
  ];

  return (
    <Work>
      <div className='video-block'>
        <h4 className='short'>Work</h4>
        <h1>Experience</h1>
        <br />
        <div className='video'>
          {works.map((item, i) => (
            <p key={i}>- {item}</p>
          ))}
        </div>
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
  margin-top: 5rem;
  .video-block {
    /* background: rgba(25, 32, 44, 0.5); */
    padding: 6rem;
    width: 80%;
    height: auto;
    color: ${COLORS.white};
    background: rgba(25, 32, 44, 0.8);
    border-bottom-right-radius: 4rem;
    border-top-right-radius: 4rem;
    border-bottom-left-radius: 4rem;
    border: 2px solid ${COLORS.secondary};
    position: relative;
    -webkit-box-shadow: 2px 5px 15px 8px rgba(0, 0, 0, 0.6);
    box-shadow: 2px 5px 15px 8px rgba(0, 0, 0, 0.6);

    .video {
      p {
        color: ${COLORS.textgrey};
      }
    }

    ${respondTo.pMobile` 
      width: 100%;
      `}
  }
`;
export default WorkSection;
