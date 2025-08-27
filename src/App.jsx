
import './App.css'
import {Routes, Route} from 'react-router-dom'
import UserList from './pages/userList'
import Dashboard from './pages/Dashboard'
import ViewDetails from './pages/ViewDetails'

function App() {
 
   return(
  
   <>
    <Routes>
    <Route path="/" element={<UserList/>} />  
    <Route path="/user-list" element={<UserList/>} />
    <Route path="/dashboard" element={<Dashboard/>} /> 
    <Route path="/user-details/:id" element={<ViewDetails/>} />
    </Routes>
  
   </>
    
  )
}

export default App
