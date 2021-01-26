import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../styles/Theme';
import TextEllipsis from 'react-text-ellipsis';

import { respondTo } from './../styles/RespondTo';
import { Link, useHistory } from 'react-router-dom';
// import iconList from './iconList';
import { behance, dribble, github, timeIcon } from '../assets/social';

const ProjectCard = ({ project }) => {
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
    <Project key={project.id}>
      <div className='header-img' onClick={() => ProjectDetails(project.id)}>
        <img src={project.overview} alt='overview' />
      </div>
      <div className='content'>
        <div className='title'>
          <h4>{project.title} </h4>
          <div className='icon-social'>
            {project.socialIcons.map((icon, index) => (
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
          <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={timeIcon} alt='overview' />
            <p> 72h </p>
          </p>
        </div>
        <div className='title '>
          <h4 style={{ color: COLORS.primary }}>{project.side}</h4>
          <div className='icons'>
            <a href='/contact'>
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
  flex: 0 0 45%;
  background: ${COLORS.white};
  margin-bottom: 10rem;
  border-radius: 2rem;
  -webkit-box-shadow: 2px 5px 15px 8px rgba(0, 0, 0, 0.6);
  box-shadow: 2px 5px 15px 8px rgba(0, 0, 0, 0.6);
  height: auto;
  ${respondTo.pMobile` 
   flex: 0 0 100%;
  `}

  .header-img {
    cursor: pointer;
    img {
      object-fit: cover;
      width: 100%;
    }
  }
  .content {
    padding: 2rem 1.5rem;
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
    font-size: 2.8rem;
  }
  .icon-back {
    margin-right: 1rem;
    border-radius: 50%;
    padding: 0.5rem 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 5px solid ${COLORS.bodyLight};
    background: ${COLORS.bodyLight};
    transition: all 0.5s ease;
    :hover {
      background-color: ${COLORS.white} !important;
    }
    img {
      height: 2rem;
      pointer-events: none;
    }
  }
  .short-desc {
    padding: 0.5rem 0;
    color: ${COLORS.textgrey};
    text-align: left;
  }
  .skills-desc {
    padding: 1rem 0;
    color: ${COLORS.textgrey};
    opacity: 0.6;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .skills-desc-left {
      flex: 0 0 80%;
    }
    p {
      font-size: 1.8rem;
    }
  }
`;

export default ProjectCard;
