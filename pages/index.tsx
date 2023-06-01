import Link from 'next/link'
//import React from 'react'
import type { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { BlogPost } from '../@types/schema'
import NotionService from '../services/notion-service'

//import styles from '../styles/Index.module.css'

import { Layout } from '../components/Layout'
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
  const title = "Test Blog";
  const description = "Welcome to my notion blog"

  return (
    <>

    <Layout>
    {posts.map((post: BlogPost) => (
        
        <p key={post.id}>Blog Post Component will go here: {post.title}</p>
      ))}
    </Layout>
    </>
  )
}

export default Home;
