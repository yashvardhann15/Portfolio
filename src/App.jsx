import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const App = () => {
    return (
        <div style={{
            background: 'linear-gradient(170deg to-right, black, dark-grey)', // Example gradient background
             // Ensure it covers the full height of the viewport
        }}>
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    )
}

export default App
