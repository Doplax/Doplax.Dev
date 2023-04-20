import fs from "fs"// Vine instalado por defecto
import path from "path";
import matter from "gray-matter";
import { serialize } from 'next-mdx-remote/serialize'


//Ruta raiz
const root = process.cwd();


export const getFiles = () => {
    // La funcion es Sincrona pq se van a llamar en tiempo de building
    return fs.readdirSync(path.join(root, "data"))

};

//Nos devolverá un unico fichero por la ruta, utilizara el slug (o endpoint) para buscar el fichero por su id
export const getFileBySlug = async (slug) => {
    const mdxSource = fs.readFileSync(path.join(root, "data", `${slug}.mdx`), "utf-8");


    //Data seran los "metadatos" y content el contenido del articulo
    const {data,content} = await matter(mdxSource);

    // podriamos importar un plugin para resaltar el codigo que se llama "markdown prism"
    const source = await serialize(content, {})

    return {
        source,
        frontmatter: {
        slug,
        ...data}
    }
};

export const getAllFilesMetadata = () => {

    //const files = fs.readdirSync(path.join(root,"data")); // Podemos llamr los ficheros directamente
    const files = getFiles();

    return files.reduce((allPosts, postSlug) => {
        const mdxSource = fs.readFileSync(path.join(root, "data", postSlug), "utf-8")
        const {data} = matter(mdxSource);

        return[{...data, slug:postSlug.replace(".mdx","")}, ...allPosts]
    },[]); // Hay que inicializarlo con un array vacio
    
};


