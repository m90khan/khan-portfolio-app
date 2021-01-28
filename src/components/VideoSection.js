import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../styles/Theme';
import { respondTo } from './../styles/RespondTo';
const VideoSection = () => {
  return (
    <Video>
      <div className='video-block'>
        <h4 className='short'>Full Story</h4>
        <h1>Video Resume</h1>
        <br />
        <div className='video'>
          <iframe
            title='Video Resume'
            src='https://www.youtube-nocookie.com/embed/lLQagAL3Fwo'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullScreen
          ></iframe>
        </div>
      </div>
    </Video>
  );
};
const Video = styled(motion.div)`
  height: 120vh;
  width: 80%;
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
    height: auto;
    color: ${COLORS.white};
    background: rgba(25, 32, 44, 0.8);
    border-bottom-right-radius: 4rem;
    border-top-right-radius: 4rem;
    border-bottom-left-radius: 4rem;
    border: 2px solid ${COLORS.secondary};
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
