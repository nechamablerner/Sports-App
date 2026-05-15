import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API, type Team } from "../api";
import styles from "./TeamsPage.module.css";

//Create a separate component for each card
function TeamCard({ team }: { team: Team }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className={styles.teamCard}>
      <img src={team.strBadge} alt={team.strTeam} className={styles.badge} />
      <h3 className={styles.teamName}>{team.strTeam}</h3>
      <p> Country: {team.strCountry}</p>
      <p className={styles.stadium}> Home Stadium: {team.strStadium}</p>

      <div className={styles.descriptionWrapper}>
        <p
          className={`${styles.teamDescription} ${isExpanded ? styles.expanded : styles.collapsed}`}
        >
          {team.strDescriptionEN}
        </p>

        {team.strDescriptionEN && (
          <button
            className={styles.readMoreBtn}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
}

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
    <div className={styles.container}>
      <h1>Teams in {leagueName}</h1>
      <div className={styles.grid}>
        {results.map((team) => (
          <TeamCard key={team.idTeam} team={team} />
        ))}
      </div>
    </div>
  );
}
