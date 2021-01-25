import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { direction, design, code, strategy, skillBack } from './../assets/images';
import { COLORS } from '../styles/Theme';
const WorkSection = () => {
  return (
    <Overview>
      <div className='deedColumn'>
        <div className='direction'>
          <div className='direction-img'>
            <img src={direction} className='icon' />
            <img src={skillBack} className='icon-background' />
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
      <div className='deedColumn'>
        <div className='direction strategy'>
          <div className='direction-img'>
            <img src={strategy} className='icon' />
            <img src={skillBack} className='icon-background' />
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
            <img src={design} className='icon' />
            <img src={skillBack} className='icon-background' />
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
      <div className='deedColumn'>
        <div className='direction strategy'>
          <div className='direction-img'>
            <img src={code} className='icon' />
            <img src={skillBack} className='icon-background' />
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
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  .deedColumn {
    width: 100%;
    height: 100%;
    padding: 3rem 0;
  }
  .direction,
  .strategy,
  .design,
  .design {
    padding: 5rem;
  }
  .direction {
    width: 50%;
    height: 50vh;
    .direction-img {
      position: relative;
      height: 100%;
      .icon-background {
        position: absolute;
        top: -30%;
        left: -20%;
        width: 100%;
        height: 150%;
        object-fit: cover;
      }
      .icon {
        z-index: 1;
        top: 2rem;
        position: relative;
        left: 15%;
      }
    }
    h3 {
      margin: 10% 0 5% 0;
      line-height: 1.2;
    }
    p {
      font-size: 2rem;
      line-height: 1.5;
      color: ${COLORS.textgrey};
    }
  }
  .strategy {
    width: 50%;
    position: relative;
    right: -50%;
    text-align: right;
    .direction-img {
      text-align: center;

      .icon-background {
        left: 10rem;
      }
      .icon {
        left: 25%;
      }
    }
  }
`;

export default WorkSection;
