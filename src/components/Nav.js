import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from '../utils/useDimension';
import { MenuToggle } from './MenuToggle';
import { NavList } from './NavList';
import { COLORS } from '../styles/Theme';
import { profile } from '../assets/images';
import { twitter, behance, linkedin, dribble } from '../assets/social';
import { respondTo } from './../styles/RespondTo';
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 400}px at -100px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(20px at -20px -10px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};
const Nav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <>
      <LeftNav>
        <Link to='/about'>
          <h4 className='leftlink'>About Me</h4>
        </Link>
        <div className='footerleft'>
          <p>© Khan Mohsin {new Date().getFullYear()}</p>
        </div>
      </LeftNav>

      <RightNav>
        {/* <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} /> */}
        <Link to='/' className='logo'>
          <img src={profile} alt='profile' />
        </Link>
        <Link className='rightlink' to='/contact'>
          Contact Me
        </Link>

        <div className='footerright'>
          <a href='https://dribbble.com/khanx' target='_blank' rel='noreferrer'>
            <img src={dribble} alt='dribble' />
          </a>
          <a href='https://www.behance.net/m90khanb58f' target='_blank' rel='noreferrer'>
            <img src={behance} alt='behance' />
          </a>

          <a href='https://twitter.com/m90khan' target='_blank' rel='noreferrer'>
            <img src={twitter} alt='twitter' />
          </a>
          <a
            href='https://www.linkedin.com/in/khanmohsinx/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={linkedin} alt='linkedin' />
          </a>
        </div>
      </RightNav>
      <StyledNav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
        // style={
        //   isOpen ? { transform: 'translateX(0%)' } : { transform: 'translateX(100%)' }
        // }
        style={isOpen ? { zIndex: 100 } : { zIndex: 29 }}
      >
        <motion.div className='nav-back' variants={sidebar} />
        <NavList isOpen={isOpen} toggle={() => toggleOpen()} />

        <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />
        {/* <motion.div className={isOpen ? 'background' : ''} variants={sidebar} /> */}
      </StyledNav>
    </>
  );
};

const StyledNav = styled(motion.nav)`
  position: absolute;
  top: 0;
  left: 10%;
  bottom: 0;
  width: 50%;
  height: 50%;
  z-index: 35;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  .nav-back {
    position: fixed;
    top: 0rem;
    left: 0%;
    bottom: 0;
    width: 100%;
    z-index: 34;
    background: ${COLORS.bodyDark};
  }
`;

// const StyledNav = styled(motion.nav)`
//   position: fixed;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   width: 100%;
//   height: 100%;
//   z-index: 40;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow-x: hidden;

//   .background {
//     position: absolute;
//     top: 0;
//     left: 0;
//     height: 100%;
//     bottom: 0;
//     width: 100%;
//     z-index: 35;
//     background: ${COLORS.bodyDark};
//   }
// `;

const RightNav = styled(motion.div)`
  width: 4%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${COLORS.bodyDark};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  z-index: 900;

  ${respondTo.iPro` 
 width: 9%
     `}
  ${respondTo.iPad` 
  width: 8%;
     `}
  ${respondTo.pMobile` 
    width: 15%;
    height: 16%;
     background-color: transparent;
      `}

  .logo {
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    transform: rotate(360deg);
    margin: 1.5rem 0.5rem;
    background: ${COLORS.bodyDark};
    ${respondTo.pMobile` 
 border: .5rem solid ${COLORS.bodyDark};
 possition: fixed;
 margin: 1.5rem .5rem;
 border-radius: 5rem;
`}
    img {
      width: 80%;
      object-fit: cover;
      ${respondTo.pMobile` 
      width: 100%;
      `}
    }
  }
  .rightlink {
    transform: rotate(-90deg);
    position: fixed;
    top: 50%;
    right: -0.5%;
    font-size: 1.5rem;
    color: #fff;
    font-weight: normal;
    ${respondTo.pMobile` 
   display:none;
      `}
  }
  .rightlink::hover {
    color: #1abc9c;
  }
  .footerright {
    bottom: 2.5rem;
    right: 0.5%;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* transform: rotate(-90deg); */
    color: ${COLORS.textgrey};
    ${respondTo.iPro` 
    right: 1%;
     `}
    ${respondTo.pMobile` 
 background: ${COLORS.bodyDark};
 bottom: 0;
 height: 5%;
 display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
      `}
    a {
      padding: 0.5rem 0;
      background: ${COLORS.bodyDark};
      img {
        width: 50%;

        text-align: right;
      }
    }
  }
`;

const LeftNav = styled(motion.div)`
  width: 4%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${COLORS.bodyDark};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 20;
  align-items: space-between;
  padding: 2rem 0;
  ${respondTo.iPro` 
 width: 9%
     `} ${respondTo.iPad` 
  width: 8%;
     `}
  ${respondTo.pMobile` 
    width: 12%;
    height: 10%;
     background-color: transparent;
      `}

  .leftlink {
    transform: rotate(-90deg);
    position: fixed;
    top: 50%;
    left: -0.5%;
    font-size: 1.5rem;
    color: #fff;
    z-index: 900;

    font-weight: normal;
    ${respondTo.iPro` 
    left: .5%;
     `}
    ${respondTo.pMobile` 
display:none;
      `}
  }
  .leftlink::hover {
    color: #1abc9c;
  }
  .footerleft {
    bottom: 7rem;
    left: -2%;
    z-index: 900;

    position: fixed;
    transform: rotate(90deg);
    color: ${COLORS.textgrey};
    ${respondTo.iPro` 
    left: -1.5%;
     `}
    ${respondTo.pMobile` 
display:none;
      `}
    p {
      font-size: 1.2rem;
      text-align: right;
    }
  }
`;

export default Nav;
