import PWABadge from './PWABadge.jsx'
import './App.css'
import GlslCanvas from './components/GlslEditor.jsx'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import icon_dark from './assets/icon_dark.svg?no-inline'
import icon_light from './assets/icon_light.svg?no-inline'
import icon_lang from './assets/icon_lang.svg?no-inline'
import useLocalStorage from 'use-local-storage';
import Markdown from './components/Markdown.jsx';
// content
import introEn from './markdown/intro-en.md?raw'
import favicon from './shaders/favicon.frag?raw'

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
      <h1>{t("tutorial")}</h1>

      <Markdown>{introEn}</Markdown>

      <GlslCanvas darkmode={darkmode} identifier={"test"} initial_code={favicon} />

      <GlslCanvas darkmode={darkmode} identifier={"test2"} initial_code={`void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;

    vec3 color = vec3(0.);
    //test
    color = vec3(st.x,st.y,0.5);

    gl_FragColor = vec4(color,1.0);
}`} />
      {/* Badge for managing the state of the Progressive Web App service worker */}
      <PWABadge />
      {/* dark/light mode toggle button */}
      <button className='floating_button' onClick={() => { setDarkmode(!darkmode) }} style={{ filter: darkmode ? "invert()" : "none" }}>
        <img src={darkmode ? icon_light : icon_dark}></img>
      </button>
      <button className='floating_button' onClick={() => { setEnglish(!english) }}
        style={{ filter: darkmode ? "invert()" : "none", right: "60px" }}>
        <img src={icon_lang}></img>
      </button>
    </>
  )
}

export default App
