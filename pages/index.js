import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { getAllFilesMetadata } from '../lib/mdx'
import { Header } from '../components/Header/Header' 
import { Footer } from '../components/Footer/Footer'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export async function getStaticProps() {
  const posts = await getAllFilesMetadata()
  console.log(posts)
  return {
    props: {posts},// Se deben devolver como un objeto
  }
}

// Recibos los post por props
export default function Home({posts}) {
  return (
    <div>


    <Header/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          
        </h1>
        
        <div className={styles.grid}>
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


