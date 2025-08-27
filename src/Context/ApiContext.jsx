import React, {  useState } from 'react'
import { ApiContext } from './ApiContext.js'
import axios from 'axios'
import { API_KEY } from '../data/data.js'



export const ApiProvider = ({children}) => {

const[data,setData]=useState([])




const getData = async() =>{
    try{    
    const res=await axios.get(API_KEY);
       await setData(res.data);
    // return res.data;
    //  return res.data;
    }catch(err){
        console.log(err)
    }
}
     

  return (
    <ApiContext.Provider value={{getData,data}}>
      {children} 
    </ApiContext.Provider>
  )
}


