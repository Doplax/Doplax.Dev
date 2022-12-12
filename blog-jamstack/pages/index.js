import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


import { getAllFilesMetadata } from '../lib/mdx'


// Recibos los post por props
export default function Home({posts}) {
  return (
    <div className={styles.container}>
      <Head>
        {/* Nombre de la pestaña del navegador */}
        <title>Doplax.Dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}


export async function getStaticProps() {
  const posts = await getAllFilesMetadata()
  console.log(posts)
  return {
    props: {posts},// Se deben devolver como un objeto
  }
}