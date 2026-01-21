import React from 'react'
import Login from "../pages/Login"
import Register from '../pages/Regsiter'
import Navbar from '../components/Navbar.jsx'


const Auth = () => {

  return (
       
      <> 
       <Navbar/>
       <div className="min-h-screen flex items-center  justify-center bg-gradient-to-br from-indigo-100 to-purple-100 p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        {/* LEFT – LOGIN */}
        <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r ">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Login
          </h2>
          <Login />
        </div>

        {/* RIGHT – REGISTER */}
        <div className="p-8 md:p-10 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Register
          </h2>
          <Register />
        </div>

      </div>
    </div>
    </>
    
  )
}

export default Auth