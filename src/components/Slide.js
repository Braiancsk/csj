import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

//imagens
import spaceship from '../assets/spaceship.png'
import normal from '../assets/normal-ship.png'
import uncommon from '../assets/uncommon-ship.png'
import rare from '../assets/rare-ship.png'
import epic from '../assets/epic-ship.png'

//components
import PrimaryButton from '../components/PrimaryButton'

export default function Slide() {


  return (
      <div className="container">
    <Swiper
      modules={[Navigation]}
      centeredSlides={true}
      initialSlide={2}
      slideToClickedSlide={true}
      breakpoints={{
        // when window width is >= 640px
        1024: {
       
          slidesPerView: 3,
        },
        // when window width is >= 768px
        768: {
        
          slidesPerView: 2,
        },
        // when window width is >= 511px
        511: {
           
            slidesPerView: 1,
        },
      }}
      spaceBetween={30}
     
      // onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
    >
      <SwiperSlide className="text-center">
      {({ isActive }) => (
            <div>
                {isActive ?
                <div>
                <div className="border-slide max-w-[737px] w-full md:h-[482px] h-[375px]">
                    <img src={normal} alt="nave do jogo" className="max-w-[687px] w-full h-auto md:h-[442px]" />
                </div>
      
                <h4 className="uppercase text-shadow text-3xl text-[#00C2FF] mt-[32px]">ANDROMEDA</h4>
                </div> 
                : <div className="border-slide max-w-[737px] w-full h-auto md:h-[422px] bg-[#67A5C8]">
                <img src={normal} alt="nave do jogo" className="max-w-[687px] w-full h-auto md:h-[380px]" />
                </div>   
                }
            </div>
        )}
          
      </SwiperSlide>

      <SwiperSlide className="text-center" >
         
      {({ isActive }) => (
           <div>
           {isActive ?
           <div>
           <div className="border-slide max-w-[737px] w-full md:h-[482px] h-[375px]">
               <img src={uncommon} alt="nave do jogo" className="max-w-[687px] w-full h-auto md:h-[442px]" />
           </div>
 
           <h4 className="uppercase text-shadow text-3xl text-[#00C2FF] mt-[32px]">ANDROMEDA</h4>
           </div> 
           : <div className="border-slide max-w-[737px] w-full h-auto md:h-[422px]">
           <img src={uncommon} alt="nave do jogo" className="max-w-[687px] w-full h-auto md:h-[380px]" />
           </div>   
           }
       </div>
        )}
         
      </SwiperSlide>
  
      <SwiperSlide className="text-center">
      {({ isActive }) => (
            <div>
                {isActive ?
                <div>
                <div className="border-slide max-w-[737px] w-full md:h-[482px] h-[375px]">
                    <img src={rare} alt="nave do jogo" className="max-w-[687px] w-full h-auto md:h-[442px]" />
                </div>
      
                <h4 className="uppercase text-shadow text-3xl text-[#00C2FF] mt-[32px]">ANDROMEDA</h4>
                </div> 
                : <div className="border-slide max-w-[737px] w-full h-auto md:h-[422px]">
                <img src={rare} alt="nave do jogo" className="max-w-[687px] w-full h-auto md:h-[380px]" />
                </div>   
                }
            </div>
        )}
      </SwiperSlide>

      <SwiperSlide className="text-center" >
          
      {({ isActive }) => (
            <div>
                {isActive ?
                <div>
                <div className="border-slide max-w-[737px] w-full md:h-[482px] h-[375px]">
                    <img src={epic} alt="nave do jogo" className="max-w-[687px] w-full h-auto md:h-[442px]" />
                </div>
      
                <h4 className="uppercase text-shadow text-3xl text-[#00C2FF] mt-[32px]">ANDROMEDA</h4>
                </div> 
                : <div className="border-slide max-w-[737px] w-full h-auto md:h-[422px]">
                <img src={epic} alt="nave do jogo" className="max-w-[687px] w-full h-auto md:h-[380px]" />
                </div>   
                }
            </div>
        )}
         
      </SwiperSlide>

      <SwiperSlide className="text-center">
          
          {({ isActive }) => (
                <div>
                    {isActive ?
                    <div>
                    <div className="border-slide max-w-[737px] w-full md:h-[482px] h-[375px]">
                        <img src={spaceship} alt="nave do jogo" className="max-w-[687px] w-full h-auto md:h-[442px]" />
                    </div>
          
                    <h4 className="uppercase text-shadow text-3xl text-[#00C2FF] mt-[32px]">ANDROMEDA</h4>
                    </div> 
                    : <div className="border-slide max-w-[737px] w-full h-auto md:h-[422px]">
                    <img src={spaceship} alt="nave do jogo" className="max-w-[687px] w-full h-auto md:h-[380px]" />
                    </div>   
                    }
                </div>
            )}
             
          </SwiperSlide>
  
    </Swiper>

    <div className="mt-12 flex justify-center z-10 relative">
        <PrimaryButton name="Get started"/>
    </div>
      </div>
  )
}
