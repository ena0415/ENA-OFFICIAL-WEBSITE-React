import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './ena-official-site.css'

const ENAOFFICIALSITE = (props) => {
  return (
    <div className="enaofficialsite-container">
      <Helmet>
        <title>ENA OFFICIAL SITE</title>
        <meta
          name="description"
          content="歌手 ボーカル コーラス ENA・作詞家 ENA☆ のホームページ"
        />
        <meta property="og:title" content="ENA OFFICIAL SITE" />
        <meta
          property="og:description"
          content="歌手 ボーカル コーラス ENA・作詞家 ENA☆ のホームページ"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/5b42fbbc-0488-4237-b648-f63f8835f207/319e0057-93f7-458c-b117-f148b82e4b8c?org_if_sml=1"
        />
      </Helmet>
      <header data-role="Header" className="enaofficialsite-header">
        <img
          alt="logo"
          src="/playground_assets/white%20pink%20minimalist%20podcast%20logo-2-200h.png"
          className="enaofficialsite-image"
        />
        <div className="enaofficialsite-container1">
          <div className="enaofficialsite-container2">
            <div className="enaofficialsite-nav">
              <NavigationLinks rootClassName="rootClassName17"></NavigationLinks>
            </div>
          </div>
        </div>
        <div data-role="BurgerMenu" className="enaofficialsite-burger-menu">
          <svg viewBox="0 0 1024 1024" className="enaofficialsite-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="enaofficialsite-mobile-menu">
          <div className="enaofficialsite-nav1">
            <div className="enaofficialsite-container3">
              <div
                data-role="CloseMobileMenu"
                className="enaofficialsite-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="enaofficialsite-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName18"></NavigationLinks>
          </div>
        </div>
      </header>
      <div className="enaofficialsite-hero">
        <img
          alt="image"
          src="/playground_assets/ena%20official%20site-2-1500h.png"
          className="enaofficialsite-image1"
        />
      </div>
      <footer className="enaofficialsite-footer">
        <span className="enaofficialsite-text">
          <span className="enaofficialsite-text1">2023　©　ENA</span>
          <br></br>
        </span>
      </footer>
    </div>
  )
}

export default ENAOFFICIALSITE
