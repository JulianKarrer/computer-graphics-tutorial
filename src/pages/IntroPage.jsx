import GlslCanvas from '../components/GlslEditor.jsx'
import Markdown from '../components/Markdown.jsx';
import YoutubeEmbed from '../components/Embed.jsx';

import welcomeEn from '../markdown/welcome-en.md?raw'
import introGlslEn from '../markdown/intro-glsl-en.md?raw'
import welcomeDe from '../markdown/welcome-de.md?raw'
import favicon from '../shaders/favicon.frag?raw'


export default function IntroPage({ english, t, darkmode }) {
    return <>
        <h1>{t("tutorial")}</h1>

        <Markdown>{english ? welcomeEn : welcomeDe}</Markdown>

        <Markdown>{introGlslEn}</Markdown>


        <GlslCanvas darkmode={darkmode} identifier={"test"} initial_code={favicon} />

        <YoutubeEmbed video_id="PI5jbAdT2zE" />

        <GlslCanvas darkmode={darkmode} identifier={"test2"} initial_code={`void main() {
vec2 st = gl_FragCoord.xy/u_resolution.xy;
st.x *= u_resolution.x/u_resolution.y;

vec3 color = vec3(0.);
//test
color = vec3(st.x,st.y,0.5);

gl_FragColor = vec4(color,1.0);
}`} />

    </>
}