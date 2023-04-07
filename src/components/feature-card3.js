import React from 'react'

import PropTypes from 'prop-types'

import './feature-card3.css'

const FeatureCard3 = (props) => {
  return (
    <div className={`feature-card3-feature-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card3-image"
      />
      <h3 className="feature-card3-text Heading3">{props.title}</h3>
      <span className="feature-card3-text1">{props.description}</span>
      <span className="feature-card3-text2">{props.description1}</span>
      <div className="feature-card3-container">
        <a
          href={props.link_text}
          target="_blank"
          rel="noreferrer noopener"
          className="feature-card3-link Button"
        >
          {props.text}
        </a>
      </div>
    </div>
  )
}

FeatureCard3.defaultProps = {
  description: '2020',
  description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  rootClassName: '',
  image_alt: 'image',
  text: 'Listen',
  link_text: 'https://google.com',
  title: 'Title Goes Here',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

FeatureCard3.propTypes = {
  description: PropTypes.string,
  description1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  link_text: PropTypes.string,
  title: PropTypes.string,
  image_src: PropTypes.string,
}

export default FeatureCard3
