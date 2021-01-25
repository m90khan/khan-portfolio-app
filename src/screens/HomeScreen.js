import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { headerMap, pakistan } from './../assets/images';
import { COLORS } from '../styles/Theme';
import IntroSection from '../components/IntroSection';
import IntroDetails from '../components/IntroDetails';
import { respondTo } from './../styles/RespondTo';
import { alohaOverview } from '../assets/projects/AlohaT';
import { behance, dribble, github } from '../assets/social';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';

const HomeScreen = ({ history }) => {
  const socialLinks = [behance, dribble, github];

  const ProjectDetails = (id) => {
    history.push(`/word/${id}`);
  };
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
      <IntroDetails />
      <Work>
        <div className='work-intro'>
          <h2>WORK</h2>
        </div>
        <ProjectSection>
          <ProjectCard onClick={() => ProjectDetails('item')} />
        </ProjectSection>
        <Link>
          <button className='projects-btn'>View All Projects -> (82)</button>
        </Link>
      </Work>
    </>
  );
};

const Work = styled(motion.div)`
  min-height: 50vh;
  width: 90%;
  margin: 35% auto 0 auto;
  text-align: center;

  ${respondTo.lg` 
  margin: 65% auto; 
      `}
  .work-intro {
    width: 60%;
    height: 30%;
    margin: 0 auto;
    text-align: center;
    background: ${COLORS.bodyDark};
    padding: 2rem 0;
    border-radius: 1rem;
    border: 2px solid ${COLORS.secondary};
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
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
  padding: 20rem 0;
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
    color: ${COLORS.white};
    position: absolute;
    top: 25rem;
    z-index: 20;
  }
`;

export default HomeScreen;
