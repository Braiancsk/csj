import React from 'react';
import telegram from '../assets/telegram.png'
import discord from '../assets/discord.png'
import twitter from '../assets/twitter.png'
import{Link} from 'react-router-dom'
export default function Footer() {
  return (
      <footer className="p-10">
          <div className="container flex flex-wrap justify-between items-center text-white max-w-[1200px]">

            <div className="logo md:w-auto w-full flex justify-center">
                <Link to="/" className="shadow-text text-3xl">Crypto Space Journey</Link>
            </div>

            <div className="flex md:flex-row flex-col items-center md:items-start md:w-auto w-full gap-3 mt-5 md:mt-0">
                <h4 className="shadow-text uppercase text-3xl">share:</h4>

                <a href="#" className="flex flex-col items-center">
                    <img src={telegram} alt="icone do telegram" className="mb-2"/>
                    <h5 className="shadow-text uppercase text-[16px]">Telegram</h5>
                </a>

                <a href="#" className="flex flex-col items-center">
                    <img src={discord} alt="icone do telegram" className="mb-2"/>
                    <h5 className="shadow-text uppercase text-[16px]">Discord</h5>
                </a>

                <a href="#" className="flex flex-col items-center">
                    <img src={twitter} alt="icone do telegram" className="mb-2"/>
                    <h5 className="shadow-text uppercase text-[16px]">Twitter</h5>
                </a>
            </div>
          </div>
      </footer>
  )
}
