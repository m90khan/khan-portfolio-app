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
const itemIds = [0, 1, 2, 3, 4, 5];

export const NavItem = () => (
  <List variants={variants}>
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))}
  </List>
);

const List = styled(motion.ul)`
  padding: 25px;
  position: absolute;
  top: 100px;
  width: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
