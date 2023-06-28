'use client'
import  NotionService from '../services/notion-service'
import { BlogCard } from '../components/UX/BlogCard'
import { PageTitle } from '../components/PageTitle'

// This function can be named anything
async function getPublishedBlogPost() {
  const notionService = new NotionService()
  const posts = await notionService.getPublishedBlogPost()
  return posts
}

export default async function Home() {
  const posts = await getPublishedBlogPost()

  return (
    <div>
      <PageTitle>{"Ultimos Artículos"}</PageTitle>
      <div className='mt-12 max-wlg mx-auto grid gap-6 lg:grid-cols-2 lg:max-w-none'>
        {posts.map((post) => (
          <BlogCard key={post.id} post={post}/>
        ))} 
      </div>
    </div>
  )
}
//export default Home;
