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
  title: 'Khan Mohsin | Full Stack Web Developer',
  description: 'Full Stack portfolio website to display projects',
  keywords: 'MERN, TypeScript, JavaScript, GraphQl, React, Redux',
};

export default Meta;
