import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const {user,logOut} = UserAuth()
  const navigate = useNavigate()


const handleLogout = async ()=>{
try {
  await logOut()
  navigate('/')
} catch (error) {
  console.log(error)
}
}
  return (
    <div className='absolute w-full p-4 flex items-center justify-between z-50'>
        <Link to='/'>
            <h1 className='uppercase text-red-500 font-nsans-bold cursor-pointer text-5xl'>Netflix</h1>
        </Link>
        
       {
        user?.email ? 
       (   <div>
        <Link to='/profile'>
            <button className='capitaliz pr-4'>Profile</button>
        </Link>

        <Link to='/signup'>
            <button onClick={handleLogout} className='capitaliz bg-red-600 px-6 py-2 rounded cursor-pointer'>Logout</button>
        </Link>
        </div>)
         : (
          <div>
          <Link to='/login'>
              <button className='capitaliz pr-4'>Login</button>
          </Link>
  
          <Link to='/signup'>
              <button className='capitaliz bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign up</button>
          </Link>
          </div>
        )
       } 
        
        
    </div>
  )
}

export default Navbar