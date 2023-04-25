import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs'; // Puedes elegir otro tema si prefieres

const CodeBlock = ({ children, className }) => {
  const language = className ? className.replace(/language-/, '') : 'javascript';

  try {
    return (
      <SyntaxHighlighter language={language} style={docco}>
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
