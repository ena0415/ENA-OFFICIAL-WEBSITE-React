import React from 'react'

import PropTypes from 'prop-types'

import './small-button1.css'

const SmallButton1 = (props) => {
  return (
    <div className={`small-button1-container ${props.rootClassName} `}>
      <a
        href={props.link_text}
        target="_blank"
        rel="noreferrer noopener"
        className="small-button1-link Button"
      >
        {props.text}
      </a>
    </div>
  )
}

SmallButton1.defaultProps = {
  rootClassName: '',
  text: 'Listen',
  link_text: 'https://google.com',
}

SmallButton1.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  link_text: PropTypes.string,
}

export default SmallButton1
