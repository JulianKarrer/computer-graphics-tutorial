import GlslCanvas from '../components/GlslEditor.jsx'
import Markdown from '../components/Markdown.jsx';
import YoutubeEmbed from '../components/Embed.jsx';

import welcomeEn from '../markdown/welcome-en.md?raw'
import introGlslEn from '../markdown/00-intro-glsl-en.md?raw'
import welcomeDe from '../markdown/welcome-de.md?raw'
import favicon from '../shaders/favicon.frag?raw'


export default function IntroPage({ english, t, darkmode }) {
    return <>
        <h1>{t("tutorial")}</h1>

        <Markdown>{english ? welcomeEn : welcomeDe}</Markdown>

        <Markdown>{introGlslEn}</Markdown>

        <GlslCanvas darkmode={darkmode} identifier={"intro-favicon"} initial_code={favicon} />

    </>
}
