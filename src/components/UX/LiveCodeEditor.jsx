import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import CodeBlock from "./CodeBlock";
import PrismTheme from "prism-react-renderer/themes/nightOwl";

const LiveCodeEditor = ({ code, editable = false }) => {
  return (
    <LiveProvider code={code} theme={PrismTheme} noInline>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <div style={{ marginRight: "1rem" }}>
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

/**
 * LiveCodeEditor
 *
 * Este componente combina las funcionalidades de mostrar código estático resaltado con sintaxis y
 * código editable con una vista previa en vivo.
 *
 * Uso:
 *
 * Importación del componente:
 *   import { CombinedLiveCode } from './components/CombinedLiveCode';
 *
 * Mostrando código estático resaltado:
 *   <CombinedLiveCode code={`const message = 'Hello, world!';
 * console.log(message);`} />
 *
 * Mostrando código editable con vista previa en vivo:
 *   <CombinedLiveCode editable code={`const message = 'Hello, world!';
 * console.log(message);`} />
 *
 * Propiedades:
 *
 * - code (String): Código fuente para mostrar en el componente.
 * - editable (Boolean): Si es `true`, muestra un editor en vivo en lugar del código resaltado estático. Por defecto es `false`.
 */
