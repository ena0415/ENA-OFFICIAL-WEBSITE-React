import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FeatureCard4 from '../components/feature-card4'
import FeatureCard3 from '../components/feature-card3'
import './ena-official-site-news.css'

const ENAOFFICIALSITENews = (props) => {
  return (
    <div className="enaofficialsit-news-container">
      <Helmet>
        <title>ENA-OFFICIAL-SITE-news - ENA OFFICIAL WEBSITE</title>
        <meta
          name="description"
          content="歌手ボーカルコーラスENA、作詞家ENA☆について紹介"
        />
        <meta
          property="og:title"
          content="ENA-OFFICIAL-SITE-news - ENA OFFICIAL WEBSITE"
        />
        <meta
          property="og:description"
          content="歌手ボーカルコーラスENA、作詞家ENA☆について紹介"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/5b42fbbc-0488-4237-b648-f63f8835f207/94c58585-6fa6-44b7-913a-47252dc461ca?org_if_sml=1"
        />
      </Helmet>
      <ul className="list">
        <li className="list-item"></li>
      </ul>
      <img
        alt="image"
        src="/playground_assets/news-200h.png"
        className="enaofficialsit-news-image"
      />
      <FeatureCard4
        text="Official Site"
        title="山下達郎 PERFORMANCE2023"
        image_src="/playground_assets/tatsuro2-200h.png"
        link_text="https://www.tatsuro.co.jp/live/"
        description="2023.4.2"
        description1="山下達郎全国ホール・ツアーに参加いたします。 夏から秋にかけて、18都市39公演のツアーです。"
      ></FeatureCard4>
      <FeatureCard3
        text="Listen"
        title="TVアニメ『うる星やつら』オリジナル・サウンドトラック"
        image_src="/playground_assets/670-200h.jpg"
        link_text="https://www.amazon.co.jp/TV-アニメ『うる星やつら』オリジナル・サウンドトラック-横山-克/dp/B0BS3D3C7S"
        description="2023.3.1"
        description1="2022年10月より放送開始されたTVアニメ『うる星やつら』のオリジナル・サウンドトラック　数曲コーラス参加"
        rootClassName="rootClassName8"
      ></FeatureCard3>
      <FeatureCard3
        text="Listen"
        title="今さら I want you"
        image_src="/playground_assets/mizuiro_to_sorairo_350-260x260-200h.jpg"
        link_text="https://www.youtube.com/watch?v=PTTVKQCDh3s"
        description="2022.11.2"
        description1="アルバム「水色と空色」収録　ハルナ・ENA・三谷泰弘でコーラス参加"
        rootClassName="rootClassName"
      ></FeatureCard3>
      <FeatureCard3
        text="Listen"
        title="TBS系 日曜劇場 オールドルーキー オリジナル・サウンドトラック"
        image_src="/playground_assets/509-200h.jpg"
        link_text="https://mora.jp/package/43000042/NL-1585high/?trackMaterialNo=21878499"
        description="2022.8.24"
        description1="オールドルーキー -Main Theme-　コーラス参加"
        rootClassName="rootClassName9"
      ></FeatureCard3>
      <FeatureCard3
        text="Listen"
        title="夜は空いてる"
        image_src="/playground_assets/white%20pink%20minimalist%20podcast%20logo-2-200h.png"
        link_text="https://www.uta-net.com/song/316605/"
        description="2022.3.29"
        description1="KAT-TUN　アルバム「HONEY」　M12亀梨和也ソロ曲　コーラス参加"
        rootClassName="rootClassName10"
      ></FeatureCard3>
      <FeatureCard3
        text="Listen"
        title="真昼、空にオリオン"
        image_src="/playground_assets/%E3%82%8A%E3%81%B5%E3%82%99%E3%82%89-200h.png"
        link_text="https://www.youtube.com/watch?v=K72uPVLDxcI"
        description="2021.11.11"
        description1="スマホ向けRPGゲーム　メメントモリ　リブラ　キャラクターソング歌唱"
        rootClassName="rootClassName11"
      ></FeatureCard3>
      <Link to="/" className="enaofficialsit-news-navlink">
        <img
          alt="image"
          src="/playground_assets/%E3%83%AD%E3%82%B3%E3%82%99%E9%BB%92-200h.png"
          className="enaofficialsit-news-image1"
        />
      </Link>
    </div>
  )
}

export default ENAOFFICIALSITENews
