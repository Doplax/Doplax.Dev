import Link from 'next/link'
import styles from '../styles/Index.module.css'
import { getAllFilesMetadata } from '../lib/mdx'
import { Header } from '../components/Header/Header' 
import { Footer } from '../components/Footer/Footer'


export async function getStaticProps() {
  const posts = await getAllFilesMetadata()
  return {
    props: {posts},// Se deben devolver como un objeto
  }
}

// Recibos los post por props
export default function Home({posts}) {
  return (
    <div>


    <Header/>
      
      <main className='w-full flex justify-center '  >
      <div className='w-max flex justify-center align-middle'>
         
        </div> 
        {/* Render de articulos */}
        <div className={styles.grid}>
          <h2 className='text-center text-6xl font-bold leading-tight tracking-tight'>
            <span className="gradientText_animation">Últimos Artículos</span>
          </h2>
          {posts.map(post => (
            <Link href={`/${post.slug}`} key={post.slug} passHref legacyBehavior>
              <a className={styles.card}>
                <h2>{post.title} &rarr;</h2>
                <p>{post.date}</p>
              </a>
            </Link>
          ))}
        </div>

      </main>

      <Footer/>
      
    </div>
  )
}


