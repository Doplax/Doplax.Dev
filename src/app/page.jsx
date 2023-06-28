'use client'
import { useState, useEffect } from 'react'
import NotionService from '../services/notion-service'
import { BlogCard } from '../components/UX/BlogCard'
import { PageTitle } from '../components/PageTitle'

export default function Home() {
  const [posts, setPosts] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const getPublishedBlogPost = async () => {
      setLoading(true)
      const notionService = new NotionService()
      const posts = await notionService.getPublishedBlogPost()
      setPosts(posts)
      setLoading(false)
    }
    getPublishedBlogPost()
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!posts.length) return <p>No posts available</p>

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
