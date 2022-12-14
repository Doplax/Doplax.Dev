// Los corchetes le estan diciendo a NEXT 
//que lo de dentro es un parametro dimamico, 
// y el slug sera lo que cambiará
import {MDXRemote} from "next-mdx-remote" // Transforma el source que nos llega al leer el fichero en componentes (jsx en este caso) para que rencerice el mark down a el HTML final 
import { getFileBySlug, getFiles } from "../lib/mdx"
    import MDXComponents from '../components/MDXComponents.js'

export default function Post({ source, frontmatter}) {
    return <MDXRemote {...source} components={MDXComponents}/>
}

// Saca el contenido y la data
// Params es el slug que esta como parametro en el nombre del fichero
export async function getStaticProps({params}){
    //esta funcion esta definida en mdx.js
    const {source, frontmatter} = await getFileBySlug(params.slug)

    return {
        props: {source, frontmatter},
    };
}

// 
export async function getStaticPaths() {
    const posts = await getFiles();
    const paths = posts.map((post) => ({
        params: {
            slug: post.replace(/\.mdx/, ""),
        },
    }))

    return{
        paths,
        // Si lo ponemos en false, cuando no encuentre la ruat dará un error 404
        fallback: false
    }
}

