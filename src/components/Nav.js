import React, { useState } from 'react';

import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import logo from '../assets/images/profile.png';
import { twitter, behance, linkedin, dribble } from '../assets/social';

const Nav = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleMenu = () => {
    setActiveMenu(true);
  };

  return (
    <>
      <div className={activeMenu ? 'heady active  ' : 'heady'}>
        <div className={activeMenu ? 'navitems active  ' : 'navitems'}>
          <div className='navcolumn'>
            <h2>About</h2>
            <p>Home</p>
            <a className='cd-btn' href='about.html#top' data-type='page-transition'>
              My Story
            </a>
          </div>
          <div className='navcolumn'>
            <h2>Work</h2>
            <a className='cd-btn' href='bonito.html#top' data-type='page-transition'>
              Bonito
            </a>
            <a className='cd-btn' href='gymworks.html#top' data-type='page-transition'>
              GymWorks
            </a>
            <a className='cd-btn' href='robox.html#top' data-type='page-transition'>
              RoboX
            </a>
            <a
              className='viewall cd-btn '
              href='portfolio.html#top'
              data-type='page-transition'
            >
              View All
            </a>
          </div>
          <div className='navcolumn'>
            <h2>Blog</h2>
            <a className='cd-btn' href='blog.html' target='_blank'>
              Tech Talks
            </a>
          </div>
          <div className='navcolumn'>
            <h2>Contact</h2>
            <a className='cd-btn' href='contact.html' target='_blank'>
              Let's Talk
            </a>
          </div>
        </div>
        <div className={activeMenu ? 'bubbleback active' : 'bubbleback'}></div>
        <div className={activeMenu ? 'bubble active' : 'bubble'}></div>
        <div
          className={activeMenu ? 'bubble-wrap active' : 'bubble-wrap'}
          onClick={handleMenu}
        >
          <div className={activeMenu ? 'bar first active  ' : 'bar first'}></div>
          <div className={activeMenu ? 'bar second active  ' : 'bar second'}></div>
          <div className={activeMenu ? 'bar third active  ' : 'bar third'}></div>
        </div>
      </div>

      <h2 className='rightylink cd-btn' href='contact.html'>
        Contact Me
      </h2>

      <div className='footright'>
        <a href='https://dribbble.com/khanx' target='_blank'>
          <img src={dribble} width='' height='' alt='' />
        </a>
        <a href='https://www.behance.net/m90khanb58f' target='_blank'>
          <img src={behance} width='' height='' alt='' />
        </a>

        <a href='https://twitter.com/m90khan' target='_blank'>
          <img src={twitter} width='' height='' alt='' />
        </a>
        <a href='https://www.linkedin.com/in/khanmohsinx/' target='_blank'>
          <img src={linkedin} width='25px' height='25px' alt='' />
        </a>
      </div>
      <div className='leftbar'>
        <div className='logo'>
          <a to='/'>
            <img src={logo} alt='logo' />
          </a>
        </div>
        <a className='leftylink cd-btn' href='about.html'>
          About Me
        </a>
        <div className='footleft'>
          <p>© Khan Mohsin {new Date().getFullYear()}</p>
        </div>
      </div>
      <div className='rightbar'></div>
    </>
  );
};

export default Nav;
