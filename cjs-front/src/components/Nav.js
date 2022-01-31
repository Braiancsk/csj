import React from 'react';
import 'hamburgers/dist/hamburgers.css'
import {useRef} from 'react'
export default function Nav() {

 
  const burger = useRef(null)
  const menu = useRef(null)
  const bg = useRef(null)

  
  function handleMenu(){
  
    burger.current.classList.toggle('is-active')

    if(burger.current.classList.contains('is-active')){
        document.body.style.overflow = 'hidden';
        menu.current.classList.remove('unactive')
        bg.current.classList.remove('unactive')
    }else{
      document.body.style.overflow = 'auto';
        menu.current.classList.add('unactive')
        bg.current.classList.add('unactive')
    }
  }

  function handleCloseMenu(){
    burger.current.classList.toggle('is-active')
    document.body.style.overflow = 'auto';
    menu.current.classList.add('unactive')
    bg.current.classList.add('unactive')
  }


  return (
      <div className="bg-gradient-to-r from-[#00282E] to-[#000000] py-[25px] px-[30px]  z-20">

        <div onClick={handleCloseMenu} ref={bg} className="fixed left-0 top-0 right-0 mx-auto bg-black/80 p-[20px] h-screen w-full unactive"></div>
          <div ref={menu} className="fixed left-0 top-0 bg-black/80 p-[20px] h-screen w-[70%] transition unactive">
          <ul className="flex flex-col gap-3">
                <li className="list-none"><a onClick={handleCloseMenu} href="#ships" className="no-underline text-white text-2xl">Ships</a></li>
                <li className="list-none"><a onClick={handleCloseMenu} href="#gameplay" className="no-underline text-white text-2xl">Gameplay</a></li>
                <li className="list-none"><a onClick={handleCloseMenu} href="#roadmap" className="no-underline text-white text-2xl">Roadmap</a></li>
                <li className="list-none"><a onClick={handleCloseMenu} href="#tokenomics" className="no-underline text-white text-2xl">Tokenomics</a></li>
                <li className="list-none"><a onClick={handleCloseMenu} href="#team" className="no-underline text-white text-2xl">Team</a></li>
                <li className="list-none"><a onClick={handleCloseMenu} href="#partners" className="no-underline text-white text-2xl">Partners</a></li>
            </ul>
          </div>


          <div className="container flex justify-between items-center">
            <div className="">
                <h1 className="text-[#00C2FF] shadow-text text-2xl">Crypto Space Journey</h1>
            </div>

            <ul className="hidden md:flex items-center gap-3 ">
                <li className="list-none"><a href="#ships" className="no-underline text-white">Ships</a></li>
                <li className="list-none"><a href="#gameplay" className="no-underline text-white">Gameplay</a></li>
                <li className="list-none"><a href="#roadmap" className="no-underline text-white">Roadmap</a></li>
                <li className="list-none"><a href="#tokenomics" className="no-underline text-white">Tokenomics</a></li>
                <li className="list-none"><a href="#team" className="no-underline text-white">Team</a></li>
                <li className="list-none"><a href="#partners" className="no-underline text-white">Partners</a></li>
            </ul>

            <div className="md:hidden mt-3">
            <button ref={burger} onClick={handleMenu} className="hamburger hamburger--elastic" type="button"
             aria-label="Menu" aria-controls="navigation">
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
            </button>
            </div>
           
          </div>
      </div>
  )
}
