import { motion } from 'framer-motion';
import styled from 'styled-components';
import { respondTo } from './RespondTo';
import { COLORS } from './Theme';
export const ProjectSection = styled(motion.div)`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 15rem 0 10rem 0;
  ${respondTo.iPro` 
  padding: 10rem 3rem 8rem 3rem;
      `}
  @media only screen and (max-width: 400px ) {
    padding: 0;
  }
`;
export const Work = styled(motion.div)`
  min-height: 50vh;
  width: 90%;
  margin: 30% auto 0 auto;
  text-align: center;

  ${respondTo.iPro` 
  margin: 20% auto 0 auto; 
      `}
  .work-intro {
    z-index: 5;

    width: 60%;
    height: 30%;
    margin: 0 auto;
    text-align: center;
    background: ${COLORS.bodyDark};
    padding: 2rem 0;
    background: rgba(25, 32, 44, 0.8);
    border-bottom-right-radius: 3rem;
    border-top-right-radius: 3rem;
    border-bottom-left-radius: 3rem;
    border: 2px solid ${COLORS.secondary};
    -webkit-box-shadow: 2px 5px 15px 8px rgba(0, 0, 0, 0.6);
    box-shadow: 2px 5px 15px 8px rgba(0, 0, 0, 0.6);
    ${respondTo.pMobile` 
width: 80%;      `}
  }
  h2 {
    -webkit-text-stroke: 2px ${COLORS.secondary};
    text-stroke: 2px ${COLORS.secondary};
  }
  .projects-btn {
    background: ${COLORS.secondary};
    color: ${COLORS.bodyDark};
    font-size: 4rem;
    border: 1rem solid ${COLORS.bodyDark};
    :hover {
      background: ${COLORS.white};
      color: ${COLORS.bodyDark};
    }
  }
`;

export const Line = styled(motion.div)`
  height: 0.2rem;
  background: ${COLORS.secondary};
  width: 0%;
  position: absolute;
  bottom: -10%;
  left: 0%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
