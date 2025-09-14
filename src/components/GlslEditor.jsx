import { useEffect, useRef, useState } from "react";
import useEffectOnce from '../hooks/useEffectOnce'
// import './glslEditor.css.map'
import './glslEditor.css'
import './glslEditor.min.js'

import useLocalStorage from "use-local-storage";
import { useTranslation } from "react-i18next";

export default function GlslCanvas({ identifier, initial_code, darkmode }) {
    const { t, _i18n } = useTranslation();
    const [editor, setEditor] = useState(null)
    const [code, setCode] = useLocalStorage(identifier, initial_code);
    const [isdark, setIsDark] = useState(darkmode);
    const containerRef = useRef(null)

    // when the editor is first initialized or re-instantiated to switch themes,
    // this function is called after the div referred to identifier is emptied
    const initEditor = () => {
        return new GlslEditor('#' + identifier, {
            canvas_size: 400,
            canvas_draggable: false,
            theme: darkmode ? "monokai" : "eclipse",
            multipleBuffers: true,
            watchHash: true,
            fileDrops: true,
            menu: false,
            linewrap: true,
            autofocus: false,
            frag_header: `
#ifdef GL_ES
  precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
`
        })
    }

    // Initialize GlslEditor once, saving the editor for later invocations 
    // of the getValue method. 
    // Set Editor settings and give a GLSL preamble.
    useEffectOnce(() => {
        const glslEditor = initEditor();
        glslEditor.editor.setValue(code)
        setEditor(glslEditor);
    }, []);

    // reinstantiate the editor on dark mode change to brute force a theme switch
    useEffect(() => {
        if (darkmode !== isdark) {
            setIsDark(darkmode)
            if (editor) {
                console.log("dark mode changed!")
                document.getElementById(identifier).innerHTML = ""
                const glslEditor = initEditor();
                glslEditor.editor.setValue(code)
                setEditor(glslEditor);
            }
        }
    }, [darkmode])


    return <div className="glsl_editor_container">
        <div
            id={identifier}
            className='glsl_editor'
            ref={containerRef}
            // update the state of the 'code' variable on all relevant input events
            // so that an up to date copy of the editor's contents are always kept in 
            // localStorage
            onInput={() => {
                if (editor) { setCode(editor.editor.getValue()) }
            }}
            onKeyDown={() => {
                if (editor) { setCode(editor.editor.getValue()) }
            }}
            onPointerUp={() => {
                if (editor) { setCode(editor.editor.getValue()) }
            }}></div >
        {/* provide a button to reset the editor content to the initially given code snippet */}
        <button className="glsl_editor_resetbutton" onPointerUp={() => { setCode(initial_code); editor.editor.setValue(initial_code) }}>
            {t('reset')}
        </button>
    </div>

}

