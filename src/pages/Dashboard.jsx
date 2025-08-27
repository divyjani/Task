import React, { useEffect , useState} from 'react'
import Navbar from '../Components/Navbar'
import TotalUsers from '../Components/TotalUsers'
import { useContext } from 'react'
import { ApiContext } from '../Context/ApiContext.js'
import DailySignups from '../Components/DailySignups.jsx'
import AvatarDistribution from '../Components/AvatarDistribution.jsx'
import SignupDistribution from '../Components/SignUpDistribution.jsx'
import RecentUsers from '../Components/RecentUsers.jsx'
import Footer from '../Components/Footer.jsx'
const Dashboard = () => {
  
  const {data,getData}=useContext(ApiContext);
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await getData();
      setLoading(false);
    };
    fetchData();
  }, []);

 if (loading) {
  return (
    <div className="text-center mt-10 text-gray-700 font-medium animate-pulse">
      Good things take time<span className="animate-bounce">...</span>
    </div>
  );
}
  
  
  return (
        <div>
      <Navbar/>
    <TotalUsers length={data.length}/>
    <div className='mx-20 my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
    <DailySignups data={data}/>
    <AvatarDistribution data={data}/>
    <SignupDistribution data={data}/>
    <RecentUsers data={data}/>

    </div>
        <Footer/>
    </div>
  )
}

export default Dashboard
