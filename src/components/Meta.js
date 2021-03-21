import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Khan Mohsin | Full Stack Developer Portfolio',
  description: 'Full Stack developer portfolio website to represent work',
  keywords: 'MERN, TypeScript, JavaScript, GraphQl, Apollo, React Native, React, Redux',
};

export default Meta;
