import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API, type Player } from "../api";
import { useNavigate } from "react-router-dom";
import styles from "./PlayerDetails.module.css";

export default function DetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [player, setPlayer] = useState<Player>();

  useEffect(() => {
    const fetchFullData = async () => {
      const player = await API.getPlayerById(id!);
      setPlayer(player);
    };
    fetchFullData();
  }, [id]);

  if (!player) return <p>Loading...</p>;
  return (
    <div className={styles.wrapper}>
      <h1>{player.strPlayer}</h1>
      <img src={player.strThumb} className={styles.playerImage} />
      <p>Sport: {player.strSport}</p>
      <p>Team: {player.strTeam}</p>
      <p>Position: {player.strPosition}</p>
      <p>Nationality: {player.strNationality}</p>
      <button className={styles.backButton} onClick={() => navigate("/")}>
        &larr; Back
      </button>
    </div>
  );
}
