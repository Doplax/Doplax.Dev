import NotionService from "../../services/notion-service";
import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType, PreviewData  } from "next";
import Head  from "next/head";
import { ParsedUrlQuery } from "querystring";
import ReactMarkdown from "react-markdown"
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

import CodeBlock from '../../components/CodeBlock'; // Asegúrate de importar tu componente CodeBlock


export async function getStaticPaths() {
    const notionService = new NotionService();

    const posts = await notionService.getPublishedBlogPost()


    // Because we are generating static paths, you will have to redeploy
    // your site when you make a change in Notion.

    const paths = posts.map(post => {
        return `/post/${post.slug}`
    })

    return {
        paths,
        fallback: false
    }

}



export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext <ParsedUrlQuery, PreviewData>) => {
    const notionService = new NotionService();

    //ts-ignore
    const p = await notionService.getSingleBlogPost(context.params?.slug as string)
    console.log("************[slug]***********");
    console.log(p);
    if (!p){
        throw "Error"
    }

    
    return {
        props: {
            markdown: p.markdown.parent, // Parent es la parte en la que viene el artículo
            post: p.post
        }
    }
}




const Post = ({markdown, post}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
                    <img className="rounded-3xl" src={post.cover}/>
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
                        <div>
                            <ReactMarkdown components={{ code: CodeBlock }}>
                                {markdown}
                            </ReactMarkdown>
                        </div>
                    </div>
                </div>
            </main>

            <Footer></Footer>
        </>
    );
}

export default Post;