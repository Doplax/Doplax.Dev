import React, { useEffect } from "react";
export default function Pruebas() {
  const [counter, setCounter] = React.useState(0);

  const handleButton = () => {
    setCounter(counter + 1)
  }    

  useEffect(() => {
    document.title = `Counter ${counter}`
  },[(counter > 5)])

  
  
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col text-center">
        <p>{counter}</p>
        <button
          type="button"
          className="rounded-lg bg-blue-500 p-1"
          onClick={handleButton}
        >button</button>
        {(counter < 5 ) ? 'Counter es más pequeño' : 'Más grande'}
      </div>
    </div>
  );
}

