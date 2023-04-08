import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

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
      <img
        src="/playground_assets/about-200h.png"
        alt="image"
        className="enaofficialsit-about-image"
      />
      <img
        alt="image"
        src="/playground_assets/%E5%90%8D%E7%A7%B0%E6%9C%AA%E8%A8%AD%E5%AE%9A%E3%81%AE%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3-500h.png"
        className="enaofficialsit-about-image1"
      />
      <div className="enaofficialsit-about-container1">
        <span className="enaofficialsit-about-text">
          <span className="enaofficialsit-about-text01">
            4月15日生まれ　A型
          </span>
          <br className="enaofficialsit-about-text02"></br>
          <span className="enaofficialsit-about-text03">
            幼少の頃からピアノを学び、国立音楽大学附属高校へ進学。
          </span>
          <br className="enaofficialsit-about-text04"></br>
          <span className="enaofficialsit-about-text05">
            ピアノと声楽を学んだ後、一般企業へ就職。
          </span>
          <span className="enaofficialsit-about-text06">
            約6年間社会人を経験し、再び音楽の世界へ。
          </span>
          <br className="enaofficialsit-about-text07"></br>
          <span className="enaofficialsit-about-text08">
            2007年「未来の物語」で作詞家デビュー、
          </span>
          <br className="enaofficialsit-about-text09"></br>
          <span className="enaofficialsit-about-text10">
            2009年クイーンズブレイド玉座を継ぐ者
          </span>
          <span className="enaofficialsit-about-text11">
            の主題歌「墜ちない空」で歌手デビュー。
          </span>
          <br className="enaofficialsit-about-text12"></br>
          <span className="enaofficialsit-about-text13">
            2015年より山下達郎バンドのコーラスとして全国ツアーを
          </span>
          <span className="enaofficialsit-about-text14">回りながら</span>
          <br className="enaofficialsit-about-text15"></br>
          <span className="enaofficialsit-about-text16">
            ボーカリスト、作詞家、トレーナーとして活動中。
          </span>
          <br className="enaofficialsit-about-text17"></br>
          <br className="enaofficialsit-about-text18"></br>
          <br className="enaofficialsit-about-text19"></br>
          <span className="enaofficialsit-about-text20">♩使用機材</span>
          <br className="enaofficialsit-about-text21"></br>
          <span className="enaofficialsit-about-text22">
            Cubase12 pro　/　YAMAHAウッディミニ0.5畳　/　RME　FireFace400
          </span>
          <br className="enaofficialsit-about-text23"></br>
          <span className="enaofficialsit-about-text24">
            Audio Technica AT5040　/　RUPERT NEVE DESIGNS　Portico5015
          </span>
          <br className="enaofficialsit-about-text25"></br>
          <br className="enaofficialsit-about-text26"></br>
        </span>
      </div>
      <Link to="/" className="enaofficialsit-about-navlink">
        <img
          alt="image"
          src="/playground_assets/%E3%83%AD%E3%82%B3%E3%82%99%E9%BB%92-200h.png"
          className="enaofficialsit-about-image2"
        />
      </Link>
    </div>
  )
}

export default ENAOFFICIALSITEAbout
