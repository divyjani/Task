import React,{useState,useEffect} from 'react'
import {GrFormNext,GrFormPrevious} from 'react-icons/gr'
const UserTable = (props) => {


        // console.log(props.data);
        const [data,setData]=useState(props.data);
        useEffect(() => {
        if (props.data && props.data.length > 0) {
        setData(props.data);
        }
    }, [props.data]);

    const[curPage,setCurPage]=useState(1);
   

    if (!props.data || props.data.length === 0) {
        return <div className="text-center mt-10">Loading...</div>;
    }
    
        
        

            const startindex=(curPage-1)*10;
            const endindex=startindex+10;

            // console.log(data,data.slice(startindex,endindex));
    return (
        <>
        <table className='table-fixed border-collapse border border-slate-400 mx-10 my-4 w-11/12 font-[poppins] text-center'>
            <thead >
                <tr className=' border border-slate-300 text-lg '>
                    <th className='border border-slate-200 px-1 py-2.5 font-semibold'>Name</th>
                    <th className='border border-slate-200 px-1 py-2.5 font-semibold'>Age</th>
                    <th className='border border-slate-200 px-1 py-2.5 font-semibold'>Gender</th>
                    <th className='border border-slate-200 px-1 py-2.5 font-semibold'>Created At</th>
                    <th className='border border-slate-200 px-1 py-2.5 font-semibold'>Location</th>
                </tr>
            </thead>
            <tbody>
                {data.slice(startindex,endindex).map((item)=>(
                    <tr className='border border-slate-300 hover:bg-teal-50'  key={item.id}>
                        <td className='border border-slate-200 px-1 py-2.5 '>{item.name}</td>
                        <td className='border border-slate-200 px-1 py-2.5 '>{item.age?item.age:"Not Specified"}</td>
                        <td className='border border-slate-200 px-1 py-2.5 '>{item.gender?item.gender:"Not Specified"}</td>
                        <td className='border border-slate-200 px-1 py-2.5 '>{item.createdAt?item.createdAt.slice(0,10).split("-").reverse().join("-"):"Not Specified"}</td>
                        <td className='border border-slate-200 px-1 py-2.5 '>{item.location?item.location:"Not Specified"}</td>
                    </tr>
                ))}
            </tbody>
            </table>
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
                
        </>
    )
    }

    export default UserTable
