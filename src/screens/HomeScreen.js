import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { respondTo } from './../styles/RespondTo';
import { motion } from 'framer-motion';
import { germany, logo, pakistan } from './../assets/images';
import { COLORS } from '../styles/Theme';
import IntroSection from '../components/IntroSection';
import IntroDetails from '../components/IntroDetails';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import blob from './../assets/lottie/blob-1x.json';
import blob2 from './../assets/lottie/blob-2.json';

import {
  skillsDesktop,
  skillsPhone,
  skillsIpad,
  skillsDesktop2x,
  skillsPhone2x,
  skillsIpad2x,
  resume,
} from './../assets/skills';
import { intro } from '../utils/textData';
import { Work, ProjectSection, Hide } from './../styles/styles';
import Meta from '../components/Meta';
import { containerdiv, titleAnim, headerImage } from './../styles/Animation';

const HomeScreen = ({ projects }) => {
  const [iProjects, setIProjects] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(6);
  const defaultOptions = (img) => {
    return {
      loop: true,
      autoplay: true,
      animationData: img,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
  };
  const indexOfLastPost = currentPage * projectsPerPage;
  const indexOfFirstPost = indexOfLastPost - projectsPerPage;
  const currentProjects = iProjects.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = useCallback((pageNumber) => {
    return setCurrentPage(pageNumber);
  }, []);
  useEffect(() => {
    setIProjects(projects);
  }, [projects, currentPage, paginate, iProjects]);
  // Get current posts

  return (
    <>
      <Meta />
      <Header variants={containerdiv} initial='hidden' animate='show'>
        <motion.img src={logo} className='logo-img' alt='logo' variants={headerImage} />

        <motion.div className='background' variants={headerImage}>
          <Lottie options={defaultOptions(blob)} />
        </motion.div>
        <motion.div className='background background-1' variants={headerImage}>
          <Lottie options={defaultOptions(blob2)} />
        </motion.div>
        <motion.img
          src={pakistan}
          className='map'
          alt='pakistan'
          variants={headerImage}
        />
        {/* <img src={headerBack} className='background' alt='background' /> */}
        <Heading>
          <Hide>
            <motion.h2 className='big-text' variants={titleAnim}>
              Full Stack
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 className='big-text' variants={titleAnim}>
              Developer
            </motion.h2>
          </Hide>
        </Heading>
      </Header>
      <IntroSection
        story='Short Bio'
        title={intro.title}
        description={intro.description}
        job={intro.job}
        notice={intro.notice}
        resume={resume}
      />
      <IntroDetails />
      <Work>
        <div className='work-intro'>
          <h2>WORK</h2>
        </div>

        <ProjectSection>
          {currentProjects.map((project, index) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </ProjectSection>
        <Link to='/work'>
          <button className='projects-btn'>View All Projects ({projects.length})</button>
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

      <Footer variants={containerdiv} initial='hidden' animate='show'>
        <motion.div className='background' variants={headerImage}>
          <Lottie options={defaultOptions(blob)} />
        </motion.div>
        <motion.div className='background background-1' variants={headerImage}>
          <Lottie options={defaultOptions(blob2)} />
        </motion.div>
        <motion.img src={germany} className='map' alt='pakistan' variants={headerImage} />
        <Link to='/contact' style={{ display: 'flex', alignSelf: 'flex-end' }}>
          <h2>
            Fin. Landed <br />
            <span className='footer-contact'>Lets Talk</span>
          </h2>
        </Link>
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
    z-index: 10;

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

const Header = styled(motion.div)`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  .logo-img {
    position: absolute;
    top: 0;
    left: 10%;
    width: 4%;
  }
  .background {
    width: 48%;
    position: absolute;
    top: 0%;
    left: 27%;
    transform: translate(-50%, -10%);
    object-fit: cover;
    ${respondTo.iPro`
          top: 5%;
          left: 20%;
          width: 60%;
      `}
    ${respondTo.pMobile`
        top: 10%;
        width: 60%;
    `}
  }
  .background-1 {
    width: 35%;
    top: 15%;
    left: 32%;
  }
  .map {
    z-index: 10;
    position: absolute;
    top: 35%;
    left: 40%;
    z-index: 1;

    width: 18%;
    transform: translate(-50%, -50%);

    object-fit: cover;
    ${respondTo.iPro`
        top: 20%;
        left: 40%;
           width: 25%;
      `}
    ${respondTo.pMobile`
        top: 20%;
        width: 25%;
    `}
  }
`;
const Heading = styled(motion.h2)`
  position: absolute;
  top: 55%;
  left: 10%;
  width: 80%;
  z-index: 1;
  ${respondTo.iPro`
  top: 60%;
      
      `}
  h2 {
    transform: translate(-50%, -50%);
    letter-spacing: 1rem;
    height: 12rem;
    line-height: 1;
    font-weight: 900;
    /* -webkit-text-stroke: 0.2px ${COLORS.bodyDark}; */
    /* text-stroke: 1px ${COLORS.bodyDark}; */
    z-index: 1;
    text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191,
      1px 4px 1px #919191, 1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191,
      1px 8px 1px #919191, 1px 9px 1px #919191, 1px 10px 1px #919191,
      1px 18px 6px rgba(16, 16, 16, 0.4), 1px 22px 10px rgba(16, 16, 16, 0.2);
    ${respondTo.iPro`
      font-size: 9rem; 
      
      `}
    ${respondTo.pMobile`
         font-size: 7rem; 
         top: 80%
         `}
  color: ${COLORS.white};
  }
`;
const Footer = styled(Header)`
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .heading-footer {
    top: 50%;
  }
  .background {
    /* top: 60%; */
  }
  .background-1 {
    /* top: 70%; */
  }
  .map {
    width: 15%;
    /* top: 80%; */
    ${respondTo.iPro`
         width: 25%;
     `}
    ${respondTo.pMobile`
     width: 20%;
     `}
  }
  h2 {
    z-index: 90;
    -webkit-text-stroke: 3px ${COLORS.white};
    text-stroke: 3px ${COLORS.white};
    bottom: 0;
    transition: all 0.4s ease-in-out;
    &:hover {
      color: ${COLORS.bodyDark};
      -webkit-text-stroke: 3px ${COLORS.white};
    }
    ${respondTo.iPro`
 margin-bottom: 15rem;
      `}
    ${respondTo.pMobile`
      -webkit-text-stroke: 1px ${COLORS.white};
      text-stroke: 1px ${COLORS.white};
      `}
    color: ${COLORS.primary};
    ${respondTo.pMobile`
         margin-top: 0;
     `}
    .footer-contact {
      -webkit-text-stroke: 3px ${COLORS.primary};
      text-stroke: 3px ${COLORS.primary};

      color: ${COLORS.bodyDark};
      ${respondTo.pMobile`
      -webkit-text-stroke: 1px ${COLORS.primary};
      text-stroke: 1px ${COLORS.primary}`};
      transition: all 0.4s ease-in;
      &:hover {
        color: ${COLORS.secondary};
        -webkit-text-stroke: 3px ${COLORS.bodyDark};
      }
    }
  }
`;
export default HomeScreen;
