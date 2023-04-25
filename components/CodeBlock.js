import React from 'react';
import Prism from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl'; // Puedes elegir otro tema si prefieres

const CodeBlock = ({ children, className }) => {
  const language = className.replace(/language-/, '');

  return (
    <Prism code={children.trim()} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Prism>
  );
};

export default CodeBlock;
