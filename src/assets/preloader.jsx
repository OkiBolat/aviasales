import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={505}
    height={184}
    viewBox="0 0 505 200"
    backgroundColor="#e0e0e0"
    foregroundColor="#ecebeb"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    <rect x="0" y="10" rx="13" ry="13" width="505" height="184" />
  </ContentLoader>
);

export default MyLoader;
