import { useState, useEffect } from "react";
import { API } from "../api";
import { Link } from "react-router-dom";

export default function LeaguesPage() {
  const [leagues, setLeagues] = useState<any[]>([]);

  useEffect(() => {
    const loadLeagues = async () => {
      const data = await API.getAllLeagues();
      console.log("Full API Data:", data);
      setLeagues(data);
    };
    loadLeagues();
  }, []);

  return (
    <div className="leagues-grid">
      <h1>Select a League</h1>
      <div>
        {leagues.map((league) => (
          <Link key={league.idLeague} to={`/league/${league.strLeague}`}>
            {league.strLeague}
          </Link>
        ))}
      </div>
    </div>
  );
}
