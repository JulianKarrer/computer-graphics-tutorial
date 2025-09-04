import PWABadge from './PWABadge.jsx'
import './App.css'
import './glslEditor.min.js'
import './glslEditor.css'
import useEffectOnce from './hooks/useEffectOnce.js'


function GlslCanvas({ identifier, initial_code }) {
  useEffectOnce(() => {
    const glslEditor = new GlslEditor('#' + identifier, {
      canvas_size: 400,
      canvas_draggable: false,
      theme: 'monokai',
      multipleBuffers: true,
      watchHash: true,
      fileDrops: true,
      menu: false,
      linewrap: true,
      frag_header: `#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
`
    });
  }, []);

  return <div id={identifier} className='glsl_editor'>{initial_code}</div >
}

function App() {


  return (
    <>
      <h1>Computer Graphics Tutorial</h1>
      <GlslCanvas identifier={"test"} initial_code={`void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;

    vec3 color = vec3(0.);
    color = vec3(st.x,st.y,0.5);

    gl_FragColor = vec4(color,1.0);
}`} />

      Test Test

      <GlslCanvas identifier={"test2"} initial_code={`void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;

    vec3 color = vec3(0.);
    //test
    color = vec3(st.x,st.y,0.5);

    gl_FragColor = vec4(color,1.0);
}`} />
      <PWABadge />
    </>
  )
}

export default App
