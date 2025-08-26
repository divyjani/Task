
import './App.css'
import {Routes, Route} from 'react-router-dom'
import UserList from './pages/userList'
import Dashboard from './pages/Dashboard'
function App() {
 
   return(
  
   <>
    <Routes>
    <Route path="/" element={<UserList/>} />  
    <Route path="/user-list" element={<UserList/>} />
    <Route path="/dashboard" element={<Dashboard/>} /> 
    </Routes>
  
   </>
    
  )
}

export default App
