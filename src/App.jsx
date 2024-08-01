import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRouter from './components/ProtectedRouter'

// Lazy load the Profile component
const Profile = React.lazy(() => import('./pages/Profile'));

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/profile' element={
              <ProtectedRouter>
                <Profile />
              </ProtectedRouter>
            } />
          </Routes>
        </Suspense>
      </AuthContextProvider>
    </>
  )
}

export default App
