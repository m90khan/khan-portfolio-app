import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';
import styled from 'styled-components';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const menuLists = [
  {
    title: 'ABOUT',
    links: [
      { name: 'Home', link: '/' },
      { name: 'My Story', link: '/about' },
    ],
  },
  {
    title: 'WORK',
    links: [{ name: 'Projects', link: '/work' }],
  },
  {
    title: 'SOCIAL',
    links: [
      { name: 'Linkedin', link: 'https://www.linkedin.com/in/khanmohsinx/' },
      { name: 'Github', link: 'https://github.com/m90khan' },
      {
        name: 'Behance',
        link: 'https://www.behance.net/Khan_Mohsin',
      },
      {
        name: 'Dribble',
        link: 'https://dribbble.com/khanx',
      },
    ],
  },
  {
    title: 'CONTACT',
    links: [{ name: "Let's talk", link: '/contact' }],
  },
];

export const NavList = ({ isOpen, toggle }) => (
  <List variants={variants} style={isOpen ? { display: 'flex' } : { display: 'none' }}>
    {menuLists.map((menuItem, i) => (
      <MenuItem
        key={i}
        menuItem={menuItem}
        style={isOpen ? { zIndex: 100 } : { zIndex: 0 }}
        toggle={toggle}
      />
    ))}
  </List>
);

const List = styled(motion.ul)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 50;
  flex-wrap: wrap;
`;
