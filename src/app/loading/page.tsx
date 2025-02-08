import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
       <div
        className="loader"
        style={{
          width: '50px',
          padding: '8px',
          aspectRatio: '1',
          borderRadius: '50%',
          background: '#25b09b',
          mask: `
            conic-gradient(#0000 10%, #000),
            linear-gradient(#000 0 0) content-box
          `,
          WebkitMask: `
            conic-gradient(#0000 10%, #000),
            linear-gradient(#000 0 0) content-box
          `,
          maskComposite: 'subtract',
          WebkitMaskComposite: 'source-out',
          animation: 'l3 1s infinite linear',
        }}
      ></div>

      <style>
        {`
          @keyframes l3 {
            to { transform: rotate(1turn); }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;