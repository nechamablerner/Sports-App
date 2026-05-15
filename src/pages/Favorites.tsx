// Users should be able to save or automatically track items and view them later.
// This data must be displayed somewhere in the application, either on its own page or as a section within an existing page.
// Data should persist after page refresh, using local storage
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { type Player } from "../api"; // Use 'type' and ensure the path is correct
import styles from "./Favorites.module.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState<Player[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  const removeFavorite = (id: string) => {
    const updated = favorites.filter((fav) => fav.idPlayer !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  if (favorites.length === 0) {
    return (
      <div className={styles.container}>
        <h1>No favorites yet!</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>My Favorite Players</h1>
      <div className={styles.grid}>
        {favorites.map((player) => (
          <div key={player.idPlayer} className={styles.card}>
            <img src={player.strThumb} alt={player.strPlayer} />
            <h3>{player.strPlayer}</h3>
            <div className={styles.actions}>
              <Link to={`/player/${player.idPlayer}`}>View Profile</Link>
              <button onClick={() => removeFavorite(player.idPlayer)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
