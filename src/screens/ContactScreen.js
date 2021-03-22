import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../styles/Theme';
import { respondTo } from './../styles/RespondTo';
import { workBackground } from './../assets/images';
import WorkSection from '../components/WorkSection';
import blobContact from './../assets/lottie/contact.json';

import CheckWork from '../components/CheckWork';
import Meta from '../components/Meta';
import { headerImage } from '../styles/Animation';
import Lottie from 'react-lottie';
import { socialIcons } from '../utils/textData';

const ContactScreen = () => {
  const [icons, setIcons] = useState(socialIcons);

  const defaultOptions = (img) => {
    return {
      loop: true,
      autoplay: true,
      animationData: img,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
  };

  return (
    <>
      <Meta title='Contact Khan | Full Stack Developer' />
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
            <motion.h2 layoutId={`title `}>Send Email.</motion.h2>
            <img src={workBackground} className='back background-1' alt='background' />
            {/* <img src={workCircle} className='back background-2' alt='pakistan' /> */}
            <motion.div className='back background-2' variants={headerImage}>
              <Lottie options={defaultOptions(blobContact)} />
            </motion.div>
          </div>
        </div>
        <WorkSection
          story='Looking for someone who think outside the box? then ...'
          title='Contact'
        />
        <CheckWork />
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
        width: 60%;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 20%;
  img {
    width: 1.5rem;
    height: 1.55rem;
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

export default ContactScreen;
