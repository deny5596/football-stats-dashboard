import fs from "fs";
import path from "path";
import csv from "csv-parser";
import { ParsedPlayer as Player } from "@interfaces/index";

function parsePercentage(value: string | number): number {
  if (typeof value === "string" && value.includes("%")) {
    return parseFloat(value.replace("%", "")) || 0;
  }
  return Number(value);
}

export const loadCsvData = async (): Promise<Player[]> => {
  const filePath = path.join(process.cwd(), "__data__", "dataset.csv");
  const results: Player[] = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => {
        const parsed: any = {};

        for (const key in data) {
          const value = data[key].trim();
          const parsedKey = key.replace(/\s+/g, "");

          parsed[parsedKey] = isNaN(Number(value)) ? value : Number(value);
        }

        results.push(parsed);
      })
      .on("end", () => {
        const transformedResults: Player[] = results.map(
          (player: any, index) => ({
            id: index + 1,
            name: player.Name,
            jerseyNumber: player.JerseyNumber,
            club: player.Club,
            position: player.Position,
            nationality: player.Nationality,
            age: player.Age,
            appearances: player.Appearances,
            wins: player.Wins,
            losses: player.Losses,
            goals: player.Goals,
            goalsPerMatch: player.Goalspermatch,
            headedGoals: player.Headedgoals,
            goalsWithRightFoot: player.Goalswithrightfoot,
            goalsWithLeftFoot: player.Goalswithleftfoot,
            penaltiesScored: player.Penaltiesscored,
            freekicksScored: player.Freekicksscored,
            shots: player.Shots,
            shotsOnTarget: player.Shotsontarget,
            shootingAccuracy: parsePercentage(player["Shootingaccuracy%"]),
            hitWoodwork: player.Hitwoodwork,
            bigChancesMissed: player.Bigchancesmissed,
            cleanSheets: player.Cleansheets,
            goalsConceded: player.Goalsconceded,
            tackles: player.Tackles,
            tackleSuccess: parsePercentage(player["Tacklesuccess%"]),
            lastManTackles: player.Lastmantackles,
            blockedShots: player.Blockedshots,
            interceptions: player.Interceptions,
            clearances: player.Clearances,
            headedClearance: player.HeadedClearance,
            clearancesOffLine: player.Clearancesoffline,
            recoveries: player.Recoveries,
            duelsWon: player.Duelswon,
            duelsLost: player.Duelslost,
            successful5050s: player["Successful50/50s"],
            aerialBattlesWon: player.Aerialbattleswon,
            aerialBattlesLost: player.Aerialbattleslost,
            ownGoals: player.Owngoals,
            errorsLeadingToGoal: player.Errorsleadingtogoal,
            assists: player.Assists,
            passes: player.Passes,
            passesPerMatch: player.Passespermatch,
            bigChancesCreated: player.Bigchancescreated,
            crosses: player.Crosses,
            crossAccuracy: parsePercentage(player["Crossaccuracy%"]),
            throughBalls: player.Throughballs,
            accurateLongBalls: player.Accuratelongballs,
            saves: player.Saves,
            penaltiesSaved: player.Penaltiessaved,
            punches: player.Punches,
            highClaims: player.HighClaims,
            catches: player.Catches,
            sweeperClearances: player.Sweeperclearances,
            throwOuts: player.Throwouts,
            goalKicks: player.GoalKicks,
            yellowCards: player.Yellowcards,
            redCards: player.Redcards,
            fouls: player.Fouls,
            offsides: player.Offsides,
          })
        );
        return resolve(transformedResults);
      })
      .on("error", (error: Error) => reject(error));
  });
};
