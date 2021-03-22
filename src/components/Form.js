import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles/Theme';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const { register, handleSubmit, watch, errors } = useForm();
  const sendEmail = (data) => {
    axios({
      method: 'POST',
      url: `https://speckled-experienced-sand.glitch.me/send-email`,
      data: data,
    })
      .then(({ data }) => {
        if (data) {
          console.log('form submitted');
          setText(data);
        }
      })
      .catch((error) => {
        console.log(error);
        setText(error.message);
      });
  };
  const submitHandler = (data) => {
    sendEmail(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)} methid>
        <Row>
          <div className='form-field'>
            <h4>Your Name</h4>
            <input
              type='text'
              placeholder='Enter name'
              name='name'
              ref={register({ required: true, minLength: 2 })}
              // onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p>Name is required.</p>}
            {errors.name && errors.name.type === 'minLength' && (
              <p>Name should be greater than 2 letters.</p>
            )}
          </div>
          <div className='form-field'>
            <h4>Your Email</h4>
            <input
              type='email'
              placeholder='Enter email'
              name='email'
              ref={register({
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email && <p>Email is required.</p>}
          </div>
        </Row>
        <Row>
          <div className='form-field form-field-text'>
            <h4>Message</h4>
            <textarea
              type='text'
              placeholder='Enter Message'
              name='message'
              ref={register({ required: true, minLength: 80 })}
            />
            {errors.message && <p>Please write something ...</p>}
            {errors.name && errors.name.type === 'minLength' && (
              <p>Message should not be less than 80 letters.</p>
            )}
          </div>
        </Row>
        <Button type='submit'>Send Message</Button>
      </form>
      {text && <p style={{ color: COLORS.secondary }}>{text}</p>}
      <br />
      <h4
        className='job'
        style={{
          border: `2px solid ${COLORS.primary}`,
          marginTop: '4rem',
          display: 'block',
        }}
      >
        <p> or send me an email at</p>uxdkhan@gmail.com
      </h4>
    </>
  );
};

const Button = styled(motion.button)`
  border: 2px solid ${COLORS.secondary};
  display: inline-block;
`;

const Row = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  .form-field {
    flex: 0 0 50%;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    p {
      color: #fd3333 !important;
    }
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
