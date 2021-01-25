import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#D309E1'];

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <Item variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      {/* <div className='icon-placeholder' style={style}></div> */}
      <div className='text-placeholder' style={style}>
        <p>Home</p>
      </div>
    </Item>
  );
};

const Item = styled(motion.li)`
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  /* .icon-placeholder {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    flex: 20px 0;
    margin-right: 20px;
  } */

  .text-placeholder {
    flex: 0 0 15%;
    width: 10rem;
    border-radius: 5px;
  }
`;
