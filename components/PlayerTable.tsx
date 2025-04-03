import { FC } from "react";
import { PlayerTableProps } from "@interfaces/index";

const PlayerTable: FC<PlayerTableProps> = ({ players }) => {
  return (
    <div
      className="overflow-auto"
      style={{
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingTop: "10px",
      }}
    >
      <table
        className="min-w-full border border-gray-400 text-sm"
        key={"players_info_table"}
      >
        <thead className="bg-gray-300">
          <tr>
            <th className="border p-2 text-left">Name</th>
            <th className="border p-2 text-left">Club</th>
            <th className="border p-2 text-left">Position</th>
            <th className="border p-2 text-center">Goals</th>
            <th className="border p-2 text-center">Assists</th>
            <th className="border p-2 text-center">Nationality</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id} className="hover:bg-gray-50">
              <td className="border p-2">{player.name}</td>
              <td className="border p-2">{player.club}</td>
              <td className="border p-2">{player.position}</td>
              <td className="border p-2 text-center">{player.goals}</td>
              <td className="border p-2 text-center">{player.assists}</td>
              <td className="border p-2 text-center">{player.nationality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerTable;
