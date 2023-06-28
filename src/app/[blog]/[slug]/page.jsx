
import NotionService from "../../../services/notion-service";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { BlogCover } from "../../../components/UX/BlogCover";
import CodeBlock from "../../../components/UX/CodeBlock";
import { BlogCategories } from "../../../components/UX/BlogCategories";
import "./page.css"

async function getSinglePost(slug) {
  const notionService = new NotionService()
  const p = await notionService.getSingleBlogPost(slug)
  return p
}

export default async function Post({params}) {
    const {slug} = params;
    const {post , markdown} = await getSinglePost(slug);
    //const post = data.post;
    console.log("///////////////////////markdown///////////////////////////////");
    console.log(markdown.parent);
    return (
      <>
        <Head>
          <meta name="description" content={post.description} />
          <meta name="og:description" content={post.description} />
          <meta name="og:title" content={post.title} />
          <meta name="og:image" content={post.cover} />
        </Head>
        {/* Pasar las propiedades estas */}
  
        <main className="max-w-4xl mx-auto p-4 md:p-0">
          {/* Cabecero */}
          <div>
            <BlogCover cover={post.cover} customClass="rounded-3xl"/>
            <BlogCategories tags={post.tags}/>
          
            <h1 className="gradientText_gAnimation font-bold">{post.title}</h1>
            {/*<span>{post.Author}</span> //*/}
            
          </div>
  
          {/* Contenido */}
          <div className="markdown-container">
            {/*//@ts-ignore*/}
            <ReactMarkdown components={{ code: CodeBlock }}  >
              {markdown.parent}
            </ReactMarkdown>
          </div>
        </main>
      </>
    );

};

