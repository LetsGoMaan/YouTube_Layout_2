import './App.module.css';
import styles from './App.module.css'
import images from './assets/index'

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
          <div className={styles.headerLeft}>
              <img className={styles.hamburger} src={images.hamburger} alt=""/>
              <div className={styles.logoName}>
                  <img className={styles.logo} src={images.logo} alt=""/>
                  <img className={styles.youtubeName} src={images.name} alt=""/>
              </div>
          </div>
          <div className={styles.searchBar}>
              <p>Search</p>
              <img src={images.search} alt=""/>
          </div>
          <div className={styles.headerRight}>
              <img src={images.camera} alt=""/>
              <img src={images.apps} alt=""/>
              <img src={images.bell} alt=""/>
              <img className={styles.searchIcon} src={images.search} alt=""/>
              <img className={styles.userpic} src={images.userpic} alt=""/>
              <img className={styles.dots} src={images.dots} alt=""/>
          </div>
      </header>
        <main className={styles.main}>
            <div className={styles.videoPlayerContainer}>
                <div className={styles.videoPlayerWrapper}>
                    <img className={styles.videoImg} src={images.videoImg} alt=""/>
                    <div className={styles.overlayWrapper}>
                        <div className={styles.videoOverlay}>
                            <p>1:34</p>
                            <p>19:00</p>
                        </div>
                        <div className={styles.progressBar}><img src={images.progressBar} alt=""/></div>
                        <div className={styles.controlPanel}>
                            <div className={styles.controlSettings}>
                                <img src={images.pause} alt=""/>
                                <img src={images.arrowNext} alt=""/>
                                <img src={images.volume} alt=""/>
                                <img src={images.volumeBar} alt=""/>
                            </div>
                            <div className={styles.controlSettings}>
                                <img src={images.subtitles} alt=""/>
                                <img src={images.settings} alt=""/>
                                <img src={images.size} alt=""/>
                                <img src={images.fullscreen} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.smallOverlay}>
                        <img className={styles.smallOverlayIcons} src={images.pause} alt=""/>
                        <p>1:34</p>
                        <img className={styles.smallProgressBar} src={images.progressBar} alt=""/>
                        <p>10:00</p>
                        <img className={styles.smallOverlayIcons} src={images.volume} alt=""/>
                    </div>

                </div>
                <div>
                    <h2 className={styles.nameVideo}>Dude You Re Getting A Telescope</h2>
                </div>
                <div className={styles.viewsReactions}>
                    <div className={styles.views}><p>123k views</p></div>
                    <div className={styles.reactionsSettings}>
                        <div className={styles.reactions}>
                            <div className={styles.rectangle}>
                                <img src={images.like} alt=""/>
                                <p>123K</p>
                            </div>
                            <div className={styles.rectangle}>
                                <img src={images.dislike} alt=""/>
                                <p>435K</p>
                            </div>
                            <div className={styles.rectangle}>
                                <img src={images.share} alt=""/>
                                <p>Share</p>
                            </div>
                        </div>
                        <div className={styles.moreIcon}><img src={images.moreIcon} alt=""/></div>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.descriptionBlock}>
                    <div className={styles.nameAndDescription}>
                        <div className={styles.logoChannel}><img src={images.channelIcon} alt=""/></div>
                        <div>
                            <h2 className={styles.channelName}>Food & Drink</h2>
                            <p className={styles.date}>Published on 14 Jun 2019</p>
                            <p className={styles.subscribersCounter}>245K subscribed</p>
                            <p className={styles.description}>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </p>
                            <p className={styles.showMore}>Show more</p>
                        </div>
                    </div>
                    <div className={styles.nameAndButton}>

                        <div className={styles.subscribeButton}>
                            <p>Subscribe 2.3m</p>
                        </div>
                        <p className={styles.subscribeText}>Subscribe</p>
                    </div>
                </div>
            </div>
            <aside className={styles.aside}>
                <div className={styles.sideVideoContainer}>
                    <div className={styles.sideTop}>
                        <p className={styles.next}>Next</p>
                        <div className={styles.autoPlay}>
                            <p>AutoPlay</p>
                            <img src={images.trigger} alt=""/>
                        </div>
                    </div>
                    <div className={styles.videoBlock}>
                        <div className={styles.videoCoverWrapper}>
                            <img src={images.videoCover} alt=""/>
                            <div className={styles.timeCodes}>
                                <div className={styles.timeCodeRectangle}></div>
                                <p  className={styles.timeCodesNumbers}>8:00</p>
                            </div>
                        </div>
                        <p className={styles.videoTitle}>Baby Monitor Technology</p>
                        <div className={styles.viewsAndAuthor}>
                            <p>123k views</p>
                            <p>Dollie Blair</p>
                        </div>
                    </div>
                    <div className={styles.videoBlock}>
                        <div className={styles.videoCoverWrapper}>
                            <img src={images.videoCover2} alt=""/>
                            <div className={styles.timeCodes}>
                                <div className={styles.timeCodeRectangle}></div>
                                <p  className={styles.timeCodesNumbers}>8:00</p>
                            </div>
                        </div>
                        <p className={styles.videoTitle}>A Good Autoresponder</p>
                        <div className={styles.viewsAndAuthor}>
                            <p>123k views</p>
                            <p>Dollie Blair</p>
                        </div>
                    </div>
                    <div className={styles.videoBlock}>
                        <div className={styles.videoCoverWrapper}>
                            <img src={images.videoCover3} alt=""/>
                            <div className={styles.timeCodes}>
                                <div className={styles.timeCodeRectangle}></div>
                                <p  className={styles.timeCodesNumbers}>8:00</p>
                            </div>
                        </div>
                        <p className={styles.videoTitle}>Selecting The Right Hotel</p>
                        <div className={styles.viewsAndAuthor}>
                            <p>123k views</p>
                            <p>Dollie Blair</p>
                        </div>
                    </div>
                    <div className={styles.videoBlock}>
                        <div className={styles.videoCoverWrapper}>
                            <img src={images.videoCover4} alt=""/>
                            <div className={styles.timeCodes}>
                                <div className={styles.timeCodeRectangle}></div>
                                <p  className={styles.timeCodesNumbers}>8:00</p>
                            </div>
                        </div>
                        <p className={styles.videoTitle}>Baby Monitor Technology</p>
                        <div className={styles.viewsAndAuthor}>
                            <p>123k views</p>
                            <p>Dollie Blair</p>
                        </div>
                    </div>
                </div>

            </aside>
            <div className={styles.lowerMenu}>
                <hr className={styles.lowerMenuLine}/>
                <div className={styles.lowerMenuButtons}>
                    <button className={styles.controlButton}>
                        <img src={images.home} alt="home icon"/>
                        <p>Home</p>
                    </button>
                    <button className={styles.controlButton}>
                        <img src={images.trending} alt="home icon"/>
                        <p>Trending</p>
                    </button>
                    <button className={styles.controlButton}>
                        <img src={images.subscriptions} alt="home icon"/>
                        <p>Subscriptions</p>
                    </button>
                    <button className={styles.controlButton}>
                        <img src={images.library} alt="home icon"/>
                        <p>Library</p>
                    </button>
                </div>
            </div>
        </main>
      {/*<header className="header">*/}
      {/*  <div className="header__left">*/}
      {/*    <div className="header__hamburger">*/}
      {/*      <img src={hamburger} alt=""/>*/}
      {/*    </div>*/}
      {/*    <div className="header__logo">*/}
      {/*      <img src={logo} alt=""/>*/}
      {/*      <img src={name} alt=""/>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="search__bar">*/}
      {/*    <p className="search__text">Search</p>*/}
      {/*    <img className="search__icon" src={search} alt=""/>*/}
      {/*  </div>*/}
      {/*  <div className="header__buttons">*/}
      {/*    <img src={camera} alt=""/>*/}
      {/*    <img src={apps} alt=""/>*/}
      {/*    <img src={bell} alt=""/>*/}


      {/*    <img src={userpic} alt="user picture"/>*/}
      {/*  </div>*/}
      {/*</header>*/}
      {/*<main>*/}
      {/*  <div className='videoPlayer__container'>*/}
      {/*    <div className='videoPlayer__wrapper'>*/}
      {/*      <img className='videoImg' src={videoImg} alt=""/>*/}
      {/*      <div className='videoPlayer__timecodes'>*/}
      {/*        <p>3:14</p>*/}
      {/*        <p>19:00</p>*/}
      {/*      </div>*/}
      {/*      <div className='progres__bar'>Progress Bar</div>*/}
      {/*      <div className='videoPlayer__controls'>*/}
      {/*        <div>Pause</div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</main>*/}
    </div>
  );
}

export default App;
