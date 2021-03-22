import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../styles/Theme';
import { respondTo } from './../styles/RespondTo';
import { workBackground, aboutProfile } from './../assets/images';
import VideoSection from '../components/VideoSection';
import WorkSection from '../components/WorkSection';
import IntroSection from '../components/IntroSection';
import { Skills, Works } from '../utils/textData';
import EducationDetails from '../components/EducationDetails';
import CheckWork from '../components/CheckWork';
import Meta from '../components/Meta';
import { sliderContainer, slider, pageAnimation } from './../styles/Animation';
import { resume } from './../assets/skills';
import { socialIcons } from '../utils/textData';

const AboutScreen = () => {
  const [icons, setIcons] = useState(socialIcons);

  return (
    <motion.div exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
      <Meta
        title='About Khan | Full Stack Developer'
        description='Full Stack Developer Story'
        keywords='user experience design, MERN stack, design, developer, typescript, javascript'
      />

      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Stats>
        <div className='rating'>
          <Platforms>
            {icons.map((icon, index) => (
              <a
                href={icon.link}
                target='_blank'
                rel='noreferrer noopener'
                className='icon-back'
                key={index}
              >
                <img src={icon.icon} alt='overview' />
              </a>
            ))}
          </Platforms>
          <div className='header'>
            <motion.h2 layoutId={`title `}>Hi.</motion.h2>
            <img src={workBackground} className='back background-1' alt='background' />
            <img src={aboutProfile} className='back background-2' alt='pakistan' />
          </div>
        </div>
        <VideoSection resume={resume} />
        <WorkSection story='Work' title='Experience' works={Works} />
        <IntroSection story='Technical' title='Skills' skills={Skills} />
        <EducationDetails />
        <CheckWork />
      </Stats>
    </motion.div>
  );
};

const Stats = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .rating {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    padding: 4rem;
    background: ${COLORS.primary};
    .header {
      height: 70vh;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      text-align: center;
      ${respondTo.pMobile` 
    height: 90vh;
      `}
      .back {
        position: absolute;
        width: 20%;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: auto;
        object-fit: cover;

        ${respondTo.L` 
    width: 30%;
    top: 40%;

      `}
        ${respondTo.pMobile` 
    width: 40%;
    top: 50%
      `}
      }
      .background-1 {
        width: 50%;
        height: 70%;
        ${respondTo.L` 
    width: 80%;
      `}
      }
      h2 {
        z-index: 20;
        font-size: 14rem;
        top: 40%;
        position: relative;
      }
    }
  }
`;

const Platforms = styled(motion.div)`
  align-self: flex-end;
  ${respondTo.pMobile` 
      align-self: center;
      `}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* position: fixed; */
  height: 20%;
  /* margin: 1rem; */
  img {
    width: 2rem;
    height: 2rem;
  }
  .icon-back {
    margin-right: 1rem;
    border-radius: 50%;
    padding: 0.5rem 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    border: 5px solid ${COLORS.bodyDark};
    background: ${COLORS.bodyLight};
    transition: all 0.5s ease;
    :hover {
      background-color: ${COLORS.white} !important;
    }
  }
`;
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0%;
  width: 100%;
  height: 100vh;
  background: ${COLORS.bodyLight};
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: ${COLORS.secondary};
`;
const Frame3 = styled(Frame1)`
  background: ${COLORS.bodyDark};
`;
const Frame4 = styled(Frame1)`
  background: ${COLORS.white};
`;
export default AboutScreen;
