import React from 'react';

import './style.css';

const LinkButton = ({ children, ...rest }) => {
  return (
    <a className='myButton' target='_blank' {...rest}>
      {children}
    </a>
  );
};

export default LinkButton;
