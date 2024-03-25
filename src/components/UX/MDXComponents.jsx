// components/MDXComponents.js
import CodeBlock from "./CodeBlock";

const MDXComponents = {
  // ...otros componentes personalizados
  code: CodeBlock,
};

export default MDXComponents;

/** DOCUMENTACIÓN
 * MDXComponents
 *
 * Este archivo contiene una colección de componentes personalizados para ser utilizados
 * en documentos MDX.
 *
 * Uso:
 *
 * Importación de los componentes personalizados:
 *   import MDXComponents from './components/MDXComponents';
 *
 * Uso con el componente MDXProvider:
 *   import { MDXProvider } from '@mdx-js/react';
 *
 *   <MDXProvider components={MDXComponents}>
 *     <MDXDocument />
 *   </MDXProvider>
 *
 * Componentes incluidos:
 *
 * - code (CodeBlock): Un componente personalizado para mostrar bloques de código con resaltado de sintaxis.
 *                     (puedes agregar más componentes personalizados en el objeto MDXComponents)
 */
