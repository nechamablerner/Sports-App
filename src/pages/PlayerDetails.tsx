import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { API, type Player } from "../api";
import styles from "./PlayerDetails.module.css";
import EmojiToggle from "../components/HeartToggle";
import BackButton from "../components/BackBttn";

export default function DetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [player, setPlayer] = useState<Player>();

  // Initialize favorites from localStorage
  const [favorites, setFavorites] = useState<Player[]>(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const fetchFullData = async () => {
      const data = await API.getPlayerById(id!);
      setPlayer(data);
    };
    fetchFullData();
  }, [id]);

  // Function to add and remove player from favorites
  const handleToggleFavorite = (p: Player) => {
    let updatedFavorites;
    const isAlreadyFav = favorites.some((fav) => fav.idPlayer === p.idPlayer);

    if (isAlreadyFav) {
      updatedFavorites = favorites.filter((fav) => fav.idPlayer !== p.idPlayer);
    } else {
      updatedFavorites = [...favorites, p];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (!player) return <p>Loading...</p>;

  // Determine if current player is favorited
  const isFavorite = favorites.some((fav) => fav.idPlayer === player.idPlayer);

  return (
    <div className={styles.wrapper}>
      <EmojiToggle
        player={player}
        isFavorite={isFavorite}
        onToggle={handleToggleFavorite}
      />
      <h1>{player.strPlayer}</h1>
      <img
        src={player.strThumb || "/profilePhoto.png"}
        alt={player.strPlayer}
        className={styles.playerImage}
        onError={(e) => {
          e.currentTarget.src = "/profilePhoto.png";
        }}
      />
      <p>Sport: {player.strSport}</p>
      <p>Team: {player.strTeam}</p>
      <p>Position: {player.strPosition}</p>
      <p>Nationality: {player.strNationality}</p>
      <BackButton />
    </div>
  );
}
