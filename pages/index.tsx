import Link from 'next/link'
//import React from 'react'
import type { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { BlogPost } from '../@types/schema'
import NotionService from '../services/notion-service'

//import styles from '../styles/Index.module.css'

import { Layout } from '../components/Layout'
import { BlogCard } from '../components/BlogCard'
//import { PageTitle } from '../components/PageTitle'

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext<ParsedUrlQuery>) => {
  const notionService  = new NotionService();

  const posts = await notionService.getPublishedBlogPost();
  return {
    props: {
      posts
    },

  }
}


// Recibos los post por props
const Home: NextPage = ({posts}: InferGetStaticPropsType<typeof getStaticProps>) => {


  return (
    <>

    <Layout>
      <div className='mt-12 max-wlg mx-auto grid gap-6 lg:grids-cols-2 lg:max-w-none'>
        {posts.map((post: BlogPost) => (
          <BlogCard key={post.id} post={post}/>
        ))} 
      </div>
    </Layout>
    </>
  )
}

export default Home;
