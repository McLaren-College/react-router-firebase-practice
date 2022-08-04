import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Inbox from './Inbox'
import Layout from './Layout'
import Mail from './Mail'
import NoMatch from './NoMatch'

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="inbox/:id" element={<Mail />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}
