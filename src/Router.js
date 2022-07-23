import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import EventsDetail from "./pages/EventsDetail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import User from "./pages/User";

const Router = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventsDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ScrollToTop>
  );
};

export default Router;
