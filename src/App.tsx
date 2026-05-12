import { useState } from "react";
import "./App.module.css";
import SearchPage from "./Search";
import PlayerDetails from "./PlayerDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/player/:id" element={<PlayerDetails />} />
      </Routes>
    </>
  );
}

export default App;
