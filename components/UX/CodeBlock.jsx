import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import ColorTheme  from 'react-syntax-highlighter/dist/cjs/styles/prism/darcula'; // Para cambiar de tema, cambiar la ultima parte de la importacion


//import { railscasts  } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const CodeBlock = ({node, inline}) => {
  if (inline) {
    return (
      <code className={node.properties.className}>
        {node.children[0].value}
      </code>
    )
  }
  
  const language = node.properties.className[0].replace(/language-/, '');
  const code = node.children[0].value; // Esto quitará "javascriptCopy code"
  
  try {
    return (
      <SyntaxHighlighter language={language} style={ColorTheme}>
        {code}
      </SyntaxHighlighter>
    );
  } catch (error) {
    console.error(`Error highlighting code with language "${language}": ${error}`);
    return (
      <pre>
        <code className={node.properties.className}>{code}</code>
      </pre>
    );
  }
};

export default CodeBlock;
