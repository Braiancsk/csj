import React, {useState} from 'react';
import trophy from '../assets/trophy.png'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../components/Loading'
import axios from 'axios'


export default function CardNormal(props) {
  const [isPending,setIsPending] = useState(false)
  const [wear,setWear] = useState(40)

  function handleWear() {
    setWear(prevWear => prevWear - 10)
    if(wear <= 0) {
        toast.error('You must restore your wear first')
    }else{
       
    }

    async function postData() {
     
        try{
            // setIsPending(true)
            const response = await axios.get('https://mocki.io/v1/4b222842-9ed1-4f27-8707-3b6960d2804b')
            console.log(response.data.ships)

            // setIsPending(false)
        }catch(err){
            console.error(err)
            toast.error('Sorry for that, something went wrong :(')
            
        }
    }
    postData()
  }

  function handleHyperJump() {
    toast.success('Hyper Jump pressed')
  }

  function handleRestore() {
    setWear(40)
    toast.success('Your wear was successfully restored')
  }


  return (
      <div className="cards p-2 max-w-[348px] w-full">
    {isPending && <Loading/>}
          <div className="flex justify-center normal rounded-[20px]">
          <img src={props.image} className="max-w-[242px] w-full h-auto py-[24px] px-[46px]" alt="card normal"/>
          </div>

          <h6 className="text-center my-[24px] text-white uppercase">{props.name}</h6>


          <div className="px-2">

          <div className="flex justify-between items-center my-3">
              <div className="max-w-[50%] w-full">
                  <h6 className="text-white text-[16px]">Rarity: {props.rarity}</h6>
              </div>

              <div className="max-w-[50%] w-full text-center">
                  <h6 className="text-white text-[16px]">ID: #{props.id}</h6>
              </div>
          </div>

          <div className="flex justify-between items-center my-3">
              <div>
                  <h6 className="text-white text-[16px] ">Power: <b className="cards__info ml-1">{props.power}</b></h6>
              </div>

              <div>
                  <h6 className="text-white text-[16px]">Experience: <b className="cards__info ml-1">{props.experience}/100</b></h6>
              </div>
          </div>

          <div className="flex justify-between items-center my-3">
              <div className="max-w-[50%] w-full">
                  <h6 className="text-white text-[16px]">Speed: <b className="cards__info ml-1">{props.speed}</b></h6>
              </div>

              <div className="max-w-[50%] w-full">
                  <h6 className="text-white text-[16px] text-center relative left-[-15px]">Level: <b className="cards__info ml-1">{props.level}</b></h6>
              </div>
          </div>

          <div className="flex justify-between items-center my-3">
              <div>
                  <h6 className="text-white text-[16px] flex items-center">Wear: <b className="cards__info ml-1">{wear <= 0 ? <button className="cursor-pointer cards__btn p-1" onClick={handleRestore}>Restore</button> : wear+'/'+40}</b></h6>
              </div>

              <div className="flex flex-wrap justify-center gap-2 items-center max-w-[55%] w-full relative right-[-15px]">
                  <h6 className="text-white text-[16px]">Fuel Left: </h6>
                  <div className="flex flex-wrap items-center max-w-[50%] gap-1">
                  {props.fuel}
                  
                  </div>
                 
              </div>
          </div>

          <div className="flex gap-2 items-center justify-center">
              <button onClick={handleWear} className="py-[15px] px-[6px] my-5 text-white cards__btn btn-text text-sm">
                  Start Journey
              </button>

              <button onClick={handleHyperJump} className="py-[5px] px-[6px] my-5 text-white cards__btn text-sm btn-text">
                 Hyperjump [Fee $1]
                 <p>(Quick Journey)</p>
              </button>

              <button className="p-[8px] my-5 text-white cards__btn text-sm btn-text">
              <img src={trophy} className="" alt="icone do trofeu"/>
              </button>
          </div>
          </div>
      
      </div>
  )
}
