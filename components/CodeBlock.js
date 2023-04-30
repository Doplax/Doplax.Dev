// Este componente se encarga de renderizar el visór del bloques de código.

import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark  } from 'react-syntax-highlighter/dist/cjs/styles/hljs'; // Puedes elegir otro tema si prefieres

const CodeBlock = ({ children, className }) => {
  const language = className ? className.replace(/language-/, '') : 'javascript';

  try {
    return (
      <SyntaxHighlighter language={language} style={atomOneDark }>
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
