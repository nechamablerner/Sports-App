import { useState, useEffect } from "react";
import { API } from "../api";
import { Link } from "react-router-dom";
import styles from "./LeaguesPage.module.css";

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
    <div className={styles.container}>
      <h1 className={styles.title}>Select a League</h1>
      <div className={styles.grid}>
        {leagues.map((league) => (
          <Link
            key={league.idLeague}
            to={`/league/${league.strLeague}`}
            className={styles.leagueCard}
          >
            {league.strLeague}
          </Link>
        ))}
      </div>
    </div>
  );
}
