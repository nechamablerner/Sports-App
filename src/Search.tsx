import React, { useState } from "react";
import { API } from "./api";
import { Link } from "react-router-dom";
import type { SearchResults, Player } from "./api";

export default function SearchPage() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResults[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError(null);

    try {
      const players = await API.searchPlayers(query);

      if (players && players.length > 0) {
        const allMatches: SearchResults[] = players.map((player: Player) => ({
          id: player.idPlayer,
          type: "player",
          sport: player.strSport,
          name: player.strPlayer,
          image: player.strThumb,
          team: player.strTeam,
          nationality: player.strNationality,
          postition: player.strPosition,
        }));

        setResults(allMatches);
      } else {
        setResults([]);
        setError("No players found with that name.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Search Sports</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter player name (e.g., Danny Welbeck)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div>
        {results.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Sport: {item.sport}</p>
            <p>Team: {item.team}</p>
            <p>Position: {item.postition}</p>
            <Link to={`/player/${item.id}`}>
              <button>View Full Profile</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
