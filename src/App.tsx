// import { useState } from "react";
import "./App.module.css";
import SearchPage from "./Search";
import PlayerDetails from "./pages/PlayerDetails";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/player/:id" element={<PlayerDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
