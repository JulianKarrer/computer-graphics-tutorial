import GlslCanvas from '../components/GlslEditor.jsx'
import Markdown from '../components/Markdown.jsx';
import YoutubeEmbed from '../components/Embed.jsx';
import raycastMd from '../markdown/01-raycasting-en.md?raw'
import sphere from '../shaders/01-raycasting-sphere.frag?raw'


export default function RayCasting({ english, t, darkmode }) {
    return <>
        <Markdown>{raycastMd}</Markdown>

        <YoutubeEmbed video_id="PI5jbAdT2zE" />

        <Markdown>{``}</Markdown>

        <GlslCanvas darkmode={darkmode} identifier={"raycast-sphere"} initial_code={sphere} />

    </>
}