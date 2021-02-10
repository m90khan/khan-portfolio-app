import React from 'react';
import { behance, dribble, github, linkedin } from '../assets/social';
import { workCircle, workBackground } from './../assets/images';

import { Work, ProjectSection } from './../styles/styles';

import ProjectListCard from '../components/ProjectListCard';
import Meta from '../components/Meta';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../styles/Theme';
import { respondTo } from './../styles/RespondTo';

const WorkScreen = ({ projects }) => {
  const socialIcons = [
    {
      name: 'dribble',
      link: 'https://dribbble.com/khanx',
      icon: dribble,
    },
    {
      name: 'behance',
      link: 'https://www.behance.net/Khan_Mohsin',
      icon: behance,
    },
    {
      name: 'github',
      link: 'https://github.com/m90khan',
      icon: github,
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/khanmohsinx/',
      icon: linkedin,
    },
  ];
  return (
    <>
      <Meta
        title='Projects | Full Stack Web Developer'
        description='Full Stack Web Developer Projects'
      />
      <Stats>
        <div className='rating'>
          <Platforms>
            {socialIcons.map((icon, index) => (
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
            <motion.h2 layoutId={`title `}>Projects</motion.h2>
            <img src={workBackground} className='back background-1' alt='background' />
            <img src={workCircle} className='back background-2' alt='pakistan' />
          </div>
        </div>
        <Work style={{ margin: '5% auto 0 auto' }}>
          <ProjectSection>
            {projects.map((project) => (
              <ProjectListCard project={project} key={project.id} />
            ))}
          </ProjectSection>
        </Work>
      </Stats>
    </>
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
export default WorkScreen;
