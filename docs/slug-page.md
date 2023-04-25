# Página [slug]

El archivo `[slug].js` en la carpeta `pages` es el encargado de renderizar el contenido de los posts en formato MDX.

## Cómo funciona

El componente `Post` recibe el contenido y los metadatos del archivo MDX correspondiente al slug proporcionado. Envuelve el contenido con el componente `Layout` para incluir el `Header` y el `Footer` en la página.

## Funciones utilizadas

### getStaticProps

La función `getStaticProps` recibe el objeto `params` con el slug del post y llama a la función `getFileBySlug` para obtener el contenido y los metadatos del archivo MDX. Retorna estos datos como props para el componente `Post`.

### getStaticPaths

La función `getStaticPaths` genera las rutas estáticas para los posts. Utiliza la función `getFiles` para obtener la lista de archivos MDX en la carpeta `posts` y crea un objeto de rutas con el slug correspondiente. El fallback se establece en `false`, lo que significa que si no se encuentra una ruta, se mostrará un error 404.
