import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { behance, dribble, github, liveIcon, playDark } from '../assets/social';
import { COLORS } from '../styles/Theme';
import { workCircle, workBackground } from './../assets/images';
import { respondTo } from './../styles/RespondTo';
import VideoSection from '../components/VideoSection';
import CheckWork from '../components/CheckWork';

import Button from '../components/Button';
import Meta from '../components/Meta';

const WorkDetails = ({ projects }) => {
  const { id } = useParams();
  const [iProjects, setIProjects] = useState(projects);
  const [project, setProject] = useState(projects[0]);
  const [nextProject, setNextProject] = useState([]);
  const [preProject, setPreProject] = useState([]);
  const history = useHistory();
  const { pathname } = useLocation();

  //GET PLATFORM IMAGES
  const getPlatform = (platform) => {
    switch (platform) {
      case 'dribble':
        return dribble;
      case 'github':
        return github;
      case 'behance':
        return behance;
      default:
        return null;
    }
  };
  const exitDetailHander = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/');
    }
  };

  useEffect(() => {
    const fetchProject = (id) => {
      const currentProject = iProjects.filter((stateProject, index, arr) => {
        let curProject;
        if (stateProject.id === id) {
          curProject = stateProject;
          const nextItem = arr[index + 1];
          setNextProject(nextItem);
          const prevItem = arr[index - 1];
          setPreProject(prevItem);
        }
        return curProject;
      });

      setProject(currentProject[0]);
    };
    fetchProject(id);

    window.scroll({
      top: 0,
      left: 0,
    });

    if (!project) {
      history.push('/');
    }
  }, [id, history, iProjects, project, pathname]);

  return (
    <>
      {project && (
        <CardShadow className='shadow' onClick={exitDetailHander}>
          <Meta
            title={project.title + ' | Full Stack Developer Portfolio'}
            description={project.description}
            keywords={project.builtWith}
          />
          <Detail
            layoutId={id}
            style={project && { background: project.primaryColor }}
            key={project && project.id}
          >
            <Stats>
              <div className='rating'>
                <Platforms
                  style={
                    project && {
                      background: project.primaryColor,
                      padding: '.5rem',
                      borderRadius: '1.5rem',
                    }
                  }
                >
                  {project.socialIcons &&
                    project.socialIcons.map((icon, index) => (
                      <motion.a
                        href={icon.link}
                        target='_blank'
                        rel='noreferrer noopener'
                        className='icon-back'
                        key={index}
                      >
                        <motion.img
                          src={getPlatform(icon.name)}
                          key={index}
                          alt='overview'
                        />
                      </motion.a>
                    ))}
                  <motion.a
                    href={project.live}
                    target='_blank'
                    rel='noreferrer noopener'
                    className='icon-back'
                  >
                    <motion.img src={liveIcon} alt='overview' />
                  </motion.a>
                </Platforms>
                <motion.div className='header'>
                  <motion.h2 layoutId={`title ${id}`}>{project.title}</motion.h2>

                  <img
                    src={workBackground}
                    className='back background-1'
                    alt='background'
                  />
                  <img src={workCircle} className='back background-2' alt='pakistan' />
                </motion.div>
                <div className='description'>
                  <h4 style={{ color: `${project.primaryColor}` }}>Description:</h4>
                  <p> {project.description}</p>
                  <h4 style={{ color: `${project.primaryColor}` }}>Skills:</h4>
                  <p>{project.builtWith}</p>
                </div>
                {project.live && (
                  <div className='resume-block'>
                    <Button
                      title='Live Preview'
                      icon={liveIcon}
                      link={{
                        pathname: `${project.live}`,
                      }}
                      target='_blank'
                    />

                    <Button
                      title='Video Demo'
                      icon={playDark}
                      link={{
                        pathname: `${project.video}`,
                      }}
                      target='_blank'
                    />
                  </div>
                )}
              </div>
              <Info></Info>
            </Stats>

            <Description>
              <img src={project.overview} alt={'overview'} />
            </Description>
            <div className='gallery'>
              {project &&
                project.images.map((image, i) => (
                  <img src={image} key={i} alt={`${project.name + 1}`} />
                ))}
            </div>

            {project.video && (
              <VideoSection
                title={project.title}
                highlight={null}
                width='100%'
                src={project.video}
                border={project.primaryColor}
              />
            )}

            <CheckWork project={nextProject} detail='Next' />
            <CheckWork project={preProject} detail='Previous' />
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;

  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(25, 32, 44, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;

  &::-webkit-scrollbar {
    width: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${COLORS.primary};
  }

  &::-webkit-scrollbar-track {
    background: ${COLORS.bodyLight};
  }
`;

const Detail = styled(motion.div)`
  width: 85%;

  border-radius: 1rem;
  border: 5px solid ${COLORS.black};
  padding: 2rem 5rem;
  ${respondTo.pMobile` 
  padding: 2rem 1rem;
      `}
  background: ${COLORS.white};
  position: absolute;
  left: 7.5%;

  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .rating {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .description {
      background: rgba(25, 32, 44, 1);
      padding: 4rem;
      width: 80%;
      border-radius: 1rem;
      color: ${COLORS.white};
      ${respondTo.pMobile` 
      width: 100%;
      `}
      h4 {
        padding: 2rem 0;
      }
    }
    .header {
      height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;
      justify-content: center;
      text-align: center;
      ${respondTo.pMobile` 
    height: 50vh;
      `}
      .back {
        position: absolute;
        width: 20%;
        top: 40%;
        height: auto;
        object-fit: cover;
        ${respondTo.pMobile` 
    width: 40%;
      `}
      }
      .background-1 {
        width: 45%;
        top: 10%;
        height: 75%;
        ${respondTo.pMobile` 
    width: 80%;
      `}
      }
      h2 {
        z-index: 20;
      }
    }
  }
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
  background: red;
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
const Platforms = styled(motion.div)`
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* position: fixed; */
  height: 20%;
  /* margin: 1rem; */
  .icon-back {
    margin-right: 1rem;
    border-radius: 50%;
    padding: 0.5rem 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    border: 5px solid ${COLORS.bodyLight};
    background: ${COLORS.bodyLight};
    transition: all 0.5s ease;
    :hover {
      background-color: ${COLORS.white} !important;
    }
  }
`;

// const Media = styled(motion.div)`
//   margin-top: 5rem;
//   img {
//     width: 100%;
//   }
// `;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default WorkDetails;
