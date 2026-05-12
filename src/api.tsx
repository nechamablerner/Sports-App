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
};
