import { useState } from "react";
import "./App.module.css";
import SearchPage from "./Search";
import PlayerDetails from "./PlayerDetails";
import { Route, Routes } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/player/:id" element={<PlayerDetails />} />
      
      </Routes>
    </>
  );
}

export default App;
