import { MDXRemote } from "next-mdx-remote"; // Importa el componente MDXRemote de la librería next-mdx-remote que se utiliza para renderizar código Markdown como componentes JSX
import { getFileBySlug, getFiles } from "../lib/mdx"; // Importa las funciones getFileBySlug y getFiles del archivo mdx.js de la carpeta lib
import MDXComponents from "../components/MDXComponents.js"; // Importa los componentes personalizados que se utilizan en los archivos Markdown

// Define el componente Post que se utiliza para mostrar los archivos Markdown
export default function Post({ source, frontmatter }) {
  return <MDXRemote {...source} components={MDXComponents} />;
}

// Obtiene el contenido y los metadatos del archivo Markdown
// Params es el slug que está como parámetro en el nombre del fichero
export async function getStaticProps({ params }) {
  // Llama a la función getFileBySlug para obtener el contenido y los metadatos del archivo Markdown
  const { source, frontmatter } = await getFileBySlug(params.slug);

  return {
    props: { source, frontmatter },
  };
}

// Obtiene los slugs de los archivos Markdown y los utiliza para crear los paths de las rutas
export async function getStaticPaths() {
  const posts = await getFiles(); // Llama a la función getFiles para obtener los nombres de los archivos Markdown
  const paths = posts.map((post) => ({
    // Crea un objeto para cada archivo con el slug obtenido a partir del nombre del archivo
    params: {
      slug: post.replace(/\.mdx/, ""), // Remueve la extensión .mdx del nombre del archivo
    },
  }));

  return {
    paths,
    fallback: false, // Si fallback es false, cuando no encuentre la ruta dará un error 404
  };
}
