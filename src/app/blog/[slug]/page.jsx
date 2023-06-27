'use client'
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import NotionService from "../../../services/notion-service";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { BlogCover } from "../../../components/UX/BlogCover";
import CodeBlock from "../../../components/UX/CodeBlock";
import { BlogCategories } from "../../../components/UX/BlogCategories";


async function getSinglePost(slug) {
  const notionService = new NotionService()
  const p = await notionService.getSingleBlogPost(slug)
  return p
  
}





  


export default async function Post({params}) {
  const {slug} = params;
  const post = await getSinglePost(slug);
  console.log("/////////////////////////////////////////////");
  console.log(post);

  return (<h1>{slug}</h1>)
}

    //return (
    //  <>
    //    <Head>
    //      <meta name="description" content={post.description} />
    //      <meta name="og:description" content={post.description} />
    //      <meta name="og:title" content={post.title} />
    //      <meta name="og:image" content={post.cover} />
    //    </Head>
    //    {/* Pasar las propiedades estas */}
  
    //    <main className="max-w-4xl mx-auto p-4 md:p-0">
    //      {/* Cabecero */}
    //      <div>
    //        <BlogCover cover={post.cover} customClass="rounded-3xl"/>
    //        <BlogCategories tags={post.tags}/>
          
    //        <h1 className="gradientText_gAnimation font-bold">{post.title}</h1>
    //        {/*<span>{post.Author}</span>*/}
            
    //      </div>
  
    //      {/* Contenido */}
    //      <div className="markdown-container">
    //        {/*//@ts-ignore*/}
    //        <ReactMarkdown components={{ code: CodeBlock }} skipHtml={true} >{/*  */}
    //          {markdown}
    //        </ReactMarkdown>
    //      </div>
    //    </main>
  
    //    <style jsx global>{`
    //      .markdown-container p img {
    //        display: block;
    //        margin: 0 auto;
    //      }
    //      strong code {
    //        color: var(--yellow);
    //      }
    //      strong{
    //        color: var(--yellow);
    //      }
  
    //      h2,h3 {
    //        margin-top: 30px;
  
    //      }
    //    `}</style>
    //  </>
    //);

//};

