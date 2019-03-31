/**
 *  Link is a link with a callback.
    onClick() is a callback to invoke when the link is clicked.
 */

import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ children, onClick, active }) => {
  if (active) {
    return (<span>{children}</span>)
  }
  
  return (
    <a
      href=" "
      onClick={e => {
        e.preventDefault();
        onClick();
      }
      }
    >
      {children}
    </a>
  )
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Link