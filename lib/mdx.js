import fs from "fs"; // Módulo Node.js que proporciona una API para interactuar con el sistema de archivos
import path from "path"; // Módulo Node.js que proporciona herramientas para trabajar con rutas de archivos y directorios
import matter from "gray-matter"; // Librería que analiza el Front Matter de los archivos MDX
import { serialize } from "next-mdx-remote/serialize"; // Función que convierte el contenido de los archivos MDX a un formato serializable

// Ruta raíz de la aplicación
const root = process.cwd();

// Función que obtiene los nombres de todos los archivos MDX
export const getFiles = () => {
    // La función es síncrona porque se llama durante el tiempo de construcción de la aplicación
    return fs.readdirSync(path.join(root, "data"));
};

// Función que obtiene el contenido de un archivo MDX específico
export const getFileBySlug = async (slug) => {
    const mdxSource = fs.readFileSync(
        path.join(root, "data", `${slug}.mdx`),
        "utf-8"
    );

    // Analiza el Front Matter y el contenido del archivo MDX
    const { data, content } = await matter(mdxSource);

    // Convierte el contenido del archivo MDX a un formato serializable
    const source = await serialize(content, {});

    return {
        source,
        frontmatter: {
            slug,
            ...data,
        },
    };
};

// Función que obtiene la información de todos los archivos MDX
export const getAllFilesMetadata = () => {
    const files = getFiles();

    return files.reduce((allPosts, postSlug) => {
        const mdxSource = fs.readFileSync(
            path.join(root, "data", postSlug),
            "utf-8"
        );
        const { data } = matter(mdxSource);

        return [{ ...data, slug: postSlug.replace(".mdx", "") }, ...allPosts];
    }, []);
};

