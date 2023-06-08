//// Este componente se encarga de renderizar el visór del bloques de código.

//import React from 'react';
//import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

//import { railscasts  } from 'react-syntax-highlighter/dist/cjs/styles/hljs'; // Puedes elegir otro tema si prefieres

//const CodeBlock = ({ children, className }) => {
//  const language = className ? className.replace(/language-/, '') : 'javascript';

//  try {
//    return (
//      <SyntaxHighlighter language={language} style={ railscasts }>
//        {children.trim()}
//      </SyntaxHighlighter>
//    );
//  } catch (error) {
//    console.error(`Error highlighting code with language "${language}": ${error}`);
//    return (
//      <pre>
//        <code className={className}>{children.trim()}</code>
//      </pre>
//    );
//  }
//};

//export default CodeBlock;

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
