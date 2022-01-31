import React from 'react';

export default function Gameplay(props) {
  return (
      <div className="border border-[#10FCF5] p-4 max-w-[442px] w-full rounded-[10px]">
          <h2 className="text-3xl text-[#10FCF5] uppercase">{props.title}</h2>
          <p className="text-sm text-[#10FCF5]">{props.description}</p>
      </div>
  )
}
