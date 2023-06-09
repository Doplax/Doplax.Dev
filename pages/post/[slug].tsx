import NotionService from "../../services/notion-service";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

import CodeBlock from "../../components/UX/CodeBlock";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const notionService = new NotionService();

  //ts-ignore
  const p = await notionService.getSingleBlogPost(
    context.params?.slug as string
  );

  console.log("************[AQUI]***********");
  console.log(p.post.cover);



  if (!p) {
    throw "Error";
  }

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
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <meta name="og:description" content={post.description} />
        <meta name="og:title" content={post.title} />
        <meta name="og:image" content={post.cover} />
      </Head>
      {/* Pasar las propiedades estas */}
      <Header></Header>

      <main className="max-w-4xl mx-auto">
        {/* Cabecero */}
        <div>
       
        {post.cover ?
            (post.cover.url 
                ? 
            <img className="rounded-3xl" src={post.cover.url} /> 
            : 
            <img className="rounded-3xl" src={post.cover} />) 
            : null}


        
          <h1 className="gradientText_gAnimation font-bold">{post.title}</h1>
          <span>{post.Author}</span>
          {/*<span className='block mt-2 space-x-4'>
                        {
                            post.tags.map(tag => (
                                <span key={tag.id} className='bg-green-300 text-green-800 px-2 py-1 text-xs rounded-lg'>
                                    {tag.name}
                                </span>
                            ))
                        }
                    </span>*/}
        </div>

        <div className="flex items-center justify-center">
          <div className="flex intems-center justify-center">
            <div className="markdown-container">
              {/*//@ts-ignore*/}
              <ReactMarkdown components={{ code: CodeBlock }} skipHtml={true}>
                {markdown}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </main>

      <Footer></Footer>
      <style jsx global>{`
        .markdown-container p img {
          display: block;
          margin: 0 auto;
        }
        strong code {
          color: var(--yellow);
        }
      `}</style>
    </>
  );
};

export default Post;
