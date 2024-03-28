import NotionService from "../../../lib/notion-service";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { BlogCover } from "../components/BlogCover";
import { BlogCategories } from "../components/BlogCategories";
import { AboutAuthor } from "../components/AboutAuthor";

import CodeBlock from "../../../components/UX/CodeBlock";
import "./page.css";

export const revalidate = 10; // In Seconds

async function getSinglePost(slug) {
  const notionService = new NotionService();
  const p = await notionService.getSingleBlogPost(slug);
  return p;
}

export default async function Post({ params }) {
  const { slug } = params;
  const { post, markdown, mdBlocks } = await getSinglePost(slug);



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
          <BlogCover coverUrl={post.cover} customClass="rounded-3xl" />

          <div className="py-5">
            <BlogCategories tags={post.tags} />
          </div>

          <h1 className="gradientText_gAnimation font-bold">{post.title}</h1>
          {/*<span>{post.Author}</span> //*/}
        </div>

        {/* Contenido */}
        <div className="markdown-container">
          {/*//@ts-ignore*/}

          {/*<ReactMarkdown components={{ code: CodeBlock }}>
            {markdown.parent}
          </ReactMarkdown>*/}

          <div className="markdown-container">
            {mdBlocks.map((block) =>
              block.parent ? (
                <ReactMarkdown
                  key={block.blockId}
                  components={{ code: CodeBlock }}
                >
                  {block.parent}
                </ReactMarkdown>
              ) : (
                <div key={block.blockId}>
                  <br />
                </div>
              )
            )}
          </div>
        </div>

        <AboutAuthor />
      </main>
    </>
  );
}
