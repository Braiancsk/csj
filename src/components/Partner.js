import React from 'react';

export default function Partner(props) {
  return (
      <div className="partner p-[40px] text-center">
          <img src={props.image} alt="parceiro" className="max-w-[495px] w-full md:h-[202px] h-auto"/>
          <h4 className="uppercase text-3xl text-white">{props.name}</h4>
      </div>
  )
}
