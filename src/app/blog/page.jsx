import  NotionService from '../../lib/notion-service'
import { BlogCard } from '../../components/Blog/BlogCard'
import { PageTitle } from '../../components/PageTitle/PageTitle'

export default async function blogPage() {
  const notionService = new NotionService()
  const posts = await notionService.getPublishedBlogPost()

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
