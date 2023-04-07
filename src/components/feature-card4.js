import React from 'react'

import PropTypes from 'prop-types'

import './feature-card4.css'

const FeatureCard4 = (props) => {
  return (
    <div className="feature-card4-feature-card">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card4-image"
      />
      <h3 className="feature-card4-text Heading3">{props.title}</h3>
      <span className="feature-card4-text1">{props.description}</span>
      <span className="feature-card4-text2">{props.description1}</span>
      <div className="feature-card4-container">
        <a
          href={props.link_text}
          target="_blank"
          rel="noreferrer noopener"
          className="feature-card4-link Button"
        >
          {props.text}
        </a>
      </div>
    </div>
  )
}

FeatureCard4.defaultProps = {
  link_text: 'https://google.com',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  title: 'Title Goes Here',
  image_alt: 'image',
  text: 'Listen',
  description: '2020',
  description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
}

FeatureCard4.propTypes = {
  link_text: PropTypes.string,
  image_src: PropTypes.string,
  title: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  description: PropTypes.string,
  description1: PropTypes.string,
}

export default FeatureCard4
