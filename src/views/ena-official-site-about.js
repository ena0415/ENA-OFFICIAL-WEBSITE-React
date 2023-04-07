import React from 'react'

import { Helmet } from 'react-helmet'

import './ena-official-site-about.css'

const ENAOFFICIALSITEAbout = (props) => {
  return (
    <div className="enaofficialsit-about-container">
      <Helmet>
        <title>ENA-OFFICIAL-SITE-about - ENA OFFICIAL WEBSITE</title>
        <meta
          name="description"
          content="歌手ボーカルコーラスENA、作詞家ENA☆について紹介"
        />
        <meta
          property="og:title"
          content="ENA-OFFICIAL-SITE-about - ENA OFFICIAL WEBSITE"
        />
        <meta
          property="og:description"
          content="歌手ボーカルコーラスENA、作詞家ENA☆について紹介"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/5b42fbbc-0488-4237-b648-f63f8835f207/d1f84b43-563d-4e28-b67c-9b516cfae141?org_if_sml=1"
        />
      </Helmet>
      <div className="enaofficialsit-about-testimonial">
        <img
          alt="image"
          src="/playground_assets/about-200h.png"
          className="enaofficialsit-about-image"
        />
        <div className="enaofficialsit-about-container1">
          <span className="enaofficialsit-about-text">
            <br></br>
            <br></br>
            <br></br>
            <span>4月15日生まれ　A型</span>
            <br></br>
            <span>幼少の頃からピアノを学び、国立音楽大学附属高校へ進学。</span>
            <br></br>
            <span>ピアノと声楽を学んだ後、一般企業へ就職。</span>
            <span>約6年間社会人を経験し、再び音楽の世界へ。</span>
            <br></br>
            <span>2007年「未来の物語」で作詞家デビュー、</span>
            <br></br>
            <span>2009年クイーンズブレイド玉座を継ぐ者</span>
            <span>の主題歌「墜ちない空」で歌手デビュー。</span>
            <br></br>
            <span>2015年より山下達郎バンドのコーラスとして全国ツアーを</span>
            <span>回りながら</span>
            <br></br>
            <span>ボーカリスト、作詞家、ボイストレーナーとして活動中。</span>
            <br></br>
            <br></br>
            <br></br>
            <span className="enaofficialsit-about-text23">♩使用機材</span>
            <br className="enaofficialsit-about-text24"></br>
            <span className="enaofficialsit-about-text25">
              Cubase12 pro　/　YAMAHAウッディミニ0.5畳　/　RME　FireFace400
            </span>
            <br className="enaofficialsit-about-text26"></br>
            <span className="enaofficialsit-about-text27">
              Audio Technica AT5040　/　RUPERT NEVE DESIGNS　Portico5015
            </span>
            <br></br>
            <br></br>
          </span>
        </div>
        <img
          alt="image"
          src="/playground_assets/%E3%83%AD%E3%82%B3%E3%82%99%E9%BB%92-1300h.png"
          className="enaofficialsit-about-image1"
        />
      </div>
    </div>
  )
}

export default ENAOFFICIALSITEAbout
