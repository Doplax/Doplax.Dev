// components/LiveCode.js
import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import CodeBlock from './CodeBlock';
import PrismTheme from 'prism-react-renderer/themes/nightOwl';

const LiveCode = ({ code }) => {
  return (
    <LiveProvider code={code} theme={PrismTheme} noInline>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1, paddingRight: 10 }}>
          <CodeBlock className="language-javascript">{code}</CodeBlock>
          <LiveEditor style={{ display: 'none' }} />
        </div>
        <div style={{ flex: 1 }}>
          <LivePreview />
        </div>
      </div>
      <LiveError />
    </LiveProvider>
  );
};

export {LiveCode};
