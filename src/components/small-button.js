import React from 'react'

import PropTypes from 'prop-types'

import './small-button.css'

const SmallButton = (props) => {
  return (
    <div className={`small-button-container ${props.rootClassName} `}>
      <a
        href={props.link_text}
        target="_blank"
        rel="noreferrer noopener"
        className="small-button-link Button"
      >
        {props.text}
      </a>
    </div>
  )
}

SmallButton.defaultProps = {
  rootClassName: '',
  text: 'Listen',
  link_text: 'https://google.com',
}

SmallButton.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  link_text: PropTypes.string,
}

export default SmallButton
