import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import About from './About'
import Compose from './inbox/Compose'
import Email from './inbox/Email'
import Home from './Home'
import Inbox from './inbox/Inbox'
import Layout from './Layout'
import Login from './Login'
import NoMatch from './NoMatch'

export default function Main() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let goTo = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            goTo('/login')
        }else {
            goTo('/')
        }
        // eslint-disable-next-line
    }, [isLoggedIn])

    return (
        <Routes>
            <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path='/' element={<Layout setIsLoggedIn={setIsLoggedIn}/>}>
                <Route index element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/inbox' element={<Inbox />} />
                <Route path='/inbox/:id' element={<Email />} />
                <Route path='/compose' element={<Compose />} />
                <Route path='*' element={<NoMatch />} />
            </Route>
        </Routes>
    )
}
