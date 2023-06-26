'use client'
//import type { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from 'next'
//import { BlogPost } from '../@types/schema'
//import NotionService from '../services/notion-service'

//import { BlogCard } from '../components/UX/BlogCard'
//import { PageTitle } from '../components/PageTitle'

//export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
//  const notionService  = new NotionService();

//  const posts = await notionService.getPublishedBlogPost();
//  return {
//    props: {
//      posts
//    },
//  }
//}

//const Home: NextPage = ({posts}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
//  return (
//    <>
      
//        <PageTitle>{"Ultimos Artículos"}</PageTitle>
//        <div className='mt-12 max-wlg mx-auto grid gap-6 lg:grid-cols-2 lg:max-w-none'>
//          {posts.map((post: BlogPost) => (
//            <BlogCard key={post.id} post={post}/>
//          ))} 
//        </div>
      
//    </>
//  )
//}


const Home = () => {
  return(<h1>Home</h1>)
}

export default Home;
