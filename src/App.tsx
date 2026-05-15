import "./App.module.css";
import SearchPage from "./Search";
import PlayerDetails from "./pages/PlayerDetails";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Footer } from "./Footer";
import LeaguesPage from "./pages/Leagues";
import TeamsByLeague from "./pages/Teams";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/player/:id" element={<PlayerDetails />} />
          <Route path="/leagues" element={<LeaguesPage />} />
          <Route path="/league/:leagueName" element={<TeamsByLeague />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
