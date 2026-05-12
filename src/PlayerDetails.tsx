import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API, type Player } from "./api";

export default function DetailsPage() {
  const { id } = useParams();

  const [player, setPlayer] = useState<Player>();

  useEffect(() => {
    // Now we call the API with the number we grabbed from the URL
    const fetchFullData = async () => {
      const player = await API.getPlayerById(id!);
      setPlayer(player);
    };
    fetchFullData();
  }, [id]);

  if (!player) return <p>Loading...</p>;
  return (
    <div>
      <h1>{player.strPlayer}</h1>
      <img src={player.strThumb} />
      <p>Sport: {player.strSport}</p>
      <p>Team: {player.strTeam}</p>
      <p>Position: {player.strPosition}</p>
      <p>Nationality: {player.strNationality}</p>
    </div>
  );
}
