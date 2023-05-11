import React from 'react';
import { Layout } from '../components/Layout';
import  {LiveCodeEditor}  from '../components/LiveCodeEditor'

import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';




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
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faHeart} />
      <FontAwesomeIcon icon={faCode} />
        <LiveCodeEditor editable  code={sampleCode} />

      </Layout>
      
    </>
  );
}
