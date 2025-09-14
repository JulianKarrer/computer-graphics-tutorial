import "./markdown.css"
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import ReactMarkdown from 'react-markdown'

export default function Markdown({ children }) {
    return <div className='mdcontainer'>
        <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
        >
            {children}
        </ReactMarkdown>
    </div>

}