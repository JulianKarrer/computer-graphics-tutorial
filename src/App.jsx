import PWABadge from './PWABadge.jsx'
import './App.css'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import icon_dark from './assets/icon_dark.svg?no-inline'
import icon_light from './assets/icon_light.svg?no-inline'
import icon_lang from './assets/icon_lang.svg?no-inline'
import useLocalStorage from 'use-local-storage';
// content
import IntroPage from './pages/00-IntroPage.jsx';
import RayCasting from './pages/01-Raycasting.jsx';

function App() {
  const { t, i18n } = useTranslation();
  const [darkmode, setDarkmode] = useLocalStorage("darkmode", true)
  useEffect(() => {
    if (!darkmode && !document.body.classList.contains("light")) {
      document.body.classList.add("light")
    }
    if (darkmode && document.body.classList.contains("light")) {
      document.body.classList.remove("light")
    }
  }, [darkmode])

  const [english, setEnglish] = useLocalStorage("english", true)
  useEffect(() => {
    if (english) {
      i18n.changeLanguage("en")
    } else {
      i18n.changeLanguage("de")
    }
  }, [english])

  return (
    <>
      <IntroPage english={english} darkmode={darkmode} t={t}></IntroPage>
      <RayCasting english={english} darkmode={darkmode} t={t}></RayCasting>

      {/* Badge for managing the state of the Progressive Web App service worker */}
      <PWABadge />
      {/* dark/light mode toggle button */}
      <button className='floating_button' onClick={() => { setDarkmode(!darkmode) }} style={{ filter: darkmode ? "invert()" : "none" }}>
        <img src={darkmode ? icon_light : icon_dark}></img>
      </button >
      <button className='floating_button' onClick={() => { setEnglish(!english) }}
        style={{ filter: darkmode ? "invert()" : "none", right: "60px" }}>
        <img src={icon_lang}></img>
      </button>
      {/* add a spacer at the end */}
      <div style={{ height: "25vh" }}></div>
    </>
  )
}

export default App
