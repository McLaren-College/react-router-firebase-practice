import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Layout from './Layout'
import Login from './Login'
import NoMatch from './NoMatch'

export default function Main() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let goTo = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            goTo('/login')
        }
    }, [])

    return (
        <Routes>
            <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NoMatch />} />
            </Route>
        </Routes>
    )
}
