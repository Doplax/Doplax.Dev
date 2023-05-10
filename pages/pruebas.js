import React from 'react';
import { Layout } from '../components/Layout';
import  {LiveCodeEditor}  from '../components/LiveCodeEditor'


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
      
      <Layout>

        <LiveCodeEditor editable  code={sampleCode} />

      </Layout>
      
    </>
  );
}
