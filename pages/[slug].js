import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug, getFiles } from "../lib/mdx";
import MDXComponents from "../components/MDXComponents";
import { Layout } from '../components/Layout';


// Lo que se renderiza
export default function Post({ source, frontmatter }) {
  return (
    <Layout>
        <div className="col-span-full lg:col-span-8 lg:col-start-3">
            <h1 className="text-start text-white text-3xl font-bold m-8 mb-1">{frontmatter.title}</h1>
            <h4 className="text-left text-sm text-gray-400 mx-8 mb-8 ">{frontmatter.date}</h4>
        </div>

        <MDXRemote {...source} components={MDXComponents} />
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
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
