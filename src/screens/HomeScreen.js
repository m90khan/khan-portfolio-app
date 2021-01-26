import React from 'react';
import styled from 'styled-components';
import { respondTo } from './../styles/RespondTo';
import { motion } from 'framer-motion';
import { footerBack, germany, headerBack, pakistan } from './../assets/images';
import { COLORS } from '../styles/Theme';
import IntroSection from '../components/IntroSection';
import IntroDetails from '../components/IntroDetails';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';

import {
  skillsDesktop,
  skillsPhone,
  skillsIpad,
  skillsDesktop2x,
  skillsPhone2x,
  skillsIpad2x,
} from './../assets/skills';
import { intro } from '../utils/textData';
import EducationDetails from '../components/EducationSection';

const HomeScreen = ({ projects }) => {
  return (
    <>
      <Header>
        <img src={headerBack} className='background' alt='background' />
        <img src={pakistan} className='map' alt='pakistan' />
        <h2>
          Full Stack <br></br> Web Developer
        </h2>
      </Header>
      <IntroSection
        story='Short Bio'
        title={intro.title}
        description={intro.description}
        job={intro.job}
        notice={intro.notice}
      />
      <IntroDetails />
      <Work>
        <div className='work-intro'>
          <h2>WORK</h2>
        </div>
        <ProjectSection>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </ProjectSection>
        <Link to='/work'>
          <button className='projects-btn'>View All Projects (82)</button>
        </Link>
      </Work>
      <Skills>
        <div className='skills-intro'>
          <h1>Armory</h1>
          <picture>
            <source
              srcSet={`${skillsPhone} 1x, ${skillsPhone2x} 2x`}
              media='(max-width: 37.5em)'
            />
            <source
              srcSet={`${skillsIpad} 1x, ${skillsIpad2x} 2x`}
              media='(max-width: 64em)'
            />
            <source
              srcSet={`${skillsDesktop} 1x, ${skillsDesktop2x} 2x`}
              media='(max-width: 81em)'
            />
            <img
              srcSet={`${skillsDesktop} 1x, ${skillsDesktop2x} 2x`}
              alt='logo'
              src={skillsIpad}
            />
          </picture>
        </div>
      </Skills>
      <Footer>
        <img src={footerBack} className='background' alt='background' />
        <img src={germany} className='map' alt='germany' />
        <h2>
          <span> I've landed </span>
          <br></br> Lets Talk
        </h2>
      </Footer>
    </>
  );
};
const Skills = styled(motion.div)`
  min-height: 100vh;
  ${respondTo.pMobile` 
  min-height: 80vh;
      `}
  width: 90%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  .skills-intro {
    text-align: left;
    width: 65%;
    ${respondTo.pMobile` 
    width: 90%;
      `}
    height: 30%;
    margin: 0 auto;
    padding: 2rem 4rem;
    background: rgba(25, 32, 44, 0.8);
    border-bottom-right-radius: 4rem;
    border-top-right-radius: 4rem;
    border-bottom-left-radius: 4rem;
    border: 2px solid ${COLORS.secondary};
    -webkit-box-shadow: 2px 5px 15px 8px rgba(0, 0, 0, 0.6);
    box-shadow: 2px 5px 15px 8px rgba(0, 0, 0, 0.6);
    img {
      padding: 1rem 0;
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  h1 {
    -webkit-text-stroke: 2px ${COLORS.secondary};
    text-stroke: 2px ${COLORS.secondary};
    padding: 2rem 0;
  }
`;

const Work = styled(motion.div)`
  min-height: 50vh;
  width: 90%;
  margin: 30% auto 0 auto;
  text-align: center;

  ${respondTo.iPro` 
  margin: 20% auto 0 auto; 
      `}
  .work-intro {
    width: 60%;
    height: 30%;
    margin: 0 auto;
    text-align: center;
    background: ${COLORS.bodyDark};
    padding: 2rem 0;
    background: rgba(25, 32, 44, 0.8);
    border-bottom-right-radius: 3rem;
    border-top-right-radius: 3rem;
    border-bottom-left-radius: 3rem;
    border: 2px solid ${COLORS.secondary};
    -webkit-box-shadow: 2px 5px 15px 8px rgba(0, 0, 0, 0.6);
    box-shadow: 2px 5px 15px 8px rgba(0, 0, 0, 0.6);
  }
  h2 {
    -webkit-text-stroke: 2px ${COLORS.secondary};
    text-stroke: 2px ${COLORS.secondary};
  }
  .projects-btn {
    background: ${COLORS.secondary};
    color: ${COLORS.bodyDark};
    font-size: 4rem;
    border: 1rem solid ${COLORS.bodyDark};
    :hover {
      background: ${COLORS.white};
      color: ${COLORS.bodyDark};
    }
  }
`;
const ProjectSection = styled(motion.div)`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 20rem 0 10rem 0;
  ${respondTo.iPro` 
  padding: 12rem 0 8rem 0;
      `}
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
    width: 50%;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
    object-fit: cover;
    ${respondTo.iPro`
          top: 35%;
          width: 70%;
      `}
    ${respondTo.pMobile`
        top: 20%;
        width: 100%;
    `}
  }
  .map {
    z-index: 10;
    position: absolute;
    top: 50%;
    left: 50%;

    width: 20%;
    transform: translate(-50%, -50%);

    object-fit: cover;
    ${respondTo.iPro`
        top: 55%;
           width: 30%;
      `}
    ${respondTo.pMobile`
        top: 40%;
        width: 45%;
    `}
  }
  h2 {
    color: ${COLORS.white};
    position: absolute;
    top: 65%;
    left: 50%;
    width: 80%;
    transform: translate(-50%, -50%);
    z-index: 20;
    ${respondTo.iPro`
      font-size: 9rem; 
      `}
    ${respondTo.pMobile`
         font-size: 5rem; 
         top: 80%
         `}
  }
`;
const Footer = styled(Header)`
  .background {
    top: 10%;
  }
  .map {
    width: 15%;
    top: 50%;
    ${respondTo.iPro`
        top: 30%;
        width: 25%;
     `}
    ${respondTo.pMobile`
     width: 40%;
     `}
  }
  h2 {
    -webkit-text-stroke: 3px ${COLORS.white};
    text-stroke: 3px ${COLORS.white};
    margin-top: 6rem;
    ${respondTo.pMobile`
      -webkit-text-stroke: 1px ${COLORS.white};
      text-stroke: 1px ${COLORS.white}`}
    color: ${COLORS.primary};
    ${respondTo.pMobile`
         margin-top: 0;
     `}
    span {
      -webkit-text-stroke: 3px ${COLORS.primary};
      text-stroke: 3px ${COLORS.primary};

      color: ${COLORS.bodyDark};
      ${respondTo.pMobile`
      -webkit-text-stroke: 1px ${COLORS.primary};
      text-stroke: 1px ${COLORS.primary}`}
    }
  }
`;
export default HomeScreen;
