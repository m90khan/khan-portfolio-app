import { css } from 'styled-components';

// const breakpoints = {
//   xs: '30em',
//   sm: '48em',
//   md: '62em',
//   lg: '75em',
//   xl: '87.5em',
// };
const breakpoints = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1400px',
};
export const respondTo = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
