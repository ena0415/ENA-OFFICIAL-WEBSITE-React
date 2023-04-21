import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './ena-official-site-about.css'

const ENAOFFICIALSITEAbout = (props) => {
  return (
    <div className="enaofficialsit-about-container">
      <Helmet>
        <title>ENA-OFFICIAL-SITE-about - ENA OFFICIAL WEBSITE</title>
        <meta
          name="description"
          content="歌手 ボーカル コーラス ENA・作詞家 ENA☆ のホームページ"
        />
        <meta
          property="og:title"
          content="ENA-OFFICIAL-SITE-about - ENA OFFICIAL WEBSITE"
        />
        <meta
          property="og:description"
          content="歌手 ボーカル コーラス ENA・作詞家 ENA☆ のホームページ"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/5b42fbbc-0488-4237-b648-f63f8835f207/d1f84b43-563d-4e28-b67c-9b516cfae141?org_if_sml=1"
        />
      </Helmet>
      <header data-role="Header" className="enaofficialsit-about-header">
        <Link to="/" className="enaofficialsit-about-navlink">
          <img
            alt="logo"
            src="/playground_assets/white%20pink%20minimalist%20podcast%20logo-2-200h.png"
            className="enaofficialsit-about-image"
          />
        </Link>
        <div className="enaofficialsit-about-container1">
          <div className="enaofficialsit-about-container2">
            <div className="enaofficialsit-about-nav">
              <NavigationLinks rootClassName="rootClassName11"></NavigationLinks>
            </div>
          </div>
        </div>
        <div
          data-role="BurgerMenu"
          className="enaofficialsit-about-burger-menu"
        >
          <svg viewBox="0 0 1024 1024" className="enaofficialsit-about-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-role="MobileMenu"
          className="enaofficialsit-about-mobile-menu"
        >
          <div className="enaofficialsit-about-nav1">
            <div className="enaofficialsit-about-container3">
              <div
                data-role="CloseMobileMenu"
                className="enaofficialsit-about-close-mobile-menu"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="enaofficialsit-about-icon2"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName10"></NavigationLinks>
          </div>
        </div>
      </header>
      <img
        alt="image"
        src="/playground_assets/about-200h.png"
        className="enaofficialsit-about-image1"
      />
      <img
        alt="image"
        src="/playground_assets/%E5%90%8D%E7%A7%B0%E6%9C%AA%E8%A8%AD%E5%AE%9A%E3%81%AE%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3-500h.png"
        className="enaofficialsit-about-image2"
      />
      <div className="enaofficialsit-about-container4">
        <span className="enaofficialsit-about-text">
          <span className="enaofficialsit-about-text01">
            4月15日生まれ、A型。
          </span>
          <br className="enaofficialsit-about-text02"></br>
          <span className="enaofficialsit-about-text03">
            幼い頃からピアノを学び国立音楽大学附属高校へ進学。
          </span>
          <br className="enaofficialsit-about-text04"></br>
          <span className="enaofficialsit-about-text05">
            ピアノと声楽を学んだ後一般企業へ就職。
          </span>
          <br className="enaofficialsit-about-text06"></br>
          <span className="enaofficialsit-about-text07">
            約6年間社会人を経験し、再び音楽の世界へ。
          </span>
          <br className="enaofficialsit-about-text08"></br>
          <span className="enaofficialsit-about-text09">
            2007年「未来の物語」で作詞家デビュー、
          </span>
          <br className="enaofficialsit-about-text10"></br>
          <span className="enaofficialsit-about-text11">
            2009年クイーンズブレイド玉座を継ぐ者
          </span>
          <span className="enaofficialsit-about-text12">
            の主題歌「墜ちない空」で歌手デビュー。
          </span>
          <br className="enaofficialsit-about-text13"></br>
          <span className="enaofficialsit-about-text14">
            2015年より山下達郎バンドのコーラスとして全国ツアーを
          </span>
          <span className="enaofficialsit-about-text15">回りながら</span>
          <span className="enaofficialsit-about-text16">
            ボーカリスト、作詞家（ENA☆）、トレーナーとして活動中。
          </span>
          <br className="enaofficialsit-about-text17"></br>
          <br className="enaofficialsit-about-text18"></br>
          <br className="enaofficialsit-about-text19"></br>
          <span className="enaofficialsit-about-text20">♩使用機材</span>
          <br className="enaofficialsit-about-text21"></br>
          <span className="enaofficialsit-about-text22">　Cubase12 pro</span>
          <br className="enaofficialsit-about-text23"></br>
          <span className="enaofficialsit-about-text24">
            　RME　FireFace400
          </span>
          <br className="enaofficialsit-about-text25"></br>
          <span className="enaofficialsit-about-text26">
            　Audio Technica AT5040
          </span>
          <br className="enaofficialsit-about-text27"></br>
          <span className="enaofficialsit-about-text28">
            　RUPERT NEVE DESIGNS　Portico5015
          </span>
          <br className="enaofficialsit-about-text29"></br>
          <span className="enaofficialsit-about-text30">
            　YAMAHAウッディミニ0.5畳
          </span>
          <br className="enaofficialsit-about-text31"></br>
          <br className="enaofficialsit-about-text32"></br>
        </span>
      </div>
      <footer className="enaofficialsit-about-footer">
        <span className="enaofficialsit-about-text33">
          <span className="enaofficialsit-about-text34">2023　©　ENA</span>
          <br></br>
        </span>
      </footer>
    </div>
  )
}

export default ENAOFFICIALSITEAbout
