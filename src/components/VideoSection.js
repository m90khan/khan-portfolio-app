import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../styles/Theme';
import { respondTo } from './../styles/RespondTo';
import { useScroll } from './useScroll';
import { fade } from '../styles/Animation';
const VideoSection = ({
  src = 'https://www.youtube-nocookie.com/embed/lLQagAL3Fwo',
  width = '80%',
  title = 'Video Resume',
  highlight = 'Full Story',
  border = COLORS.secondary,
}) => {
  const [element, controls] = useScroll();

  return (
    <Video style={{ width: width, height: '100vh' }}>
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
      </motion.div>
    </Video>
  );
};
const Video = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 5rem;
  ${respondTo.iPro` 
  height: 70vh;
      `}
  ${respondTo.iPad` 
  height: 50vh;
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
