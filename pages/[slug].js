import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug, getFiles } from "../lib/mdx";
import MDXComponents from "../components/MDXComponents.js";
import { Layout } from '../components/Layout';
import ContentWrapper from '../components/ContentWrapper'; // Importa el componente ContentWrapper

export default function Post({ source, frontmatter }) {
  return (
    <Layout>
      <ContentWrapper> {/* Envuelve el contenido de MDXRemote con el componente ContentWrapper */}
        <h1 className="text-center text-3xl font-bold my-8">{frontmatter.title}</h1>
        <h4 className="text-center">{frontmatter.date}</h4>
        <MDXRemote {...source} components={MDXComponents} />
      </ContentWrapper>
    </Layout>
  );
}
export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug(params.slug);

  return {
    props: { source, frontmatter },
  };
}

export async function getStaticPaths() {
  const posts = await getFiles();
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
