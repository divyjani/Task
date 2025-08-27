import React, { useContext,useEffect } from 'react'
// import axios from 'axios'
import {ApiContext} from '../Context/ApiContext.js'
import UserTable from './UserTable.jsx';
import GridData from './GridData.jsx';
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
const List = () => {
    
    let {data,getData}=useContext(ApiContext);    
    const [active,setActive]=useState("list");
    // const[loading,setLoading]=useState(false);
    
    useEffect(()=>{
    getData();
    },[]);
    const[query,setQuery]=useState("");
//    
    console.log(query);

    if(data.length!==0){
        data=data.filter((item)=>
        item.name.toLowerCase().includes(query.toLowerCase()) 
        
        )
        console.log(data);
    }
     
       

  return (
    <div className='p-4  '>
        <div className='mx-10 my-6 shadow-sm flex justify-between items-center
         shadow-gray-200 border-[0.5px] border-gray-50 rounded-md py-4  '>
        <h1 className='font-bold text-2xl mx-6  font-[poppins]' >Users Data</h1>
       
        <div className='flex justify-center gap-6 mx-10 '>
             <div className='flex-1 relative w-fit'>
              {/* <FaSearch size={20} className="absolute top-1/2 left-3  -translate-y-1/2  text-gray-400 ml-4" /> */}
              <input onChange={(e)=>setQuery(e.target.value)} type="text" placeholder="Search by name "  className=' border border-slate-300 rounded-md px-5 py-2 ml-1 focus:outline-none focus:ring-2 focus:ring-teal-300'/>
            </div>
            <div
            onClick={() => setActive("grid")}
            className={`flex justify-center items-center rounded-full p-3 shadow-md border cursor-pointer transition-colors duration-200
                ${active === "grid" ? "bg-teal-500 text-white" : "bg-white text-teal-500"}`}
            >
            <IoGrid
                size={22}
                className={`${active === "grid" ? "text-white" : "text-teal-500"}`}
            />
            </div>

            <div
            onClick={() => setActive("list")}
            className={`flex justify-center items-center rounded-full p-3 shadow-md border cursor-pointer transition-colors duration-200
                ${active === "list" ? "bg-teal-500 text-white" : "bg-white text-teal-500"}`}
            >
            <FaList
                size={22} 
                className={`${active === "list" ? "text-white" : "text-teal-500"}`}
            />
            </div>


        </div>
        </div>
      <div>
        {active === "list" && <UserTable  data={data}/>}
        {active === "grid" && <GridData data={data}/>}
      </div>
    </div>
  )
}

export default List
