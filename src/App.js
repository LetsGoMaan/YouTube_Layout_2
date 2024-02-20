import './App.css';

import hamburger from './assets/hamburger.svg'
import logo from './assets/youtubeLogo.svg'
import name from './assets/youtubeName.svg'
import search from './assets/search.svg'
import camera from './assets/camera.svg'
import apps from './assets/apps.svg'
import bell from './assets/bell.svg'
import userpic from './assets/userpic.svg'
import videoImg from './assets/videoImg.png'

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__left">
          <div className="header__hamburger">
            <img src={hamburger} alt=""/>
          </div>
          <div className="header__logo">
            <img src={logo} alt=""/>
            <img src={name} alt=""/>
          </div>
        </div>
        <div className="search__bar">
          <p className="search__text">Search</p>
          <img className="search__icon" src={search} alt=""/>
        </div>
        <div className="header__buttons">
          <img src={camera} alt=""/>
          <img src={apps} alt=""/>
          <img src={bell} alt=""/>


          <img src={userpic} alt="user picture"/>
        </div>
      </header>
      <main>
        <div className='videoPlayer'>
          <img className='videoImg' src={videoImg} alt=""/>
        </div>
      </main>
    </div>
  );
}

export default App;
