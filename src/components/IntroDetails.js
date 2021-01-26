import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { direction, design, code, strategy, skillBack } from '../assets/images';
import { COLORS } from '../styles/Theme';
import { respondTo } from './../styles/RespondTo';

const IntroDetails = () => {
  return (
    <Overview>
      <div className='deedColumn'>
        <div className='direction'>
          <div className='direction-img'>
            <img src={direction} className='icon' alt='direction' />
            <img src={skillBack} className='icon-background' alt='background' />
          </div>
          <h3>
            Strong <br></br>Direction
          </h3>
          <p>
            I believe that having a strong direction and team is very crucial when
            developing a product. I like to get involved in the planning stage to give my
            feedback if necessary to be able to match customer expectations.
          </p>
        </div>
      </div>
      <div className='deedColumn deedColumnright'>
        <div className='direction strategy'>
          <div className='direction-img'>
            <img src={strategy} className='icon' alt='strategy' />
            <img src={skillBack} className='icon-background' alt='background' />
          </div>
          <h3>
            Deep <br></br>Strategy
          </h3>
          <p>
            I always try to do my best to bring strategic thought to the forefront with
            every project. I take my time to do deep research to find the best possible
            solution for the problem and use it to create great experiences that deliver
            on user needs and business objectives.
          </p>
        </div>
      </div>
      <div className='deedColumn'>
        <div className='direction'>
          <div className='direction-img'>
            <img src={design} className='icon' alt='design' />
            <img src={skillBack} className='icon-background' alt='background' />
          </div>
          <h3>
            Creative <br></br>Design
          </h3>
          <p>
            Bringing the creative aspect in every project is what I do. I get obsessed
            with the latest trends “what’s next in design” so to test and implement them
            into projects to get brands to improve the User Experience.
          </p>
        </div>
      </div>
      <div className='deedColumn deedColumnright'>
        <div className='direction strategy'>
          <div className='direction-img'>
            <img src={code} className='icon' alt='code' />
            <img src={skillBack} className='icon-background' alt='background' />
          </div>
          <h3>
            Dry <br></br>Principle
          </h3>
          <p>
            I believe in the separation of concerns when it comes to problem-solving. I
            understand MVC architecture and separate the features into sections. I tend to
            go over the requirements and design thoroughly besides discussing with
            associated team members before coding.
          </p>
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
  flex-direction: column;
  overflow: hidden;
  .deedColumn {
    width: 100%;
    height: 70%;
  }

  .direction,
  .strategy,
  .design,
  .code {
    padding: 0 5rem;
  }
  .direction {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    ${respondTo.iPro`
            width: 100%;
            padding: 4rem
         `}
    .direction-img {
      position: relative;
      height: 50vh;

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
      margin: 10% 0 5% 0;
      ${respondTo.iPro`
      margin: 0% 0 5% 0;

         `}
      line-height: 1.2;
    }
    p {
      font-size: 2rem;
      line-height: 1.6;
      max-width: 75%;
      color: ${COLORS.textgrey};
    }
  }
  .strategy {
    position: relative;
    right: -50%;
    text-align: right;
    height: auto;
    ${respondTo.iPro`
    right: 0%;
         `}
    align-items: flex-end;
    .direction-img {
      .icon-background {
        left: 12rem;
        ${respondTo.iPro`
      left: 35%;
         `}
      }
      .icon {
        left: 60%;
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

export default IntroDetails;
