'use client'
import CodeBlock from "../../../components/UX/CodeBlock";
import ReactMarkdown from "react-markdown";


const RenderBlogComponent = (markdown: any) => {
    {/*//@ts-ignore*/ }
    <ReactMarkdown components={{ code: CodeBlock }} skipHtml={true} >
        {markdown}
    </ReactMarkdown>
}

export { RenderBlogComponent }