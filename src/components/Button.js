import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ title, icon, link, target }) => {
  return (
    <Link to={link} target={target && target}>
      <div className='resume'>
        <img src={icon} alt='button' />
        <h4 style={{ display: 'inline-block', fontSize: '1.5rem' }}>{title}</h4>
      </div>
    </Link>
  );
};

export default Button;
