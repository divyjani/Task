import React, { useState,useEffect } from 'react'
import {GrFormNext,GrFormPrevious} from 'react-icons/gr'
import { Link } from 'react-router-dom';
const GridData = (props) => {

const [data,setData]=useState(props.data);

useEffect(() => {
        if (props.data && props.data.length > 0) {
        setData(props.data);
        }
    }, [props.data]);
const[curPage,setCurPage]=useState(1);

const startindex=(curPage-1)*10;
const endindex=startindex+10;


  return (
    
     <div className="min-h-screen bg-teal-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.slice(startindex,endindex).map((item) => (
            <div 
              key={item.id}
              className="group relative bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-1 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
           
              <div className="h-full bg-white rounded-xl p-6 flex flex-col justify-between min-h-[280px]">
                <div className="flex-grow">
                  <h1 className="font-bold text-xl text-gray-800 mb-4 line-clamp-2">
                    {item.name}
                  </h1>
                  
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center">
                      <span className="font-medium w-16">Age:</span>
                      <span>{item.age || "N/A"}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="font-medium w-16">Gender:</span>
                      <span>{item.gender || "Not Specified"}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="font-medium w-16 ">Date:</span>
                      <span className="">
                        {item.createdAt 
                          ? new Date(item.createdAt).toLocaleDateString('en-GB')
                          : "Not Specified"
                        }
                      </span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-teal-600 hover:to-teal-700 transform hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg">
                  <Link to={`/user-details/${item.id}`}>View Details</Link>
                </button>
              </div>
            </div>
          ))}  
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={() => setCurPage((prev) => Math.max(prev - 1, 1))}
            disabled={curPage === 1}
            className={`px-5 py-3 rounded-lg font-semibold ${
              curPage === 1
                ? "bg-gray-200 text-white cursor-not-allowed"
                : "bg-teal-500 text-white hover:bg-teal-600"
            }`}
          >
            <GrFormPrevious   className='text-white' size={25}/>
          </button>
          <span className="px-4 py-2 rounded-lg font-semibold  text-gray-800 ">
            Page - {curPage}
          </span>
          <button
            onClick={() => setCurPage((prev) => prev + 1)}
            disabled={endindex >= data.length}
            className={`px-5 py-3 rounded-lg font-semibold ${
              endindex >= data.length
                ? "bg-gray-200 text-white cursor-not-allowed"
                : "bg-teal-500 text-white hover:bg-teal-600"
            }`}
          >
            <GrFormNext className='text' size={25}/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default GridData
