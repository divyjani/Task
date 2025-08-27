import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import { API_KEY } from '../data/data.js';
import { useContext } from 'react';
import { ApiContext } from '../Context/ApiContext.js';
import Navbar from '../Components/Navbar.jsx';
const ViewDetails = () => {

    let {id}=useParams(); 
    const {data,getData}=useContext(ApiContext); 
    useEffect(()=>{
        getData();
       

        },[]);   

    if(data.length===0){
        return <div className="text-center mt-10">Loading...</div>;
    }
      console.log(id);
  

  
   
        let userDetails=data.find((item)=>item.id==id)
        console.log(userDetails);
  return (
    <div>
      <Navbar/>
      <div className='w-full h-screen flex justify-center items-start '>
        <div className='mx-12 my-4 p-6 shadow-md  rounded-md  shadow-gray-200 border-[0.5px] border-gray-100  w-[60%]  '>
        <div className='h-[40%] flex flex-col justify-between items-center p-8 '>
          <div className='flex flex-col justify-center items-center pr-10 py-4 mx-4 mb-8  rounded-md shadow-sm shadow-gray-200 w-full '>
            <div className='w-[100px] h-[100px] overflow-hidden mx-auto '>
                <img className='w-full h-full object-contain rounded-[50%]' src={userDetails.avatar} alt="user" />
            </div>
             <div className='py-6 px-4 text-center '>
               <h1 className='font-bold text-4xl mb-4 italic'>Hello,{userDetails.name.split(" ")[0]}</h1>
                <p className='text-lg italic'> Welcome to your profile page </p>
             </div>
            
          </div>
            <div className='text-2xl  font-[poppins] bg-slate-50 py-6 px-16 rounded-md shadow-sm shadow-gray-200  w-full  '>
                <div>
                <p className='mb-4'><span className='font-semibold'>Full name:</span> {userDetails.name}</p>
                <p className='mb-4'><span className='font-semibold'>Age:</span> {userDetails.age?userDetails.age:"Not Specified"}</p>
                
                <p className='mb-4'><span className='font-semibold'>Gender:</span> {userDetails.gender}</p>
                </div>
                <div>
                <p className='mb-4'><span className='font-semibold mr-2'>Created At:</span>
                {/* <p className='flex flex-col ml-8'> */}
                <span>Date:{userDetails.createdAt.slice(0,10).split("-").reverse().join("-")}</span><br/>
                <span className='ml-32'> Time:{userDetails.createdAt.slice(11,19)}</span>
                {/* </p> */}
                </p>  
                <p className='mb-4'><span className='font-semibold'>Location:
                    </span> {userDetails.location}</p>
                </div>
            </div>
        </div>   
      </div>
    </div>
    </div>
  )
}

export default ViewDetails
