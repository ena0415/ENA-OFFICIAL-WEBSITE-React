import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './ena-official-web-site.css'

const ENAOFFICIALWEBSITE = (props) => {
  return (
    <div className="enaofficialwebsite-container">
      <Helmet>
        <title>ENA OFFICIAL WEB SITE</title>
        <meta
          name="description"
          content="歌手 ボーカル コーラス ENA・作詞家 ENA☆ のホームページ"
        />
        <meta property="og:title" content="ENA OFFICIAL WEB SITE" />
        <meta
          property="og:description"
          content="歌手 ボーカル コーラス ENA・作詞家 ENA☆ のホームページ"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/5b42fbbc-0488-4237-b648-f63f8835f207/319e0057-93f7-458c-b117-f148b82e4b8c?org_if_sml=1"
        />
      </Helmet>
      <header data-role="Header" className="enaofficialwebsite-header">
        <Link to="/" className="enaofficialwebsite-navlink">
          <img
            alt="logo"
            src="/playground_assets/white%20pink%20minimalist%20podcast%20logo-2-200h.png"
            className="enaofficialwebsite-image"
          />
        </Link>
        <div className="enaofficialwebsite-container1">
          <div className="enaofficialwebsite-container2">
            <div className="enaofficialwebsite-nav">
              <NavigationLinks rootClassName="rootClassName17"></NavigationLinks>
            </div>
          </div>
        </div>
        <div data-role="BurgerMenu" className="enaofficialwebsite-burger-menu">
          <svg viewBox="0 0 1024 1024" className="enaofficialwebsite-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="enaofficialwebsite-mobile-menu">
          <div className="enaofficialwebsite-nav1">
            <div className="enaofficialwebsite-container3">
              <div
                data-role="CloseMobileMenu"
                className="enaofficialwebsite-close-mobile-menu"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="enaofficialwebsite-icon2"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName18"></NavigationLinks>
          </div>
        </div>
      </header>
      <div className="enaofficialwebsite-hero">
        <img
          alt="image"
          src="/playground_assets/ena%20official%20site-2-1500h.png"
          className="enaofficialwebsite-image1"
        />
      </div>
      <footer className="enaofficialwebsite-footer">
        <span className="enaofficialwebsite-text">
          <span className="enaofficialwebsite-text1">2023　©　ENA</span>
          <br></br>
        </span>
      </footer>
    </div>
  )
}

export default ENAOFFICIALWEBSITE
