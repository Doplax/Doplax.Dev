Para cambiar los estilos:
[Repo](https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_HLJS.MD)



Mejores 
- railscasts
- pojoaque
- obsidian
- monokai
- vs2015
- shadesOfPurple
- tomorrowNightEighties



Lo siento por el error anterior, en React Markdown versión 7+ necesitas cambiar la forma en que configuras los componentes personalizados.

En lugar de recibir "children" y "className" como props, el componente "code" recibirá los props "node" y "inline". El "node.children" contendrá el código y el "node.className" contendrá el lenguaje de programación.

Tu componente CodeBlock necesitaría ser reescrito de la siguiente manera:

jsx
Copy code
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { railscasts  } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const CodeBlock = ({node, inline}) => {
  if (inline) {
    return (
      <code className={node.properties.className}>
        {node.children[0].value}
      </code>
    )
  }
  
  const language = node.properties.className[0].replace(/language-/, '');
  try {
    return (
      <SyntaxHighlighter language={language} style={railscasts}>
        {node.children[0].value.trim()}
      </SyntaxHighlighter>
    );
  } catch (error) {
    console.error(`Error highlighting code with language "${language}": ${error}`);
    return (
      <pre>
        <code className={node.properties.className}>{node.children[0].value.trim()}</code>
      </pre>
    );
  }
};

export default CodeBlock;
Y en tu componente ReactMarkdown:

jsx
Copy code
<ReactMarkdown components={{ code: CodeBlock }}>
  {markdown}
</ReactMarkdown>
Ahora, cada vez que react-markdown encuentre un nodo de código, utilizará tu componente CodeBlock para renderizarlo, lo que debería dar como resultado un correcto resaltado de la sintaxis.

Por último, asegúrate de que estás usando la última versión de react-markdown para que puedas aprovechar este estilo de configuración de componentes personalizados.