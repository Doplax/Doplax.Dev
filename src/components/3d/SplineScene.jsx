import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

const SplineScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const canvas = canvasRef.current;
    const app = new Application(canvas);
    app.load('https://prod.spline.design/ixYvKr1Q9GCMZWdZ/scene.splinecode');

    // Detener el ciclo de actualización (animation loop) al desmontar el componente
    return () => {
      app.stop();
    };
  }, [canvasRef]);

  return <canvas id="canvas3d" ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export  {SplineScene};
