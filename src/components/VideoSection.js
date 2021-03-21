import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../styles/Theme';
import { respondTo } from './../styles/RespondTo';
import { useScroll } from './useScroll';
import { fade } from '../styles/Animation';
import Button from './Button';
import { download, figma, play } from '../assets/social';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
const VideoSection = ({
  src = 'https://www.youtube-nocookie.com/embed/ghzFFalTciE',
  width = '80%',
  title = 'Video Resume',
  highlight = 'Full Story',
  border = COLORS.secondary,
  resume,
}) => {
  const [element, controls] = useScroll();
  const { pathname } = useLocation();

  return (
    <Video style={{ width: width, height: '100vh' }} id='videoSectionID'>
      <motion.div
        className='video-block'
        ref={element}
        variants={fade}
        animate={controls}
        initial='hidden'
        style={{ border: `2px solid ${border}` }}
      >
        {highlight && <motion.h4 className='short'>{highlight}</motion.h4>}
        {title && <motion.h3 style={{ color: border }}>{title}</motion.h3>}
        <br />
        <motion.div className='video'>
          <iframe
            title='Video Resume'
            src={src}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </motion.div>
        {resume && (
          <div className='resume-block'>
            <Button title='Download CV' icon={download} link={resume} target='_blank' />
            <Button title='Cover Letter' icon={download} link='/about/#videoSectionID' />

            <Link
              to={{
                pathname:
                  ' https://www.figma.com/file/XKWUdZIsKSFLD8CuI61C1Z/Projects-Case-Studies?node-id=0%3A1',
              }}
              target='_blank'
            >
              <div className='resume'>
                <img src={figma} alt='button' />
                <h4 style={{ display: 'inline-block' }}>View all projects in Figma</h4>
              </div>
            </Link>
          </div>
        )}
      </motion.div>
    </Video>
  );
};
const Video = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-top: 5rem;
  ${respondTo.iPro` 
  height: 70vh;
      `}
  ${respondTo.iPad` 
  height: 50vh;
      `}
  ${respondTo.pMobile` 
width: 95% !important;
      `}
  .video-block {
    /* background: rgba(25, 32, 44, 0.5); */
    padding: 6rem;
    width: 80%;
    z-index: 900;
    height: auto;
    color: ${COLORS.white};
    background: rgba(25, 32, 44, 0.8);
    border-bottom-right-radius: 4rem;
    border-top-right-radius: 4rem;
    border-bottom-left-radius: 4rem;
    position: relative;
    -webkit-box-shadow: 2px 5px 15px 8px rgba(0, 0, 0, 0.6);
    box-shadow: 2px 5px 15px 8px rgba(0, 0, 0, 0.6);
    ${respondTo.iPro` 
    width: 95%;
      `}
    ${respondTo.pMobile` 
    padding: 3rem 2rem;
      `}
    .video {
      overflow: hidden;
      padding-bottom: 56.25%;
      position: relative;
      height: 0;
      border: 1rem solid ${COLORS.bodyDark};

      iframe {
        border: 1rem solid ${COLORS.bodyDark};
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
      }
    }
    ${respondTo.pMobile` 
      width: 100%;
      `}
  }
`;
export default VideoSection;
