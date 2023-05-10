import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Header } from '../components/Header/Header' 
import { Footer } from '../components/Footer/Footer'
import CodeBlock from '../components/CodeBlock';


const sampleCode = `
function Example() {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}

render(<Example />);
`;

export default function Pruebas() {
  return (
    <>
      <Header/>
      
      <LiveProvider code={sampleCode}  noInline>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
          <div style={{ marginRight: '1rem' }}>
            <h3>Código editable:</h3>
            <LiveEditor />
            <LiveError />
          </div>
          <div>
            <h3>Live Preview:</h3>
            <LivePreview />
          </div>
        </div>
      </LiveProvider>
      
      <Footer/>
    </>
  );
}
