import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API, type Team } from "../api";

export default function TeamsByLeague() {
  const { leagueName } = useParams<{ leagueName: string }>();

  const [results, setResults] = useState<Team[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTeams = async () => {
      if (!leagueName) return;

      setLoading(true);
      try {
        const teams = await API.getLeagueTeams(leagueName);
        setResults(teams);
      } catch (error) {
        console.error("Failed to fetch league teams", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, [leagueName]);

  if (loading) return <p>Loading teams in {leagueName}...</p>;

  return (
    <div>
      <h1>Teams in {leagueName}</h1>
      <div>
        {results.map((team) => (
          <div key={team.idTeam} className="team-card">
            <img src={team.strTeamBadge} alt={team.strTeam} />
            <h3>{team.strTeam}</h3>
            <h3> Stadium: {team.strStadium}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
