import React, { useState } from 'react';

import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from '../utils/useDimension';
import { MenuToggle } from './MenuToggle';
import { NavItem } from './NavItem';
import { COLORS } from '../styles/Theme';
import { profile } from '../assets/images';
import { twitter, behance, linkedin, dribble } from '../assets/social';

const Nav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(30px at 40px 40px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
      >
        <motion.div className='background' variants={sidebar} />
        <NavItem />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
      <LeftNav>
        <Link to='/work' className='logo'>
          <img src={profile} alt='profile' />
        </Link>
        <Link to='/about' className='leftlink'>
          About Me
        </Link>
        <div className='footerleft'>
          <p>© Khan Mohsin {new Date().getFullYear()}</p>
        </div>
      </LeftNav>
      {/* <div className={activeMenu ? 'bubbleback active' : 'bubbleback'}></div>
      <div className={activeMenu ? 'bubble active' : 'bubble'}></div> */}

      <RightNav>
        {/* <div
          className={activeMenu ? 'bubble-wrap active' : 'bubble-wrap'}
          onClick={handleMenu}
        >
          <div className={activeMenu ? 'bar first active  ' : 'bar first'}></div>
          <div className={activeMenu ? 'bar second active  ' : 'bar second'}></div>
          <div className={activeMenu ? 'bar third active  ' : 'bar third'}></div>
        </div> */}

        <Link className='rightlink' to='/contact'>
          Contact Me
        </Link>

        <div className='footerright'>
          <a href='https://dribbble.com/khanx' target='_blank'>
            <img src={dribble} alt='dribble' />
          </a>
          <a href='https://www.behance.net/m90khanb58f' target='_blank'>
            <img src={behance} alt='behance' />
          </a>

          <a href='https://twitter.com/m90khan' target='_blank'>
            <img src={twitter} alt='twitter' />
          </a>
          <a href='https://www.linkedin.com/in/khanmohsinx/' target='_blank'>
            <img src={linkedin} alt='linkedin' />
          </a>
        </div>
      </RightNav>
    </>
  );
};

const bubbleHack = styled.div`
  height: 50px;
  width: 50px;
  background-color: #000;
  top: 10px;
  right: 10px;
  position: absolute;
  border-radius: 50%;
  -webkit-transform: scale(1);
  opacity: 1;
`;

const NavColumn = styled(motion.div)`
  flex: 0 0 25%;
  z-index: 1000;
  a {
    text-align: left;
    margin-top: 3rem;
    display: block;
    font-size: 5rem;
    color: #fff;
    text-decoration: underline;
  }
  p {
    text-align: left;
    margin-top: 30px;
    display: block;
    line-height: inherit;
    font-size: 30px;
    color: #585f6d;
    text-decoration: line-through;
  }
  h2 {
    text-align: left;
    display: block;
    margin-bottom: 30px;
    font-size: 15rem;
    letter-spacing: 4px;
    color: #1abc9c;
    text-transform: uppercase;
  }
`;
const NavItems = styled(motion.div)`
  display: flex;
  justify-content: center;
  z-index: 900;
  opacity: 0; /* -webkit-transition: all 0s ease-out;
  -webkit-transition-delay: 0s; */
`;

const Menu = styled(motion.div)`
  /* z-index: 600; */
  width: 100vw;
  max-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 400;
  opacity: 1;
  transition: all 0.3s ease-out;
  transition-delay: 0.4s;

  /* clip-path: circle(200% at 100% -10%);
  -webkit-clip-path: circle(200% at 100% -10%); */
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
  align-items: space-between;
  .logo {
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    padding: 1rem 0rem;
    img {
      width: 70%;
      object-fit: cover;
    }
  }
  .leftlink {
    transform: rotate(-90deg);
    position: fixed;
    top: 50%;
    left: -1%;
    font-size: 1.5rem;
    color: #fff;
    font-weight: normal;
  }
  .leftlink::hover {
    color: #1abc9c;
  }
  .footerleft {
    bottom: 7rem;
    left: -3.5rem;
    position: fixed;
    transform: rotate(90deg);
    color: ${COLORS.textgrey};
    p {
      font-size: 1.2rem;
      text-align: right;
    }
  }
`;

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

  .rightlink {
    transform: rotate(-90deg);
    position: fixed;
    top: 50%;
    right: -1%;
    font-size: 1.5rem;
    color: #fff;
    font-weight: normal;
  }
  .rightlink::hover {
    color: #1abc9c;
  }
  .footerright {
    bottom: 2.5rem;
    right: 0;
    position: fixed;
    display: flex;
    flex-direction: column;

    /* transform: rotate(-90deg); */
    color: ${COLORS.textgrey};
    a {
      padding: 0.5rem 0;
      img {
        width: 50%;
        text-align: right;
      }
    }
  }
`;

export default Nav;
