export interface Player {
  idPlayer: string;
  idTeam: string;
  strPlayer: string;
  strTeam: string;
  strSport: string;
  strDescriptionEN: string;
  strThumb: string;
  strNationality: string;
  strPosition: string;
}

export interface Team {
  idTeam: string;
  strTeam: string;
  strTeamBadge: string;
  strDescriptionEN: string;
  strStadium?: string;
  strLeague: string;
  strBadge: string;
  strCountry: string;
}

// combined interface for results
export interface SearchResults {
  id: string;
  type: "player";
  name: string;
  image: string;
  league?: string;
  postition?: string;
  Description?: string;
  Thumb?: string;
  nationality?: string;
  team?: string;
  sport: string;
}

const url = "https://www.thesportsdb.com/api/v1/json/123";

export const API = {
  getTeamDetails: async (id: string) => {
    const response = await fetch(`${url}/lookupteam.php?id=${id}`);

    if (response.status === 429) throw new Error("Loading.....");

    const data = await response.json();

    return data.teams ? data.teams[0] : null;
  },

  searchPlayers: async (playerName: string) => {
    const response = await fetch(`${url}/searchplayers.php?p=${playerName}`);
    if (response.status === 429) throw new Error("Loading.....");
    const data = await response.json();
    return data.player || [];
  },

  getPlayerById: async (id: string) => {
    const response = await fetch(`${url}/lookupplayer.php?id=${id}`);
    const data = await response.json();
    return data.players ? data.players[0] : null;
  },

  getLeagueTeams: async (leagueName: string): Promise<Team[]> => {
    // The parameter 'l' is for League
    const response = await fetch(`${url}/search_all_teams.php?l=${leagueName}`);

    if (response.status === 429)
      throw new Error("Rate limit exceeded. Please wait.");

    const data = await response.json();

    // Returns the array of teams found in that league
    return data.teams || [];
  },

  getAllLeagues: async () => {
    const response = await fetch(`${url}/all_leagues.php`);
    const data = await response.json();

    // This returns a list of leagues
    return data.leagues || [];
  },
};
