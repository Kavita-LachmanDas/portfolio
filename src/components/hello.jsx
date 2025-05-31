import React, { useState, useEffect } from 'react';

import Hero from './Hero';


const LoadingReveal = () => {
  const [animationStage, setAnimationStage] = useState('growing'); // 'growing', 'splitting', 'revealed'

  useEffect(() => {
    // Line grows for 2 seconds
    const timer1 = setTimeout(() => {
      setAnimationStage('splitting');
    }, 2000);

    // Content reveals after split
    const timer2 = setTimeout(() => {
      setAnimationStage('revealed');
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

 

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Loading Stage */}
      {animationStage === 'growing' && (
        <div className="fixed inset-0 bg-gray-500 flex items-center justify-center z-50">
          <div 
            className="h-1 bg-black rounded-full transition-all duration-2000 ease-in-out"
            style={{
              width: animationStage === 'growing' ? '300px' : '0px'
            }}
          />
        </div>
      )}

      {/* Splitting Curtains */}
      {(animationStage === 'splitting' || animationStage === 'revealed') && (
        <>
          {/* Left Curtain */}
          <div 
            className={`fixed top-0 left-0 w-1/2 h-full bg-gray-500 z-40 transition-transform duration-1000 ease-in-out ${
              animationStage === 'revealed' ? '-translate-x-full' : 'translate-x-0'
            }`}
          >
            {/* Loading line on left curtain */}
            <div className="absolute top-1/2 right-0 w-150 h-1 bg-black transform -translate-y-1/2" />
          </div>

          {/* Right Curtain */}
          <div 
            className={`fixed top-0 right-0 w-1/2 h-full bg-gray-500 z-40 transition-transform duration-1000 ease-in-out ${
              animationStage === 'revealed' ? 'translate-x-full' : 'translate-x-0'
            }`}
          >
            {/* Loading line on right curtain */}
            <div className="absolute top-1/2 left-0 w-150 h-1 bg-black transform -translate-y-1/2" />
          </div>
        </>
      )}

  

        {/* Hero Content */}
        {/* <div className="bg-white"> */}
   <Hero/>
   
       {/* </div> */}
         </div>
   
  );
};

export default LoadingReveal;