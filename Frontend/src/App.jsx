import React, { useEffect, useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import axios from "axios"
import ProtectedRoute from './components/ProtectedRoute'

export const ServerUrl = "http://localhost:8000"

function App() {
  const [user, setUser] = useState(null)
  const [loading,setLoading] = useState(false)


  useEffect(() => {
    const fetchMe = async() => {
      try {
        const res = await axios.get(ServerUrl + "/api/user/current-user", {withCredentials:true})
        console.log(res.data);
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
        
      }
    }
    fetchMe()

  },[])

  return (
    <>
      <Routes>
        
        <Route path='/login' element={<Login setUser={setUser}/>}/>

        <Route path='/*' element={<ProtectedRoute user={user} loading={loading}>

          <Routes>
            <Route path='/' element={<Home user={user}/>}/>

          </Routes>

          
        </ProtectedRoute>}/>

      </Routes>
    </>
  )
}

export default App