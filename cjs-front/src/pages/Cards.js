import React,{useState} from 'react';
import CardNormal from '../components/CardNormal';
import spaceship from '../assets/spaceship-normal.png'
import CardIncommon from '../components/CardIncommon';
import CardRare from '../components/CardRare';
import CardEpic from '../components/CardEpic';
import CardLegendary from '../components/CardLegendary';
export default function Cards() {

  return (
      <div className="container my-10 justify-center">

          <div className="flex flex-wrap gap-5 ">
            <CardNormal
            image={spaceship}
            name="Spaceship Name"
            rarity="Normal"
            id="12345678"
            power="123"
            experience="16"
            speed="123"
            level="42"
            />

            <CardIncommon
            image={spaceship}
            name="Spaceship Name"
            rarity="Normal"
            id="12345678"
            power="123"
            experience="16"
            speed="123"
            level="42"
            />

            <CardRare
            image={spaceship}
            name="Spaceship Name"
            rarity="Normal"
            id="12345678"
            power="123"
            experience="16"
            speed="123"
            level="42"
            />

            <CardEpic
            image={spaceship}
            name="Spaceship Name"
            rarity="Normal"
            id="12345678"
            power="123"
            experience="16"
            speed="123"
            level="42"
            />

            <CardLegendary
            image={spaceship}
            name="Spaceship Name"
            rarity="Normal"
            id="12345678"
            power="123"
            experience="16"
            speed="123"
            level="42"
            />
          </div>
      </div>
  )
}
