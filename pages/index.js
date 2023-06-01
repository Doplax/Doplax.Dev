import Link from 'next/link'
import styles from '../styles/Index.module.css'
import { Header } from '../components/Header/Header' 
import { Footer } from '../components/Footer/Footer'
//import { PageTitle } from '../components/PageTitle'

import { getDatabase } from "../lib/notion";
import { Text } from "./[id].js";




// Recibos los post por props
export default function Home({posts}) {
  return (
    <>
      <Header/>
      
      <ol className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/${post.id}`}>
             <Text text={post.properties.Name.title} />
          </Link>
        </li>
      ))}
    </ol>

      <Footer/>
      
    </>
  )
}

export const getStaticProps = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const database = await getDatabase(databaseId);
  
  return {
    props: {
      posts: database,
    },
		// Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
};
