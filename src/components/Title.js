
import React from 'react';
import PropTypes from 'prop-types';

const Title = ({title, git}) => {
  return (
    <div className="text-center">
      <h1>
        {title}
      </h1>
      <h5>
        <a href={git.url}>
          {git.title}
        </a>
      </h5>
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  git: PropTypes.objectOf({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })
}

export default Title