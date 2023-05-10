import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
//import CodeBlock from '../components/CodeBlock';

export default function LiveCodeBlock({ code }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
      <div style={{ marginRight: '1rem' }}>
        <h3>Código editable:</h3>
        <LiveProvider   LiveProvider code={code}  noInline>
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </div>
      <div>
        <h3>Live Preview:</h3>
        <LiveProvider code={code}  noInline>
          <LivePreview />
        </LiveProvider>
      </div>
    </div>
  );
}
