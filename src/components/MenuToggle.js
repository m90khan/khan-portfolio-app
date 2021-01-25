import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { COLORS } from '../styles/Theme';

const Path = (props) => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='#fff'
    strokeLinecap='round'
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (
  <MenuIcon onClick={toggle}>
    <svg width='30' height='25' viewBox='0 0 23 23'>
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
  position: absolute;
  top: 1rem;
  right: 0.8rem;
  width: 3%;
  /* height: 5rem; */
  border-radius: 50%;
  border: 1px solid ${COLORS.primary};
  background: ${COLORS.bodyLight};
  padding: 1rem 0rem;
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
  }
`;
