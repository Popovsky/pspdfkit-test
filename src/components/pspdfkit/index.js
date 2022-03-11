import React, { FC, useEffect, useRef } from 'react';
import PSPDFKit from 'pspdfkit';

const PdfViewerComponent = ({ document }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    console.log('container', container);
    (async function() {
      await PSPDFKit.load({
        container,
        document,
        baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100vh" }}/>
  );
}

export default PdfViewerComponent;
