import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles/Theme';
import { motion } from 'framer-motion';
const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, text);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <Row>
          <div className='form-field'>
            <h4 na>Your Name</h4>
            <input
              type='text'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-field'>
            <h4>Your Email</h4>
            <input
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </Row>
        <Row>
          <div className='form-field form-field-text'>
            <h4>Message</h4>
            <textarea
              type='text'
              placeholder='Enter Message'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </Row>
        <Button type='submit'>Send Message</Button>
      </form>
      <br />
      <h4
        className='job'
        style={{
          border: `2px solid ${COLORS.primary}`,
          marginTop: '4rem',
          display: 'block',
        }}
      >
        <p> or send me an email at</p>m90khan@gmail.com
      </h4>
    </>
  );
};

const Button = styled(motion.button)`
  border: 2px solid ${COLORS.secondary};
  display: inline-block;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  .form-field {
    flex: 0 0 50%;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .form-field-text {
    flex: 0 0 100%;
  }
  h4 {
    font-size: 2rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 1.5rem 2rem;
    margin: 8px 0;
    display: inline-block;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: #0e131c;
    border: none;
    color: #fff;
    font-weight: normal;
    font-size: 2rem;
  }
  input::placeholder,
  textarea::placeholder {
    color: ${COLORS.textgrey};
    letter-spacing: -1px;
  }
`;

export default Form;
