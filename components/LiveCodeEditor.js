import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import CodeBlock from './CodeBlock';
import PrismTheme from 'prism-react-renderer/themes/nightOwl';

const LiveCodeEditor = ({ code, editable = false }) => {
  return (
    <LiveProvider code={code} theme={PrismTheme} noInline>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
        <div style={{ marginRight: '1rem' }}>
          {editable ? (
            <>
              <h3>Código editable:</h3>
              <LiveEditor />
            </>
          ) : (
            <>
              <h3>Código:</h3>
              <CodeBlock className="language-javascript">{code}</CodeBlock>
            </>
          )}
          <LiveError />
        </div>
        <div>
          <h3>Live Preview:</h3>
          <LivePreview />
        </div>
      </div>
    </LiveProvider>
  );
};

export { LiveCodeEditor };
