import React, { useCallback, useEffect, useState } from 'react';
import { behance, dribble, github, linkedin } from '../assets/social';
import { workCircle, workBackground } from './../assets/images';

import { Work, ProjectSection } from './../styles/styles';

import ProjectListCard from '../components/ProjectListCard';
import Meta from '../components/Meta';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../styles/Theme';
import { respondTo } from './../styles/RespondTo';
import { socialIcons } from './../utils/textData';
import Pagination from '../components/Pagination';
import ProjectCard from '../components/ProjectCard';
const WorkScreen = ({ projects }) => {
  const [icons, setIcons] = useState(socialIcons);
  const [iProjects, setIProjects] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(9);

  const indexOfLastPost = currentPage * projectsPerPage;
  const indexOfFirstPost = indexOfLastPost - projectsPerPage;
  const currentProjects = iProjects.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = useCallback((pageNumber) => {
    return setCurrentPage(pageNumber);
  }, []);
  useEffect(() => {
    setIProjects(projects);
  }, [projects, currentPage, paginate, iProjects]);

  return (
    <>
      <Meta
        title='Projects | Full Stack Web Developer'
        description='Full Stack Web Developer Projects'
      />
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
            <motion.h2 layoutId={`title `}>Projects</motion.h2>
            <img src={workBackground} className='back background-1  ' alt='background' />
            <img src={workCircle} className='back background-2  ' alt='pakistan' />
          </div>
        </div>
        <Work style={{ margin: '5% auto 0 auto' }}>
          <Pagination
            postsPerPage={projectsPerPage}
            totalPosts={iProjects.length}
            paginate={paginate}
            currentPage={currentPage}
          />
          <ProjectSection>
            {currentProjects.map((project) => (
              <ProjectCard project={project} key={project.id} />
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
