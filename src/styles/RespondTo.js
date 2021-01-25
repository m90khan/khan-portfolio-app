import { css } from 'styled-components';

// const breakpoints = {
//   xs: '30em',
//   sm: '48em',
//   md: '62em',
//   lg: '75em',
//   xl: '87.5em',
// };
const breakpoints = {
  pMobile: '600px',
  iPad: '768px',
  iPro: '1024px',
  L: '1366px',
  xD: '1600px',
  xxD: '1920px',
};
export const respondTo = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media only screen and (max-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
