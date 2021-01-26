import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { behance, dribble, github, starEmpty, starFull } from '../assets/social';
import { COLORS } from '../styles/Theme';
import { workCircle, workBackground } from './../assets/images';
import useWindowSize from './../utils/useWindowSize';
import { respondTo } from './../styles/RespondTo';

const WorkDetails = ({ projects }) => {
  const [project, setProject] = useState(projects[0]);
  const history = useHistory();
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];
  // const params = useParams();
  // const pathId = params.id;
  const exitDetailHander = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/');
    }
  };

  const game = {
    name: 'khan',
    rating: 3,
  };
  //Get Stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt='star' key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt='star' key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };

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
  useEffect(() => {
    const currentProject = projects.filter((stateProject) => stateProject.id === pathId);
    setProject(currentProject[0]);
  }, [project, projects, history, pathId]);
  const iconsBackground = {
    background: `${project.primaryColor}`,
    padding: '.5rem',
    borderRadius: '1.5rem',
  };

  return (
    <>
      {project && (
        <CardShadow className='shadow' onClick={exitDetailHander}>
          <Detail
            layoutId={pathId}
            style={{ background: project.primaryColor }}
            key={project.id}
          >
            <Stats>
              <div className='rating'>
                <Platforms style={iconsBackground}>
                  {project.socialIcons.map((icon, index) => (
                    <a
                      href={icon.link}
                      target='_blank'
                      rel='noreferrer noopener'
                      className='icon-back'
                      key={index}
                    >
                      <img src={getPlatform(icon.name)} alt='overview' />
                    </a>
                  ))}
                </Platforms>
                <div className='header'>
                  <motion.h2 layoutId={`title ${pathId}`}>{project.title}</motion.h2>
                  <img
                    src={workBackground}
                    className='back background-1'
                    alt='background'
                  />
                  <img src={workCircle} className='back background-2' alt='pakistan' />
                </div>
                <p>
                  <h4>Description:</h4>
                  {project.description} <br /> <h4>Skills:</h4>
                  {project.builtWith}
                </p>
              </div>
              <Info>
                {/* <h3>Platforms</h3> */}
                {/* <div>{getStars()}</div> */}
              </Info>
            </Stats>
            <Media>
              {/* <motion.img
            layoutId={`image ${pathId}`}
            src={smallImage(game.background_image, 1280)}
            alt={game.background_image}
          /> */}
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className='gallery'>
              {project.images.map((image, i) => (
                <img src={image} key={i} alt={'he'} />
              ))}
            </div>
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
  width: 80%;

  border-radius: 1rem;
  padding: 2rem 5rem;
  ${respondTo.pMobile` 
  padding: 2rem 1rem;
      `}
  background: ${COLORS.white};
  position: absolute;
  left: 10%;
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
    p {
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
      justify-content: center;
      text-align: center;
      ${respondTo.pMobile` 
    height: 50vh;
      `}
      .back {
        position: absolute;
        width: 20%;
        height: auto;
        object-fit: cover;
        ${respondTo.pMobile` 
    width: 40%;
      `}
      }
      .background-1 {
        width: 45%;
        height: 9%;
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

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default WorkDetails;
