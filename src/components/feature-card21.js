import React from 'react'

import PropTypes from 'prop-types'

import './feature-card21.css'

const FeatureCard21 = (props) => {
  return (
    <div className={`feature-card21-feature-card ${props.rootClassName} `}>
      <div className="feature-card21-container">
        <div className="feature-card21-container1">
          <div className="feature-card21-container2">
            <svg viewBox="0 0 1024 1024" className="feature-card21-icon">
              <path
                d="M512 128h256v170h-170v428q0 70-51 120t-121 50-120-50-50-120 50-121 120-51q42 0 86 24v-450z"
                className=""
              ></path>
            </svg>
          </div>
          <div className="feature-card21-container3">
            <div className="feature-card21-container4">
              <h3 className="feature-card21-text Heading3">{props.title}</h3>
              <span className="feature-card21-text1">{props.artist}</span>
              <span className="feature-card21-text2">{props.year}</span>
            </div>
            <span className="feature-card21-text3">{props.description}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

FeatureCard21.defaultProps = {
  artist: 'Name',
  link_text: 'https://google.com',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.',
  text: 'Listen',
  title: 'Lorem ipsum',
  year: '2020',
  rootClassName: '',
}

FeatureCard21.propTypes = {
  artist: PropTypes.string,
  link_text: PropTypes.string,
  description: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FeatureCard21
