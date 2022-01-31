import React,{useState,useEffect} from 'react';
import CardNormal from '../components/CardNormal';
import spaceship from '../assets/spaceship-normal.png'
import CardIncommon from '../components/CardIncommon';
import CardRare from '../components/CardRare';
import CardEpic from '../components/CardEpic';
import CardLegendary from '../components/CardLegendary';
import Loading from '../components/Loading'
import axios from 'axios'
import Fuel from '../components/Fuel';

export default function Cards() {


  //set data
  const [data, setData] = useState([])

  const [fuelAvailable, setFuelAvailable] = useState([])

  useEffect(()=>{
    async function fechData(){
        try{
            const response = await axios.get('https://mocki.io/v1/61ce2d44-c8ec-4070-af31-92cfbe67b4db')
            console.log(response.data.ships)
            setData(response.data.ships)
      
        }catch(err){
            console.error(err)
        }
    }

    fechData()
  },[])



  //renderizar o normal card
  const normalCard = data.filter(normal => {
    return normal.rarity === 'normal'
  })

  const renderNormalCard = normalCard.map((value,index) => {
    //render fuel
  
    return <CardNormal
    key={value.id}
    image={spaceship}
    name={value.ship}
    rarity={value.rarity}
    id={value.id}
    power={value.power}
    experience={value.experience}
    speed={value.speed}
    level={value.level}
    fuel={value.fuel.map(val => {
      return <Fuel
      key={index}
      className={'' + (val ? 'fuel' : 'no_fuel')} />
    })}
    />
  })

  console.log(renderNormalCard)

   //renderizar o uncommon card
   const uncommonCard = data.filter(uncommon => {
    return uncommon.rarity === 'uncommon'
  })

  const renderUncommonCard = uncommonCard.map((value,index) => {
    return <CardIncommon
    key={value.id}
    image={spaceship}
    name={value.ship}
    rarity={value.rarity}
    id={value.id}
    power={value.power}
    experience={value.experience}
    speed={value.speed}
    level={value.level}
    fuel={value.fuel.map(val => {
      return <Fuel
      key={index}
      className={'' + (val ? 'fuel ' : 'no_fuel ') + (val === 'extra' ? 'extra_fuel' : '')} />
    })}
    />
  })

  //renderizar o epic card
  const epicCard = data.filter(epic => {
    return epic.rarity === 'epic'
  })

  const renderEpicCard = epicCard.map((value,index) => {
    console.log(index)
    return <CardEpic
    key={value.id}
    image={spaceship}
    name={value.ship}
    rarity={value.rarity}
    id={value.id}
    power={value.power}
    experience={value.experience}
    speed={value.speed}
    level={value.level}
    fuel={value.fuel.map(val => {
      return <Fuel
      key={index}
      className={'' + (val ? 'fuel ' : 'no_fuel ') + (val === 'extra' ? 'extra_fuel' : '')} />
    })}
    />
  })

  //renderizar o legendary card
  const legendaryCard = data.filter(legendary => {
    return legendary.rarity === 'legendary'
  })

  const renderLegendaryCard = legendaryCard.map((value,index) => {
    return <CardLegendary
    key={value.id}
    image={spaceship}
    name={value.ship}
    rarity={value.rarity}
    id={value.id}
    power={value.power}
    experience={value.experience}
    speed={value.speed}
    level={value.level}
    fuel={value.fuel.map(val => {
      return <Fuel
      key={index}
      className={'' + (val ? 'fuel ' : 'no_fuel ') + (val === 'extra' ? 'extra_fuel' : '')} />
    })}
    />
  })

      
  return (
      <div className="container my-10 justify-center">
      
          <div className="flex flex-wrap gap-5 ">
            {renderNormalCard}
            {renderEpicCard}
            {renderUncommonCard}
            {renderLegendaryCard}
            {/* <CardNormal
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
            /> */}
          </div>
      </div>
  )
}
