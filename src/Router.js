import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Events from './pages/Events'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'

const Router = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router