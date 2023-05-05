import React, { useEffect } from "react";
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import {ThreeModel} from '../components/3d/ThreeModel';


export default function Pruebas() {
  const [counter, setCounter] = React.useState(0);

  const handleButton = () => {
    setCounter(counter + 1)
  }    

  useEffect(() => {
    document.title = `Counter ${counter}`
  },[(counter > 5)])

  
  
  return (
    <>
      {/*<Header/>*/}

    <ThreeModel></ThreeModel>


      {/*<Footer/>*/}
    </>
  );
}

