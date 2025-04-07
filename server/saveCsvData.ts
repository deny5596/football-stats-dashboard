import fs from "fs";
import path from "path";
import { Player } from "@interfaces/index";

export const saveCsvData = async (players: Player[]): Promise<void> => {
  const filePath = path.join(process.cwd(), "__data__", "dataset.csv");

  if (players.length === 0) return;

  const headers = Object.keys(players[0]);
  const csvContent = [
    headers.join(","), // header line
    ...players.map((player) =>
      headers
        .map((h) => `"${(player[h] ?? "").toString().replace(/"/g, '""')}"`)
        .join(",")
    ),
  ].join("\n");

  return fs.promises.writeFile(filePath, csvContent, "utf8");
};
