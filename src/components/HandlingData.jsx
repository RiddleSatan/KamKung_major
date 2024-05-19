import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Card from "./Card.jsx";



const HandlingData = () => {
    const [data, setData] = useState([])
    const shopData=()=>{
        try {
            axios.get(`https://fakestoreapi.com/products`).then((res)=>setData(res.data))
        } catch (error) {
            console.log(error)
            throw error
        }
    }

 useEffect(()=>{
    shopData()
    
 },[])
 
  return (
   <div className='w-full min-h-screen p-10 bg-slate-600 flex flex-wrap gap-6'>
   {
    data.map((val)=><Card/>)
   }
   </div>
  )
}

export default HandlingData