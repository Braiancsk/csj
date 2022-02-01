import React from 'react';

//components
import Slide from '../components/Slide'
import Gameplay from '../components/Gameplay'
import PrimaryButton from '../components/PrimaryButton'
import Chart from '../components/Chart'
import Card from '../components/Card'
//imagems
import arrow from '../assets/arrow-down.svg'
import gameplay from '../assets/gameplay.png'
import planet1 from '../assets/planet-1.png'
import planet2 from '../assets/planet-2.png'
import planet3 from '../assets/planet-3.png'
import planet4 from '../assets/planet-4.png'
import planet5 from '../assets/planet-5.png'
import planet6 from '../assets/planet-6.png'
import ship from '../assets/ship.png'
import arrowRight from '../assets/arrow-right.svg'
import team from '../assets/card.png'
import partner from '../assets/partner.png'
//icones
import { IoMdArrowDropup } from 'react-icons/io';
import Partner from '../components/Partner';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
      <div>
        <div className="bg-hero-pattern bg-black bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
          <Link to="/cards" className="p-[49px] block max-w-[327px] w-full border-0 bg-[#2B6688] text-white text-center rounded-[20px] shadow-btn text-3xl uppercase mt-[165px]">Whitelist</Link>
        
            <a href="#" className="text-[#00C2FF] mt-3">Subscribe to our newsletter</a>

            <h6 href="#" className="text-white text-3xl mt-[82px] uppercase">See more</h6>
            <img src={arrow} alt="seta apontando para baixo" className="mt-7 pb-[122px]"/>
        </div>

   
        <div className="bg-[#003452] py-[41px] text-center">
            <h2 className="uppercase text-[#00C2FF] text-3xl text-shadow break-words">Contract: <br/>0x9c9fA5994Bf0B83b0ad6E6Eb393CeB0662DcAFac</h2>
        </div>
     
       

        <div id="ships" className="bg-[#003452] py-[41px] text-center">
            <h2 className="uppercase text-[#00C2FF] text-3xl text-shadow">Ships</h2>
        </div>

        <div className="bg-ships py-[60px] darker px-5">
            <Slide/>
        </div>

        <div id="gameplay" className="bg-[#003452] py-[41px] text-center">
            <h2 className="uppercase text-[#00C2FF] text-3xl text-shadow">Gameplay</h2>
        </div>

        <div className="gradient-gameplay py-[60px] px-10">
            <div className="md:flex justify-between container">

            <div className="md:max-w-[50%] w-full flex items-center">
            <img src={gameplay} className="max-w-full h-auto" alt="naves do jogo"/>
            </div>
            

            <div className="md:max-w-[50%] w-full">

                <div className="flex justify-center md:justify-start w-full my-5">
                <Gameplay
                title="PvP RACING"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem iaculis eget urna, varius molestie proin ac convallis odio. Augue morbi et ultrices ipsum leo. Aliquam pulvinar urna sollicitudin vitae mattis vulputate rutrum felis. "
                />
                </div>

                <div className="flex justify-center md:justify-end w-full">
                <Gameplay
                title="tRADING"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem iaculis eget urna, varius molestie proin ac convallis odio. Augue morbi et ultrices ipsum leo. Aliquam pulvinar urna sollicitudin vitae mattis vulputate rutrum felis. "
                />
                </div>
                
                <div className="flex justify-center md:justify-start w-full my-5">
                <Gameplay
                title="Upgrade Ships"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem iaculis eget urna, varius molestie proin ac convallis odio. Augue morbi et ultrices ipsum leo. Aliquam pulvinar urna sollicitudin vitae mattis vulputate rutrum felis. "
                />
                </div>

                <div className="flex justify-center md:justify-end w-full">
                <Gameplay
                title="Gambling"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem iaculis eget urna, varius molestie proin ac convallis odio. Augue morbi et ultrices ipsum leo. Aliquam pulvinar urna sollicitudin vitae mattis vulputate rutrum felis. "
                />
                </div>
            </div>

            </div>
            
            <div className="flex justify-center my-5">
            <PrimaryButton name="Start your journey"/>
            </div>
        </div>

        <div id="roadmap" className="bg-[#003452] py-[41px] text-center">
            <h2 className="uppercase text-[#00C2FF] text-3xl text-shadow">ROADMAP</h2>
        </div>

        <div className="bg-roadmap bg-center bg-cover bg-no-repeat py-[60px]">
            <div className="container p-12 border-container">
            
            <div className="flex flex-wrap justify-around">
                
            <div className="relative max-w-[342px] w-full mt-12 flex flex-col items-center">
            <div className="max-w-[342px] mt-12">
            <img src={planet1} alt="planetas do jogo" className="max-w-[187px] h-auto"/>
            <img src={ship} alt="planetas do jogo" className="max-w-full h-auto absolute top-[-20px] z-10"/>
            </div>
        

            <div className="relative mt-2 w-full">
            <h6 className="bg-[#171923] p-2 text-white">Here’s a regular tooltip with some text inside of it that’s supposed to be substantially large.</h6>
            <IoMdArrowDropup className="absolute top-[-17px] left-[50%] text-[#171923] text-3xl"/>

            <div className="mt-[200px] block xl:hidden rotate-90">
                <img src={arrowRight} alt="seta apontando para a direita" />
            </div>
            </div>   

            <div className="absolute right-[-100px] top-[20%] xl:block hidden">
                <img src={arrowRight} alt="seta apontando para a direita" />
            </div>
            </div>

            <div className="relative max-w-[342px] w-full md:mt-12">
            <div className="flex justify-center mt-12">
            <img src={planet2} alt="planetas do jogo" className="max-w-[182px] w-full h-auto"/>
            </div>
        

            <div className="relative mt-2">
            <h6 className="bg-[#171923] p-2 text-white">Here’s a regular tooltip with some text inside of it that’s supposed to be substantially large.</h6>
            <IoMdArrowDropup className="absolute top-[-17px] left-[50%] text-[#171923] text-3xl"/>
            <div className="mt-[200px] block xl:hidden rotate-90">
                <img src={arrowRight} alt="seta apontando para a direita" />
            </div>
            </div>   

            <div className="absolute right-[-40px] top-[20%] xl:block hidden">
                <img src={arrowRight} alt="seta apontando para a direita" />
            </div>
            </div>

            
            <div className="relative max-w-[342px] w-full md:mt-8 pb-[180px] md:pb-[200px]">
            <div className="flex justify-center mt-12">
            <img src={planet3} alt="planetas do jogo" className="max-w-[182px] w-full h-auto"/>
            </div>
        

            <div className="relative mt-2">
            <h6 className="bg-[#171923] p-2 text-white">Here’s a regular tooltip with some text inside of it that’s supposed to be substantially large.</h6>
            <IoMdArrowDropup className="absolute top-[-17px] left-[50%] text-[#171923] text-3xl"/>
            </div>   

            <div className="absolute right-0 left-0 bottom-[-40px] rotate-90">
                <img src={arrowRight} alt="seta apontando para a direita" />
            </div>
            </div>
            </div>

       
            <div className="flex flex-wrap justify-around">

            <div className="relative max-w-[342px] w-full md:mt-12 md:pb-[200px]">
            <div className="flex justify-center mt-12">
            <img src={planet4} alt="planetas do jogo" className="max-w-[182px] w-full h-auto"/>
            </div>
            <div className="relative mt-2">
            <h6 className="bg-[#171923] p-2 text-white">Here’s a regular tooltip with some text inside of it that’s supposed to be substantially large.</h6>
            <IoMdArrowDropup className="absolute top-[-17px] left-[50%] text-[#171923] text-3xl"/>
            <div className="mt-[200px] block xl:hidden rotate-90">
                <img src={arrowRight} alt="seta apontando para a direita" />
            </div>  
            </div>   
            </div>

            <div className="relative max-w-[342px] w-full md:mt-12">
            <div className="flex justify-center mt-12">
            <img src={planet5} alt="planetas do jogo" className="max-w-[182px] w-full h-auto"/>
            </div>
            <div className="relative mt-2">
            <h6 className="bg-[#171923] p-2 text-white">Here’s a regular tooltip with some text inside of it that’s supposed to be substantially large.</h6>
            <IoMdArrowDropup className="absolute top-[-17px] left-[50%] text-[#171923] text-3xl"/>
            <div className="mt-[200px] block xl:hidden rotate-90">
                <img src={arrowRight} alt="seta apontando para a direita" />
            </div>
            </div>   
            <div className="absolute left-[-40px] top-[30%] xl:block hidden rotate-180">
                <img src={arrowRight} alt="seta apontando para a direita" />
            </div>
            </div>

            <div className="relative max-w-[342px] w-full md:mt-12">
            <div className="flex justify-center mt-12">
            <img src={planet6} alt="planetas do jogo" className="max-w-[182px] w-full h-auto"/>
            </div>
            <div className="relative mt-2">
            <h6 className="bg-[#171923] p-2 text-white">Here’s a regular tooltip with some text inside of it that’s supposed to be substantially large.</h6>
            <IoMdArrowDropup className="absolute top-[-17px] left-[50%] text-[#171923] text-3xl"/>
         
            </div>   
            <div className="absolute left-[-40px] top-[30%] xl:block hidden rotate-180">
                <img src={arrowRight} alt="seta apontando para a direita" />
            </div>
            </div>

            </div>
            </div>  
        </div>

        <div id="tokenomics" className="bg-[#003452] py-[41px] text-center">
            <h2 className="uppercase text-[#00C2FF] text-3xl text-shadow">Tokenomics</h2>
        </div>

        <div className="toke-bg p-[20px]">
            <h2 className="text-center text-3xl text-white mb-[54px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sed tortor fusce.</h2>

            <div className="container border-chart p-[20px] md:p-[50px] flex justify-center">
            <Chart/>
            </div>

            <h2 className="text-center text-3xl text-white mt-[28px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sed tortor fusce.</h2>

            <div className="flex justify-center pt-[100px]">
            <PrimaryButton name="LAUNCH YOUR SHIPS"/>
            </div>
           
        </div>

        <div id="team" className="bg-[#003452] py-[41px] text-center">
            <h2 className="uppercase text-[#00C2FF] text-3xl text-shadow">Team</h2>
        </div>

        <div className="bg-team bg-center bg-cover bg-no-repeat py-[60px]">
            <div className="flex flex-wrap justify-center gap-20 container px-2">
                <Card
                title="CSJ - 01"
                id="045418132-8"
                image={team}
                name="jOHN dOE"
                sector="Development"
                />

                <Card
                title="CSJ - 01"
                id="045418132-8"
                image={team}
                name="jOHN dOE"
                sector="Development"
                />

                <Card
                title="CSJ - 01"
                id="045418132-8"
                image={team}
                name="jOHN dOE"
                sector="Development"
                />

                <Card
                title="CSJ - 01"
                id="045418132-8"
                image={team}
                name="jOHN dOE"
                sector="Development"
                />
            </div>

            <div className="flex justify-center py-[50px]">
                <PrimaryButton name="Gather your crew"/>
            </div>
        </div>

        <div id="partners" className="bg-[#003452] py-[41px] text-center">
            <h2 className="uppercase text-[#00C2FF] text-3xl text-shadow">Partners</h2>
        </div>

        <div className="bg-[#003452] py-[41px] px-3">
            <div className="container flex flex-wrap justify-center gap-10">
            <Partner
            image={partner}
            name="NAME OF THE PARTNER"
            />

            <Partner
            image={partner}
            name="NAME OF THE PARTNER"
            />

            <Partner
            image={partner}
            name="NAME OF THE PARTNER"
            />

            <Partner
            image={partner}
            name="NAME OF THE PARTNER"
            />
            </div>
          
        </div>


      </div>
     
  )
}
