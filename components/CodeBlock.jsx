// Este componente se encarga de renderizar el visór del bloques de código.

import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

import { railscasts  } from 'react-syntax-highlighter/dist/cjs/styles/hljs'; // Puedes elegir otro tema si prefieres

const CodeBlock = ({ children, className }) => {
  const language = className ? className.replace(/language-/, '') : 'javascript';

  try {
    return (
      <SyntaxHighlighter language={language} style={ railscasts }>
        {children.trim()}
      </SyntaxHighlighter>
    );
  } catch (error) {
    console.error(`Error highlighting code with language "${language}": ${error}`);
    return (
      <pre>
        <code className={className}>{children.trim()}</code>
      </pre>
    );
  }
};

export default CodeBlock;

/**   DOCUMENTACIÓN
 * CodeBlock
 *
 * Este componente se encarga de renderizar el visor de bloques de código con resaltado de sintaxis.
 * Utiliza la biblioteca 'react-syntax-highlighter' para lograr el resaltado de sintaxis.
 *
 * Uso:
 *
 * Importación del componente:
 *   import CodeBlock from './components/CodeBlock';
 *
 * Uso en la aplicación:
 *   <CodeBlock className="language-javascript">
 *     {`const message = 'Hello, world!';
 * console.log(message);`}
 *   </CodeBlock>
 *
 * Propiedades:
 *
 * - children (String): El contenido del bloque de código que se va a renderizar.
 * - className (String): La clase CSS que indica el lenguaje del bloque de código. La clase debe comenzar con 'language-' seguido del nombre del lenguaje.
 *
 * Estilos:
 *
 * El componente utiliza el tema 'railscasts' de 'react-syntax-highlighter'. Puedes cambiar el tema importando otro estilo desde la biblioteca 'react-syntax-highlighter' y reemplazando 'railscasts' en la propiedad 'style' de 'SyntaxHighlighter'.
 */
