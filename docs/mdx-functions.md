# Funciones MDX

El archivo `lib/mdx.js` contiene varias funciones relacionadas con los archivos MDX del proyecto.

## getFiles()

Obtiene los nombres de todos los archivos MDX almacenados en la carpeta `data`.

## getFileBySlug(slug)

Dado un `slug`, obtiene el contenido y los metadatos de un archivo MDX específico en la carpeta `data`. Retorna un objeto con el contenido serializado y el Front Matter del archivo.

## getAllFilesMetadata()

Obtiene la información de todos los archivos MDX almacenados en la carpeta `data`. Retorna un array de objetos con los metadatos y el slug de cada archivo.

