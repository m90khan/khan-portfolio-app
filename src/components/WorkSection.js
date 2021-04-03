import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../styles/Theme';
import { respondTo } from './../styles/RespondTo';
import Form from './Form';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/dist/styles.css';
import {
  fullStackCert,
  frontStackCert,
  mongo001Cert,
  jsCert,
  seoCert,
  responsiveFFC,
} from '../assets/skills';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider);
const Slider = () => {
  return (
    <AutoplaySlider
      cssModule={AwsSliderStyles}
      play={true}
      cancelOnInteraction={false}
      interval={3000}
      style={{ height: '80vh', width: '100%' }}
    >
      <div data-src={fullStackCert} />
      <div data-src={responsiveFFC} />
      <div data-src={frontStackCert} />
      <div data-src={mongo001Cert} />
      <div data-src={jsCert} />
      <div data-src={seoCert} />
    </AutoplaySlider>
  );
};
const WorkSection = ({ story, title, works }) => {
  return (
    <Work>
      <div className='video-block'>
        <h4 className='short'>{story && story}</h4>
        <h1>{title}</h1>
        <br />
        <div className='video'>
          {works && works.map((item, i) => <p key={i}>- {item}</p>)}
          {title && title === 'Contact' ? <Form /> : ''}
        </div>
        {works && (
          <div>
            <h3 style={{ margin: '2rem 0', color: COLORS.primary }}>Certifications</h3>{' '}
            <Slider />
          </div>
        )}
      </div>
    </Work>
  );
};
const Work = styled(motion.div)`
  min-height: 100vh;
  width: 80%;
  display: flex;
  justify-content: center;
  padding: 5rem 0;
  align-items: center;
  margin-top: 10rem;
  ${respondTo.iPro` 
  height: 70vh;
      `}
  ${respondTo.pMobile` 
width: 95%;
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
    ${respondTo.iPro` 
    width: 95%;
      `}
    .video {
      p {
        color: ${COLORS.textgrey};
      }
    }

    ${respondTo.pMobile` 
      width: 100%;
      padding: 3rem 2rem;
      `}
  }
`;
export default WorkSection;
