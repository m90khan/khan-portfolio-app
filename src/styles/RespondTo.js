import { css } from 'styled-components';

// const breakpoints = {
//   mobile: '37.5em',
//   ipad: '48em',
//   ipadPro: '64em',
//   Laptop: '85.5em',
//   Desktop: '100em',
//   BigDesktop: '120em',
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
