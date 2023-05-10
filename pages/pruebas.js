import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Header } from '../components/Header/Header' 
import { Footer } from '../components/Footer/Footer'
import  LiveCodeBlock  from '../components/LiveCodeEditor.js'


const sampleCode = `
function Example() {
  return (
    <div>
      <h1>Borrame Didac</h1>
    </div>
  );
}

render(<Example />);
`;

export default function Pruebas() {
  return (
    <>
      <Header/>
      
      <LiveCodeBlock code={sampleCode} />
      
      <Footer/>
    </>
  );
}
