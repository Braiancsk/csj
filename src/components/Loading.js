import React from 'react';

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 mx-auto w-full h-screen flex items-center justify-center bg-[#191919] z-20">
    <div className="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    </div>
    
  )
}
