import  NotionService from '../../lib/notion-service'
import { BlogCard } from '../../components/Blog/BlogCard'
import { PageTitle } from '../../components/PageTitle/PageTitle'

export const revalidate = 10; // In Seconds

export default async function blogPage() {
  const notionService = new NotionService()
  const posts = await notionService.getPublishedBlogPost()
  console.log(posts.data);

  return (
    <div>
      <PageTitle>{"Last Articles"}</PageTitle>
      <div className='flex flex-col mt-12 max-wlg mx-auto gap-20 lg:grid-cols-2 lg:max-w-none'>
        {posts.map((post) => (
          <BlogCard key={post.id} post={post}/>
        ))} 
      </div>

      <button>{posts.prove}</button>
    </div>

    
  )
}
