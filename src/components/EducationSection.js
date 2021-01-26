import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { skillBack, germany, china, pakistan } from '../assets/images';
import { COLORS } from '../styles/Theme';
import { respondTo } from './../styles/RespondTo';

const EducationDetails = () => {
  const Schools = [
    {
      icon: germany,
      country: 'Germany',

      date: 'On Hold',
      details:
        'I started my Masters (MS) in Computer & Communication Technology at Saarland University. My major courses were Artificial intelligence, Future media internet, telecommunication || and Automation.',
    },
    {
      icon: china,
      country: 'China',
      date: '2011',
      details:
        "When I moved to China in 2007, I Studied Bachelor's (BE) Electronics & Information Engineering from HUST. During this period, I worked on different projects every semester especially moving objects recognition using video surveillance.",
    },
    {
      icon: pakistan,
      country: 'Pakistan',
      date: '2007',
      details:
        'I completed my college studies in the field of Science covering the main topics of Math, Physics, and Computer Science from Punjab Group of Colleges, Pakistan.',
    },
    {
      icon: pakistan,
      country: 'Pakistan',
      date: '2005',
      details:
        'I finished high school studies at JDIHS, Pakistan. The major courses were Physics, Mathematics, Chemistry, Computer Science and English ',
    },
  ];

  return (
    <Overview>
      <div className='deedColumn'>
        <div className='direction'>
          <div className='direction-img'>
            <img src={Schools[0].icon} className='icon' alt='direction' />
            <img src={skillBack} className='icon-background' alt='background' />
          </div>
          <h3>
            {Schools[0].country} <br></br>
            <h4 className='short'> {Schools[0].date}</h4>
          </h3>
          <p>{Schools[0].details}</p>
        </div>
      </div>
      <div className='deedColumn deedColumnright'>
        <div className='direction strategy'>
          <div className='direction-img'>
            <img src={Schools[1].icon} className='icon' alt='strategy' />
            <img src={skillBack} className='icon-background' alt='background' />
          </div>
          <h3>
            {Schools[1].country} <br></br>
            <h4 className='short'> {Schools[1].date}</h4>
          </h3>
          <p>{Schools[1].details}</p>
        </div>
      </div>
      <div className='deedColumn'>
        <div className='direction'>
          <div className='direction-img'>
            <img src={Schools[2].icon} className='icon' alt='design' />
            <img src={skillBack} className='icon-background' alt='background' />
          </div>
          <h3>
            {Schools[2].country} <br></br>
            <h4 className='short'> {Schools[2].date}</h4>
          </h3>
          <p>{Schools[2].details}</p>
        </div>
      </div>
      <div className='deedColumn deedColumnright'>
        <div className='direction strategy'>
          <div className='direction-img'>
            <img src={Schools[3].icon} className='icon' alt='code' />
            <img src={skillBack} className='icon-background' alt='background' />
          </div>
          <h3>
            {Schools[3].country} <br></br>
            <h4 className='short'> {Schools[3].date}</h4>
          </h3>
          <p>{Schools[3].details}</p>
        </div>
      </div>
    </Overview>
  );
};

const Overview = styled(motion.div)`
  min-height: 100vh;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .deedColumn {
    flex: 0 0 50%;
    height: 100%;
    margin: 4rem auto;
    ${respondTo.iPro`
           flex: 0 0 80%
         `}
    ${respondTo.pMobile`
           flex: 0 0 80%
         `}
  }

  .direction {
    padding: 0 5rem;
  }
  .direction {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    ${respondTo.iPro`
            width: 100%;
            padding: 4rem 0;
         `}
    .direction-img {
      position: relative;
      height: 50vh;
      ${respondTo.L`
      height: 40vh;
         `}
      ${respondTo.iPro`
            height: 30vh;
            width: 80%
          `}
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .icon-background {
        position: absolute;
        top: 0%;
        left: -20%;
        width: 100%;
        height: 100%;
        object-fit: cover;
        ${respondTo.iPro`
        width: 80%;
         `}
      }
      .icon {
        z-index: 1;
        top: 0%;
        position: relative;
        left: 18%;
        width: 30%;
        object-fit: cover;
        ${respondTo.iPro`
                left: 10%;
             width: 20%;
             height: 30%;
             object-fit: cover;
         `}
        ${respondTo.pMobile`
              width: 30%;
             height: 25%;
             object-fit: cover;
         `}
      }
    }
    h3 {
      margin: 2% 0 5% 0;
      ${respondTo.iPro`
      margin: 5% 0 5% 0;
         `}
      line-height: 1.2;
    }
    p {
      font-size: 2rem;
      line-height: 1.6;
      max-width: 75%;
      color: ${COLORS.textgrey};
      ${respondTo.iPro`
      max-width: 65%;
         `}
    }
  }
  .strategy {
    position: relative;
    /* right: -50%; */
    text-align: right;
    top: 25rem;
    ${respondTo.iPro`
              top: 0rem;

         `}
    height: auto;
    /* ${respondTo.iPro`
    right: 0%;
         `} */
    align-items: flex-end;
    .direction-img {
      .icon-background {
        left: 12rem;
        ${respondTo.L`
      left: 10rem;
         `}
        ${respondTo.iPro`
      left: 35%;
         `}
      }
      .icon {
        left: 60%;
        ${respondTo.L`
      left: 52%;
         `}
        ${respondTo.iPro`
      left: 65%;
         `}
        ${respondTo.pMobile`
                  left: 60%;

         `}
      }
    }
  }
`;

export default EducationDetails;
