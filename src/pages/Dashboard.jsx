import React, { useEffect , useState} from 'react'
import Navbar from '../Components/Navbar'
import TotalUsers from '../Components/TotalUsers'
import { useContext } from 'react'
import { ApiContext } from '../Context/ApiContext.js'

const Dashboard = () => {
  
  const {data,getData}=useContext(ApiContext);
  const [length,setLength]=useState(0);
  useEffect(()=>{
    getData();
  },[])
  if(data.length>0 && length===0){
  setLength(data.length);
  }
  return (
        <div>
      <Navbar/>
    <TotalUsers length={length}/>
    </div>
  )
}

export default Dashboard
