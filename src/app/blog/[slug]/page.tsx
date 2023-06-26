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


export const inferGetServerSidePropsType= async (
  context: GetServerSidePropsContext
) => {
  const notionService = new NotionService();

  //ts-ignore
  const p = await notionService.getSingleBlogPost(
    context.params?.slug as string
  );





  if (!p) {
    return {
      notFound: true,
    };
  }


  console.log("************[AQUI]***********");
  console.log(p);
  console.log(p.post);
  return {
    props: {
      markdown: p.markdown.parent, // Parent es la parte en la que viene el artículo
      post: p.post,
    },
  };
};

const Post = ({
  markdown,
  post,
}: InferGetServerSidePropsType<typeof inferGetServerSidePropsType>) => {
  console.log(post)

    return (
      <>
        <Head>
          <title>{post?.title}</title>
          <meta name="description" content={post?.description} />
          <meta name="og:description" content={post?.description} />
          <meta name="og:title" content={post?.title} />
          <meta name="og:image" content={post?.cover} />
        </Head>
        {/* Pasar las propiedades estas */}
  
        <main className="max-w-4xl mx-auto p-4 md:p-0">
          {/* Cabecero */}
          <div>
            <BlogCover cover={post.cover} customClass="rounded-3xl"/>
            <BlogCategories tags={post.tags}/>
          
            <h1 className="gradientText_gAnimation font-bold">{post.title}</h1>
            {/*<span>{post.Author}</span>*/}
            
          </div>
  
          {/* Contenido */}
          <div className="markdown-container">
            {/*//@ts-ignore*/}
            <ReactMarkdown components={{ code: CodeBlock }} skipHtml={true} >{/*  */}
              {markdown}
            </ReactMarkdown>
          </div>
        </main>
  
        <style jsx global>{`
          .markdown-container p img {
            display: block;
            margin: 0 auto;
          }
          strong code {
            color: var(--yellow);
          }
          strong{
            color: var(--yellow);
          }
  
          h2,h3 {
            margin-top: 30px;
  
          }
        `}</style>
      </>
    );

};

export default Post;
