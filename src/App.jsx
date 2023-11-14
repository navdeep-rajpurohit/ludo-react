import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import Appbar from './components/Appbar'
import Solo from './components/Solo'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div id='appbar'>
        <Appbar></Appbar>
      </div>
      <div id='pageContent'>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/solo" element={<Solo />} />
            </Routes>
      
      </div>
    </div>
  )
}

export default App
