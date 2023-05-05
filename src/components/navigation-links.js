import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link
        to="/ena-official-web-site-about"
        className="navigation-links-navlink"
      >
        {props.text}
      </Link>
      <Link
        to="/ena-official-web-site-news"
        className="navigation-links-navlink1"
      >
        {props.text1}
      </Link>
      <Link
        to="/ena-official-web-site-works"
        className="navigation-links-navlink2"
      >
        {props.text2}
      </Link>
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
