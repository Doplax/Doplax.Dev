//Antiguo componente de MDX, hay que actualizarlo

import Link from 'next/link';
import styles from '../styles/Index.module.css';
import { PageTitle } from './PageTitle';


function LatestArticles({ posts }) {
  return (
    <>
      <PageTitle>Ultimos artículos</PageTitle>
      <div className={styles.grid}>
        {posts.map((post) => (
          <Link href={`/${post.slug}`} key={post.slug} passHref>
            <a className={styles.card}>
              <h2>{post.title} →</h2>
              <p>{post.date}</p>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}


export { LatestArticles }