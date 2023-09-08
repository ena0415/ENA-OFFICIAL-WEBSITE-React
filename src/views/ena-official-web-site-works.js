import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FeatureCard2 from '../components/feature-card2'
import FeatureCard21 from '../components/feature-card21'
import './ena-official-web-site-works.css'

const ENAOFFICIALWEBSITEWorks = (props) => {
  return (
    <div className="enaofficialwebsite-works-container">
      <Helmet>
        <title>ENA-OFFICIAL-WEB-SITE-works - ENA OFFICIAL WEBSITE</title>
        <meta
          name="description"
          content="歌手 ボーカル コーラス ENA・作詞家 ENA☆ のホームページ"
        />
        <meta
          property="og:title"
          content="ENA-OFFICIAL-WEB-SITE-works - ENA OFFICIAL WEBSITE"
        />
        <meta
          property="og:description"
          content="歌手 ボーカル コーラス ENA・作詞家 ENA☆ のホームページ"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/5b42fbbc-0488-4237-b648-f63f8835f207/2dbca4f9-50b5-46c7-93d6-10becb8c4006?org_if_sml=1"
        />
      </Helmet>
      <header data-role="Header" className="enaofficialwebsite-works-header">
        <Link to="/" className="enaofficialwebsite-works-navlink">
          <img
            alt="logo"
            src="/white%20pink%20minimalist%20podcast%20logo-2-200h.png"
            className="enaofficialwebsite-works-image"
          />
        </Link>
        <div className="enaofficialwebsite-works-container1">
          <div className="enaofficialwebsite-works-container2">
            <div className="enaofficialwebsite-works-nav">
              <NavigationLinks rootClassName="rootClassName21"></NavigationLinks>
            </div>
          </div>
        </div>
        <div
          data-role="BurgerMenu"
          className="enaofficialwebsite-works-burger-menu"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="enaofficialwebsite-works-icon"
          >
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-role="MobileMenu"
          className="enaofficialwebsite-works-mobile-menu"
        >
          <div className="enaofficialwebsite-works-nav1">
            <div className="enaofficialwebsite-works-container3">
              <div
                data-role="CloseMobileMenu"
                className="enaofficialwebsite-works-close-mobile-menu"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="enaofficialwebsite-works-icon2"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName20"></NavigationLinks>
          </div>
        </div>
      </header>
      <img
        alt="image"
        src="/works-200h.png"
        className="enaofficialwebsite-works-image1"
      />
      <label className="enaofficialwebsite-works-text">
        <br></br>
        <span>メインボーカル</span>
        <br></br>
        <br></br>
      </label>
      <FeatureCard2
        year="2009"
        title="墜ちない空"
        artist="ENA"
        link_text="https://recochoku.jp/song/S1003339386/"
        description="テレビアニメ　クイーンズブレイド玉座を継ぐ者OP主題歌"
        rootClassName="rootClassName1"
      ></FeatureCard2>
      <FeatureCard2
        year="2011"
        title="幸せな結末"
        artist="ANAN RYOKO × ENA"
        link_text="https://recochoku.jp/song/S21216661/single"
        description="Dramatic Life 2 / Dramatic Crew (フジテレビの主題歌を集めたカヴァーアルバム)"
        rootClassName="rootClassName5"
      ></FeatureCard2>
      <FeatureCard2
        year="2012"
        title="THE・文学少女"
        artist="ENA"
        link_text="https://www.animate-onlineshop.jp/products/detail.php?product_id=1151822"
        description="テレビアニメ　男子高校生の日常　第一話ED曲　サウンドトラックM21"
        rootClassName="rootClassName6"
      ></FeatureCard2>
      <FeatureCard2
        year="2012"
        title="Take your dreams feat.ENA"
        artist="ENA"
        link_text="https://recochoku.jp/song/S22081048?affiliate=4410101074"
        description="フジテレビ系 　ミス・パイロット　 サウンド・トラック収録"
        rootClassName="rootClassName7"
      ></FeatureCard2>
      <FeatureCard2
        year="2014"
        title="My Truth〜ロンド・カプリチオーソ〜"
        artist="ENA"
        link_text="https://recochoku.jp/song/S1001196323/single?ds=1001577950"
        description="テレビアニメ　四月は君の嘘 ORIGINAL SONG &amp; SOUNDTRACK"
        rootClassName="rootClassName8"
      ></FeatureCard2>
      <FeatureCard2
        year="2014"
        title="For you〜月の光が降り注ぐテラス〜"
        artist="ENA"
        link_text="https://recochoku.jp/song/S1001196308/single?ds=1001577950"
        description="テレビアニメ　四月は君の嘘 ORIGINAL SONG &amp; SOUNDTRACK"
        rootClassName="rootClassName9"
      ></FeatureCard2>
      <FeatureCard2
        year="2014"
        title="Have a strong will～木枯らし"
        artist="ENA"
        link_text="https://recochoku.jp/song/S1001196332/single?ds=1001577950"
        description="テレビアニメ　四月は君の嘘 ORIGINAL SONG &amp; SOUNDTRACK"
        rootClassName="rootClassName10"
      ></FeatureCard2>
      <FeatureCard2
        year="2014"
        title="せのび～眠れる森の美女の“アダージョ”"
        artist="ENA"
        link_text="https://recochoku.jp/song/S1001196352/single?ds=1001577950"
        description="テレビアニメ　四月は君の嘘 ORIGINAL SONG &amp; SOUNDTRACK"
        rootClassName="rootClassName11"
      ></FeatureCard2>
      <FeatureCard2
        year="2015"
        title="No One"
        artist="ENA"
        link_text="https://recochoku.jp/album/A2000512775/album?ds=1001398032"
        description="テレビドラマ　ウロボロス　この愛こそ、正義　メインテーマ曲"
        rootClassName="rootClassName12"
      ></FeatureCard2>
      <FeatureCard2
        year="2017"
        title="世界がかわるまで"
        artist="ENA"
        link_text="https://game.watch.impress.co.jp/docs/news/1121171.html"
        description="スマートフォンゲーム　ポポロクロイス　ナルシアの涙と妖精の笛　主題歌"
        rootClassName="rootClassName13"
      ></FeatureCard2>
      <FeatureCard2
        year="2018"
        title="ドラは恋人"
        artist="ENA"
        link_text="https://uta.573.jp/item/4421015"
        description="ＣＲぱちんこ麻雀格闘倶楽部 Music Selection "
        rootClassName="rootClassName14"
      ></FeatureCard2>
      <FeatureCard2
        year="2020"
        title="たとえともに"
        artist="ENA"
        link_text="https://recochoku.jp/album/A2003113239/album?ds=1016290323"
        description="Nintendo Switch オランピアソワレ　OP主題歌"
        rootClassName="rootClassName15"
      ></FeatureCard2>
      <FeatureCard2
        year="2020"
        title="誰よりも　・　ひとこと"
        artist="ENA"
        link_text="https://recochoku.jp/song/S1016290324/"
        description="Nintendo Switch オランピアソワレ　ED主題歌"
        rootClassName="rootClassName16"
      ></FeatureCard2>
      <FeatureCard2
        year="2021"
        title="真昼、空にオリオン"
        artist="ENA"
        link_text="https://music.youtube.com/watch?v=K72uPVLDxcI&amp;list=PLTu15jUosRcosrJvWJYJZNzS6mTocEEoB"
        description="スマホ向けRPGゲーム　メメントモリ　リブラ　キャラクターソング"
        rootClassName="rootClassName31"
      ></FeatureCard2>
      <FeatureCard2
        year="2023"
        title="Into the Light"
        artist="Monsieur D. feat. ENA"
        link_text="https://nex-tone.link/A00114508"
        description=" 東京を拠点に活動するギタリスト&amp;コンポーザー(Mosieur D.)最新作 デジタルシングル"
        rootClassName="rootClassName32"
      ></FeatureCard2>
      <label className="enaofficialwebsite-works-text005">
        <br></br>
        <span>作詞</span>
        <br></br>
        <br></br>
      </label>
      <FeatureCard2
        year="2010"
        title="More Smiles, More Happiness"
        artist="来海えりか / キュアマリン（水沢史絵）"
        link_text="https://recochoku.jp/song/S20348324/"
        description="ハートキャッチプリキュア! サウンドアルバム"
        rootClassName="rootClassName25"
      ></FeatureCard2>
      <FeatureCard2
        year="2010"
        title="変身！"
        artist="池田彩"
        link_text="https://recochoku.jp/album/A2000236722/album?ds=20348325"
        description="ハートキャッチプリキュア! サウンドアルバム"
        rootClassName="rootClassName29"
      ></FeatureCard2>
      <FeatureCard2
        year="2011"
        title="ありがとうのプレゼント"
        artist="有安杏果　ももいろクローバーZ"
        link_text="https://recochoku.jp/song/S21104241/single"
        description="バトル アンド ロマンス　初回限定盤A　収録"
        rootClassName="rootClassName24"
      ></FeatureCard2>
      <FeatureCard2
        year="2011"
        title="・・・愛ですか？"
        artist="玉井詩織　ももいろクローバーZ"
        link_text="https://recochoku.jp/song/S21104239/single?ds=230143033"
        description="バトル アンド ロマンス　初回限定盤A　収録"
        rootClassName="rootClassName27"
      ></FeatureCard2>
      <FeatureCard2
        year="2011"
        title="恋は暴れ鬼太鼓"
        artist="高城れに　ももいろクローバーZ"
        link_text="https://recochoku.jp/song/S21104242/single?ds=230143033"
        description="バトル アンド ロマンス　初回限定盤A　収録"
        rootClassName="rootClassName26"
      ></FeatureCard2>
      <FeatureCard2
        year="2012"
        title="Catch ＆ Go！！"
        artist="横尾渉・宮田俊哉・二階堂高嗣・千賀健永(Kis-My-Ft2)"
        link_text="https://www.johnnys-net.jp/page?id=discoDetail&amp;artist=17&amp;data=468"
        description="1st アルバム　Kis-My-1st　収録"
        rootClassName="rootClassName17"
      ></FeatureCard2>
      <FeatureCard2
        year="2012"
        title="恋愛したいっ！"
        artist="沼倉愛美、赤﨑千夏、水瀬いのり、佐倉綾音、大地葉"
        link_text="https://recochoku.jp/song/S21996347/single"
        description="テレビアニメ　恋愛ラボ　オープニングテーマ曲"
        rootClassName="rootClassName28"
      ></FeatureCard2>
      <FeatureCard2
        year="2012"
        title="Best FriendS"
        artist="沼倉愛美、赤﨑千夏、水瀬いのり、佐倉綾音、大地葉"
        link_text="https://pc.animelo.jp/portals/product/862183"
        description="テレビアニメ　恋愛ラボ　エンディングテーマ曲"
        rootClassName="rootClassName30"
      ></FeatureCard2>
      <FeatureCard2
        year="2013"
        title="BAD BOYS"
        artist="Sexy Zone"
        link_text="https://www.johnnys-net.jp/page?id=discoDetail&amp;artist=24&amp;data=1430"
        description="日本テレビ　深夜連続ドラマ　BAD BOYS J　主題歌"
        rootClassName="rootClassName18"
      ></FeatureCard2>
      <FeatureCard2
        year="2013"
        title="Young &amp; Beautiful！"
        artist="Sexy Zone"
        link_text="https://www.johnnys-net.jp/page?id=discoDetail&amp;artist=24&amp;data=1478"
        description="女子バレーボールワールドグランプリ2013　イメージソング"
        rootClassName="rootClassName19"
      ></FeatureCard2>
      <FeatureCard2
        year="2014"
        title="Power of Run"
        artist="Sexy Zone"
        link_text="https://www.johnnys-net.jp/page?id=discoDetail&amp;artist=24&amp;data=2092"
        description="6thシングル　King &amp; Queen &amp; Joker　収録"
        rootClassName="rootClassName20"
      ></FeatureCard2>
      <FeatureCard21
        text="HiB HiB dream"
        year="2016"
        title="HiB HiB dream"
        artist="HiHi JET ×東京B少年"
        description="HiHiJets、東京B少年初のコラボ楽曲"
        rootClassName="feature-card21-root-class-name"
      ></FeatureCard21>
      <FeatureCard2
        year="2018"
        title="Future Light"
        artist="A.B.C-Z"
        link_text="https://www.youtube.com/watch?v=wfgqOMV056w"
        description="映画 ラスト・ホールド! 　主題歌"
        rootClassName="rootClassName22"
      ></FeatureCard2>
      <FeatureCard2
        year="2019"
        title="OH！サマーKING"
        artist="King&amp;Prince"
        link_text="https://www.uta-net.com/song/269470/"
        description="1st アルバム　King&amp;Prince　収録"
        rootClassName="rootClassName21"
      ></FeatureCard2>
      <FeatureCard2
        year="2019"
        title="生まれる願い"
        artist="ウタ・アリィ"
        link_text="https://recochoku.jp/album/A2001601297/album?ds=1008492112"
        description="TVアニメフルーツバスケット 1st season 挿入歌"
        rootClassName="rootClassName23"
      ></FeatureCard2>
      <FeatureCard2
        year="2020"
        title="馳せる未来"
        artist="ウタ・アリィ"
        link_text="https://recochoku.jp/song/S1010152584/"
        description="TVアニメフルーツバスケット 2nd Season 挿入歌"
        rootClassName="rootClassName33"
      ></FeatureCard2>
      <FeatureCard2
        year="2021"
        title="明日への境界線"
        artist="雪花ラミィ"
        link_text="https://www.youtube.com/watch?v=ULtGHb83pTI"
        description="ホロライブ　雪花ラミィ初のオリジナル楽曲"
        rootClassName="rootClassName34"
      ></FeatureCard2>
      <label className="enaofficialwebsite-works-text010">
        <br></br>
        <span>コーラス</span>
        <br></br>
        <br></br>
      </label>
      <span className="enaofficialwebsite-works-text015">
        <span className="enaofficialwebsite-works-text016">
          竹内まりや「seize the
          day　今を生きよう」「恋、はじめまして」「ファースト・デイト」「夏のイントロ」
        </span>
        <br className="enaofficialwebsite-works-text017"></br>
        <span className="enaofficialwebsite-works-text018">
          渡辺麻友(AKB48)「未来の恋人」 
        </span>
        <span className="enaofficialwebsite-works-text019">
          NEWS「Digital Love」(コーラスアレンジ含む)
        </span>
        <br className="enaofficialwebsite-works-text020"></br>
        <span className="enaofficialwebsite-works-text021">
          橋本良亮(A.B.C-Z) 「Love To Love You」 
        </span>
        <span className="enaofficialwebsite-works-text022">
          ジャニーズWEST「僕ら今日も生きている」
        </span>
        <br className="enaofficialwebsite-works-text023"></br>
        <span className="enaofficialwebsite-works-text024">
          ももいろクローバーZ「Chaimaxx」「D&apos;の純情」「DNA狂詩曲」「空のカーテン」「上球物語」「JUMP!!!!!」
        </span>
        <br className="enaofficialwebsite-works-text025"></br>
        <span className="enaofficialwebsite-works-text026">
          藤井フミヤ「今さらI want you」
        </span>
        <br className="enaofficialwebsite-works-text027"></br>
        <span className="enaofficialwebsite-works-text028">
          榊原ゆい、いとうかなこ、Zwei、アフィリア・サーガ、増田有華(AKB48)、三浦涼介、彩音、今井麻美
        </span>
        <br></br>
      </span>
      <div
        data-thq="thq-dropdown"
        className="enaofficialwebsite-works-thq-dropdown list-item"
      >
        <ul
          data-thq="thq-dropdown-list"
          className="enaofficialwebsite-works-dropdown-list"
        >
          <li
            data-thq="thq-dropdown"
            className="enaofficialwebsite-works-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="enaofficialwebsite-works-dropdown-toggle"
            >
              <span className="enaofficialwebsite-works-text030">
                Sub-menu Item
              </span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="enaofficialwebsite-works-dropdown1 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="enaofficialwebsite-works-dropdown-toggle1"
            >
              <span className="enaofficialwebsite-works-text031">
                Sub-menu Item
              </span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="enaofficialwebsite-works-dropdown2 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="enaofficialwebsite-works-dropdown-toggle2"
            >
              <span className="enaofficialwebsite-works-text032">
                Sub-menu Item
              </span>
            </div>
          </li>
        </ul>
      </div>
      <label className="enaofficialwebsite-works-text033">
        <br></br>
        <span>劇判コーラス</span>
        <br></br>
        <br></br>
      </label>
      <span className="enaofficialwebsite-works-text038">
        <span className="enaofficialwebsite-works-text039">
          テレビドラマ「TAXMEN」「蜜の味～A Taste of
          Honey」「ホワイトラボ」「ウロボロス」「＃家族募集します」
        </span>
        <br className="enaofficialwebsite-works-text040"></br>
        <span className="enaofficialwebsite-works-text041">
          テレビアニメ　「荒川アンダーザブリッジ」「荒川アンダーザブリッジx2」「銀魂」「orange」「うる星やつら」
        </span>
        <br className="enaofficialwebsite-works-text042"></br>
        <span className="enaofficialwebsite-works-text043">
          映画「ヒロイン失格」「最高の人生の見つけ方」
        </span>
        <br></br>
      </span>
      <ul className="list"></ul>
      <label className="enaofficialwebsite-works-text045">
        <br></br>
        <span>コンサート＆ライブ＆テレビ出演</span>
        <br></br>
        <br></br>
      </label>
      <span className="enaofficialwebsite-works-text050">
        <span className="enaofficialwebsite-works-text051">
          山下達郎　Performanceツアー
        </span>
        <span className="enaofficialwebsite-works-text052">（2015年〜）</span>
        <br className="enaofficialwebsite-works-text053"></br>
        <span className="enaofficialwebsite-works-text054">
          スーパーゲームソングライブ　
        </span>
        <span className="enaofficialwebsite-works-text055">
          2012 -NEW GAME-　＠パシフィコ横浜
        </span>
        <span className="enaofficialwebsite-works-text056">（2012年）</span>
        <br className="enaofficialwebsite-works-text057"></br>
        <span className="enaofficialwebsite-works-text058">
          中村繪里子「らららなかむランド」＠
        </span>
        <span className="enaofficialwebsite-works-text059">
          相模女子大学グリーンホール
        </span>
        <span className="enaofficialwebsite-works-text060">（2015年）</span>
        <br className="enaofficialwebsite-works-text061"></br>
        <span className="enaofficialwebsite-works-text062">
          EPO × 佐橋佳幸 × 清水信之「おとな文化祭」＠ビルボード東京＆大阪
        </span>
        <span className="enaofficialwebsite-works-text063">（2018年）</span>
        <br className="enaofficialwebsite-works-text064"></br>
        <span className="enaofficialwebsite-works-text065">花澤香菜　</span>
        <span className="enaofficialwebsite-works-text066">
          {' '}
          -KANA HANAZAWA Concert 2018 &quot;Spring will come soon&quot; &amp;
           &quot;大丈夫&quot;
        </span>
        <span className="enaofficialwebsite-works-text067">（2018年）</span>
        <br className="enaofficialwebsite-works-text068"></br>
        <span className="enaofficialwebsite-works-text069">
          あの素晴らしい歌をもう一度コンサート　in　武道館
        </span>
        <span className="enaofficialwebsite-works-text070">（2018年）</span>
        <br className="enaofficialwebsite-works-text071"></br>
        <span className="enaofficialwebsite-works-text072">坂本真綾　</span>
        <span className="enaofficialwebsite-works-text073">
          LIVE TOUR 2019「今日だけの音楽」
        </span>
        <span className="enaofficialwebsite-works-text074">（2019年）</span>
        <br className="enaofficialwebsite-works-text075"></br>
        <span className="enaofficialwebsite-works-text076">声優紅白歌合戦</span>
        <span className="enaofficialwebsite-works-text077">（2021年）　</span>
        <span className="enaofficialwebsite-works-text078">
          サウンドインS　池田エライザ　バックコーラス（2021年）
        </span>
        <br></br>
      </span>
      <label className="enaofficialwebsite-works-text080">
        <br></br>
        <span>CM歌唱歴</span>
        <br></br>
        <br></br>
      </label>
      <span className="enaofficialwebsite-works-text085">
        <span className="enaofficialwebsite-works-text086">
          大塚ベバレジMATCH、ポリデント、ポリグリップ、HOYU rexy
        </span>
        <br className="enaofficialwebsite-works-text087"></br>
        <span className="enaofficialwebsite-works-text088">
          神奈川工科大学　PLAY編　（作・編曲含む）、ワコール　シャキっとブラ、東ハトパイクロ
        </span>
        <br className="enaofficialwebsite-works-text089"></br>
        <span className="enaofficialwebsite-works-text090">
          株式会社DISCO（歌唱＆CM出演）、リプトン、ニチバン、さがみ典礼
        </span>
        <br className="enaofficialwebsite-works-text091"></br>
        <span className="enaofficialwebsite-works-text092">
          BAN(歌・ナレーション)、8×4、めちゃコミック、7&amp;iハッピーデイ、ひらかたパーク
        </span>
        <br></br>
      </span>
      <label className="enaofficialwebsite-works-text094">
        <br></br>
        <span>ボイストレーナー歴</span>
        <br></br>
        <br></br>
      </label>
      <span className="enaofficialwebsite-works-text099">
        <span className="enaofficialwebsite-works-text100">
          復活！ミニスカポリス、リエコランド、種田梨沙(声優)、岡本菜摘(第6回アニソングランプリ優勝)
        </span>
        <br className="enaofficialwebsite-works-text101"></br>
        <span className="enaofficialwebsite-works-text102">
          内田真礼(声優)、仁藤萌乃、楠田亜衣奈（声優）、CHiCO、halca、SHONO他
        </span>
        <br className="enaofficialwebsite-works-text103"></br>
        <br></br>
      </span>
      <footer className="enaofficialwebsite-works-footer">
        <span className="enaofficialwebsite-works-text105">
          <span className="enaofficialwebsite-works-text106">2023　©　ENA</span>
          <br></br>
        </span>
      </footer>
    </div>
  )
}

export default ENAOFFICIALWEBSITEWorks
