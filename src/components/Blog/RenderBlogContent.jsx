'use client'
import CodeBlock from "../UX/CodeBlock";
import ReactMarkdown from "react-markdown";


const RenderBlogComponent = (markdown) => {
    {/*//@ts-ignore*/}
    <ReactMarkdown components={{ code: CodeBlock }} skipHtml={true} >
        {markdown}
    </ReactMarkdown>
}

export { RenderBlogComponent }