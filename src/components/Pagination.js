import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles/Theme';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Nav>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <p
              onClick={() => paginate(number)}
              className='page-link'
              style={number === currentPage ? { background: `${COLORS.primary}` } : {}}
            >
              {number}
            </p>
          </li>
        ))}
      </ul>
    </Nav>
  );
};

const Nav = styled(motion.nav)`
  ul {
    display: flex;
    justify-content: flex-end;
    li {
      list-style: none;

      p {
        background: ${COLORS.bodyDark};
        color: ${COLORS.white};
        cursor: pointer;
        padding: 0.5rem 1rem;
        margin-right: 0.5rem;

        &:hover {
          background: ${COLORS.secondary};
          color: ${COLORS.bodyDark};
        }
      }
    }
  }
`;
export default Pagination;
