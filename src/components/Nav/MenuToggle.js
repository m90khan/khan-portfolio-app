import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { COLORS } from '../../styles/Theme';
import { respondTo } from './../../styles/RespondTo';

const Path = (props) => (
  <motion.path
    fill='transparent'
    strokeWidth='4'
    stroke='#fff'
    strokeLinecap='round'
    {...props}
  />
);

export const MenuToggle = ({ toggle, isOpen }) => (
  <MenuIcon
    onClick={toggle}
    style={
      isOpen ? { background: `${COLORS.primary}` } : { background: `${COLORS.bodyDark}` }
    }
  >
    <svg viewBox='0 0 23 23'>
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d='M 2 9.423 L 20 9.423'
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </MenuIcon>
);

const MenuIcon = styled.button`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: fixed;
  top: 1.5rem;
  left: 0rem;
  width: 6rem;
  height: 5.5rem;
  border-radius: 50%;
  background: transparent;
  z-index: 500;
  ${respondTo.iPro` 
  left: 1%;
     `}

  ${respondTo.pMobile` 
    top: 1.5rem;
  left: 1rem;
  position : fixed;
     width: 10%;
     height: 8rem;

     right: 0;
    margin: 0rem .5rem;
     
    background: ${COLORS.bodyDark};
     `}
         @media only screen and (max-width: 450px) {
    width: 14%;
    height: 7rem;
  }

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  :hover {
    background: ${COLORS.primary};
  }
  svg {
    position: relative;
    top: 0.2rem;
    flex: 1;
    width: 20rem;
    height: 20rem;
  }
`;
