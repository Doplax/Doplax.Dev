import NotionService from "../../services/notion-service";
import { GetStaticProps, GetStaticPropsContext, InferGetServerSidePropsType } from "next";
import { Head } from "next/document";
import { ParsedUrlQuery } from "querystring";
import ReactMarkdown from "react-markdown"

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



export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext <ParsedUrlQuery, PreviewData>){
    const notionService = new NotionService();

    //ts-ignore
    const p = await notionService.getSingleBlogPost(context.params?.slug)

    if (!p){
        throw "Error"
    }

    return {
        props: {
            markdown: p.markdown,
            post: p.post
        }
    }
}




const Post = ({markdown, post}: InferGetServerSidePropsType<typeof getStaticProps>) => {
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.description} />
                <meta name="og:description" content={post.description} />
                <meta name="og:title" content={post.title} />
                <meta name="og:image" content={post.cover} />
            </Head>

            <main className="max-w-xl mx-auto">
                <div className="flex items-center justify-center">
                    <div className="flex intems-center justify-center">
                        <article className="prose">
                            <ReactMarkdown>{markdown}</ReactMarkdown>
                        </article>
                        {/*<h1>{post.title}</h1>*/}
                        {/*<p>{post.description}</p>*/}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Post;