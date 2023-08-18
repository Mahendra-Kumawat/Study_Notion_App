import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import Profile from "./pages/Profile";

function App() {

  return (
    <div className="bg-slate-950 min-h-screen px-1 md:px-8">
      <Navbar />
      <Routes>
        <Route path="/Study_Notion_App" element={<Home />}></Route>
        <Route path="/Study_Notion_App/login" element={<Login />}></Route>
        <Route path="/Study_Notion_App/signup" element={<SignUp />}></Route>
        <Route path="/Study_Notion_App/profile" element={<Profile />}></Route>
        <Route path="/Study_Notion_App/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
