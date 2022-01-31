import React from 'react';

export default function Card(props) {
  return (
      <div className="p-[40px] card max-w-[575px] w-full">
          <div className="flex flex-wrap justify-center md:justify-between">
              <div className="md:w-[50%]">
              <h4 className="uppercase text-xl md:text-3xl mb-[51px] text-white text-center">{props.title}</h4>
              <h4 className="uppercase text-xl md:text-3xl mb-[18px] text-center text-white">id number</h4>
              <h4 className="uppercase text-xl md:text-3xl mb-[18px] text-center text-white">{props.id}</h4>
              </div>
              
              <div>
                  <img src={props.image} alt="Membro da equipe" className="max-w-[203px] rounded-[20px] shadow-team"/>
              </div>  
          </div>

          <div className="w-full h-[1px] bg-[#10FCF5] my-[20px]"></div>

          <div className="flex justify-between">
              <h6 className="uppercase text-xl md:text-3xl text-center text-white">Name:</h6>
              <h6 className="uppercase text-xl md:text-3xl text-center text-white">{props.name}</h6>
          </div>

          <div className="flex justify-between mt-5">
              <h6 className="uppercase text-xl md:text-3xl text-center text-white">sECTOR:</h6>
              <h6 className="uppercase text-xl md:text-3xl text-center text-white">{props.sector}</h6>
          </div>
      </div>
  )
}
