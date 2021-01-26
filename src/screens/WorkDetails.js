import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useHistory, useLocation } from 'react-router-dom';
import { behance, dribble, github, starEmpty, starFull } from '../assets/social';
import { COLORS } from '../styles/Theme';

const WorkDetails = ({ projects }) => {
  const history = useHistory();
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];
  const [project, setProject] = useState(null);
  const exitDetailHander = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/');
    }
  };
  console.log(project);
  useEffect(() => {
    const currentProject = projects.filter((stateProject) => stateProject.id === pathId);
    setProject(currentProject[0]);
  }, [projects, pathId]);

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
  return (
    <CardShadow className='shadow' onClick={exitDetailHander}>
      {project && (
        <Detail layoutId={pathId}>
          <Stats>
            <div className='rating'>
              <div className='header'>
                <motion.h3 layoutId={`title ${pathId}`}>{project.title}</motion.h3>
              </div>
              <p>Rating: {game.rating}</p>
            </div>
            <Info>
              {/* <h3>Platforms</h3> */}
              <div>{getStars()}</div>
              <Platforms>
                {project.socialIcons.map((icon, index) => (
                  <a
                    href={icon.link}
                    target='_blank'
                    rel='noreferrer noopener'
                    className='icon-back'
                  >
                    <img src={getPlatform(icon.name)} key={index} alt='overview' />
                  </a>
                ))}
              </Platforms>
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
              <img src={image} key={project.id} alt={'he'} />
            ))}
          </div>
        </Detail>
      )}
    </CardShadow>
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
  z-index: 5;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
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
    /* width: 100%;
    height: 80vh; */
    .header {
      height: 60vh;
      background: green;
      width: 100%;
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
  display: flex;
  justify-content: flex-end;

  .icon-back {
    margin-right: 1rem;
    border-radius: 50%;
    padding: 0.5rem 0.5rem;
    display: flex;
    justify-content: center;
    width: 20%;
    align-items: center;
    text-align: center;
    cursor: pointer;
    border: 5px solid ${COLORS.bodyLight};
    background: ${COLORS.bodyLight};
    transition: all 0.5s ease;
    :hover {
      background-color: ${COLORS.white} !important;
    }
    img {
      margin-left: 3rem;
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
