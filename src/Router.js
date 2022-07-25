import React from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard.example";
import Events from "./pages/Events";
import EventsDetail from "./pages/EventsDetail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Dashboard/Profile";
import Register from "./pages/Register";
import User from "./pages/User";
import UserEvents from "./pages/Dashboard/UserEvents";
import CreateEvent from "./pages/Dashboard/CreateEvent";

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

        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/dashboard/events" element={<UserEvents />}/>
        <Route path="/dashboard/events/add" element={<CreateEvent />}/>
        <Route path="/dashboard/settings" element={<Profile />}/>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </ScrollToTop>
  );
};

export default Router;
