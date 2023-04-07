import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text">{props.text}</span>
      <span className="navigation-links-text1">{props.text1}</span>
      <span className="navigation-links-text2">{props.text2}</span>
      <a
        href="https://sgfm.jp/f/enacontact0415"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link"
      >
        {props.text3}
      </a>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text2: 'Works',
  text3: 'Contact',
  text1: 'News',
  text: 'About',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  text2: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
