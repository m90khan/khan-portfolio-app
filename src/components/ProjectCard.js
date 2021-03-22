import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../styles/Theme';
import TextEllipsis from 'react-text-ellipsis';

import { respondTo } from './../styles/RespondTo';
import { Link, useHistory } from 'react-router-dom';
// import iconList from './iconList';
import { behance, dribble, github, timeIcon } from '../assets/social';

const ProjectCard = ({ project, style }) => {
  const history = useHistory();
  const ProjectDetails = (id) => {
    history.push(`/work/${id}`);
  };
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
    <Project key={project.id} style={style}>
      <div className='header-img' onClick={() => ProjectDetails(project.id)}>
        <img src={project.overview} alt='overview' />
      </div>
      <div className='content'>
        <div className='title'>
          <motion.h4>{project.title} </motion.h4>
          <div className='icon-social'>
            {project.socialIcons &&
              project.socialIcons.map((icon, index) => (
                <a
                  href={icon.link}
                  target='_blank'
                  rel='noreferrer noopener'
                  className='icon-back'
                  key={index}
                >
                  <img src={getPlatform(icon.name)} key={index} alt='overview' />
                </a>
              ))}
          </div>
        </div>
        <TextEllipsis lines={2} tag={'p'} ellipsisChars={'...'} tagClass={'short-desc'}>
          {project.description}
        </TextEllipsis>
        {/* <p className='short-desc'>{project.description}</p> */}
        <div className='title skills-desc'>
          <TextEllipsis
            lines={2}
            tag={'p'}
            ellipsisChars={'...'}
            tagClass={'skills-desc-left'}
          >
            <strong>Skills:</strong> {project.builtWith}
          </TextEllipsis>
          {/* <p className='skills-desc-left'>
            <strong>Skills:</strong> {project.builtWith}
          </p> */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2rem',
              marginRight: '1rem',
            }}
          >
            <img src={timeIcon} alt='overview' />
            <p> 72h</p>
          </div>
        </div>
        <div className='title '>
          <h4 style={{ color: COLORS.primary }}>{project.side}</h4>
          <div className='icons'>
            <a href={`${project.live}`}>
              <button style={{ marginRight: '1rem' }}>Live</button>{' '}
            </a>
            <Link to={`/work/${project.id}`}>
              <button>Details</button>
            </Link>
          </div>
        </div>
      </div>
    </Project>
  );
};

const Project = styled(motion.div)`
  flex: 0 0 30%;
  background: ${COLORS.white};
  z-index: 20;
  overflow: hidden;

  margin-bottom: 5rem;
  border-radius: 2rem;
  -webkit-box-shadow: 2px 5px 15px 8px rgba(0, 0, 0, 0.6);
  box-shadow: 2px 5px 15px 8px rgba(0, 0, 0, 0.6);
  ${respondTo.iPro` 
   flex: 0 0 42%;
      `}
  ${respondTo.pMobile` 
   flex: 0 0 100%;
  `}

  .header-img {
    cursor: pointer;
    img {
      object-fit: cover;
      width: 100%;
      height: 30rem;
    }
  }
  .content {
    padding: 2rem 1.5rem;
    height: 100%;
  }

  .title,
  .icon-social {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    @media only screen and (max-width: 900px) {
      flex-wrap: wrap;
      text-align: left;
      h4 {
        padding: 0.5rem 0;
        flex: 0 0 100%;
        width: 100%;
      }
      .icons {
        width: 100%;
        button {
          padding: 1rem 2rem;
        }
      }
    }
    @media only screen and (max-width: 600px) {
      flex-wrap: no-wrap;
      text-align: left;
      h4 {
        padding: 0.5rem 0;
        flex: 0 0 50%;
        width: 100%;
      }
    }
  }
  h4 {
    color: ${COLORS.bodyDark};
    font-size: 2rem;
  }
  .icon-back {
    margin-right: 1rem;
    border-radius: 50%;
    padding: 0.5rem 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 2px solid ${COLORS.primary};
    background: ${COLORS.bodyLight};
    transition: all 0.5s ease;
    padding: 1rem;
    :hover {
      background-color: ${COLORS.secondary} !important;
    }
    img {
      height: 1.5rem;
      object-fit: cover;
      pointer-events: none;
    }
  }
  .short-desc {
    padding: 0.5rem 0;
    color: ${COLORS.textgrey};
    text-align: left;
    font-size: 1.6rem;
  }
  .skills-desc {
    color: ${COLORS.textgrey};
    opacity: 0.6;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;

    .skills-desc-left {
      flex: 0 0 80%;
    }
    p {
      font-size: 1.4rem;
    }
  }
`;

export default ProjectCard;
