import { loadCsvData } from "../loadCsvData";
import { saveCsvData } from "../saveCsvData";

import { generateToken } from "@lib/auth";
import users from "@server/__data__/users.json";

export const resolvers = {
  Query: {
    players: async (_: any, { after = 0, first, filter, sortBy }) => {
      let filteredPlayers = await loadCsvData();

      if (filter) {
        if (filter.nationality) {
          filteredPlayers = filteredPlayers.filter((player) =>
            player.nationality
              .toLowerCase()
              .includes(filter.nationality.toLowerCase())
          );
        }
        if (filter.club) {
          filteredPlayers = filteredPlayers.filter((player) =>
            player.club.toLowerCase().includes(filter.club.toLowerCase())
          );
        }
        if (filter.position) {
          filteredPlayers = filteredPlayers.filter((player) =>
            player.position
              .toLowerCase()
              .includes(filter.position.toLowerCase())
          );
        }
      }

      // Sorting logic
      if (sortBy === "NAME") {
        filteredPlayers = filteredPlayers.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (sortBy === "GOALS") {
        filteredPlayers = filteredPlayers.sort((a, b) => b.goals - a.goals);
      } else if (sortBy === "ASSISTS") {
        filteredPlayers = filteredPlayers.sort((a, b) => b.assists - a.assists);
      }

      const totalPlayers = filteredPlayers.length - 1;
      const totalPages = Math.ceil(totalPlayers / first);
      const startIndex = after * first;

      // Get the players for the current page
      const players = filteredPlayers.slice(startIndex, startIndex + first);

      // Check if we have more pages
      const hasNextPage = startIndex + first < totalPlayers;
      const hasPreviousPage = startIndex > 0;

      return {
        players,
        pageInfo: {
          currentPage: after + 1,
          totalPages,
          hasNextPage,
          hasPreviousPage,
        },
      };
    },

    player: async (_: any, { id }: { id: string }) => {
      const allPlayers = await loadCsvData();
      return allPlayers[Number(id) - 1];
    },
    user: (_: any, __: any, { user }: any) => user,
    topPlayersForChart: async () => {
      const allPlayers = await loadCsvData();

      return {
        topGoals: allPlayers
          .map((p) => ({
            id: p.id,
            name: p.name,
            goals: Number(p.goals),
            assists: Number(p.assists),
          }))
          .sort((a, b) => b.goals - a.goals)
          .slice(0, 10),
        topAssists: allPlayers
          .map((p) => ({
            id: p.id,
            name: p.name,
            goals: Number(p.goals),
            assists: Number(p.assists),
          }))
          .sort((a, b) => b.assists - a.assists)
          .slice(0, 5),
      };
    },
  },
  Mutation: {
    login: async (_: any, { username, password }: any) => {
      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (!user) throw new Error("Invalid credentials");

      const token = generateToken(user);
      console.log(user);
      return { ...user, token };
    },
    logout: () => true,
    addPlayer: async (_: any, newPlayer: any, { user }: any) => {
      if (!user || user.role !== "admin") throw new Error("Unauthorized");
      const data = await loadCsvData();
      data.push(newPlayer);
      await saveCsvData(data);
      return newPlayer;
    },
  },
};
