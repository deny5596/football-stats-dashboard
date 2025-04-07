import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import PlayerTable from "@components/PlayerTable";
import Loading from "@components/Loading";

const PLAYERS_LIMIT = 10;

const GET_PLAYERS = gql`
  query PlayersQuery(
    $after: Int
    $first: Int
    $filter: PlayerFilter
    $sortBy: SortBy
  ) {
    players(after: $after, first: $first, filter: $filter, sortBy: $sortBy) {
      players {
        id
        name
        club
        position
        nationality
        goals
        assists
      }
      pageInfo {
        currentPage
        totalPages
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

const PlayerList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [sortBy, setSortBy] = useState("GOALS");
  const [filter, setFilter] = useState({
    nationality: "",
    club: "",
    position: "",
  });

  const { data, loading, error } = useQuery(GET_PLAYERS, {
    variables: {
      after: currentPage,
      first: PLAYERS_LIMIT,
      filter: {
        nationality: filter.nationality || undefined,
        club: filter.club || undefined,
        position: filter.position || undefined,
      },
      sortBy,
    },
  });

  const inputs = (
    <div
      className="flex gap-4 mb-6 flex-wrap text-sm"
      key={"player_sort_dropdown_and_player_input_filter"}
      style={{
        marginLeft: "10px",
      }}
    >
      <select
        className="border p-2 rounded"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        {["NAME", "GOALS", "ASSISTS"].map((option) => (
          <option key={option} value={option}>{`Sort by ${option}`}</option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Filter by nationality"
        className="border p-2 rounded"
        value={filter.nationality}
        onChange={(e) => setFilter({ ...filter, nationality: e.target.value })}
        key={"filter_by_nationality"}
      />
      <input
        type="text"
        placeholder="Filter by club"
        className="border p-2 rounded"
        value={filter.club}
        onChange={(e) => setFilter({ ...filter, club: e.target.value })}
        key={"filter_by_club"}
      />
      <input
        type="text"
        placeholder="Filter by position"
        className="border p-2 rounded"
        value={filter.position}
        onChange={(e) => setFilter({ ...filter, position: e.target.value })}
        key={"filter_by_position"}
      />
    </div>
  );

  if (loading)
    return (
      <div>
        {inputs}{" "}
        <div className="flex justify-center text-center">
          <Loading />
        </div>
      </div>
    );
  if (error)
    return (
      <div>
        {inputs} <p>Error: {error.message}</p>
      </div>
    );

  const players = data?.players?.players || [];
  const pageInfo = data?.players?.pageInfo || {};

  return (
    <div className="p-6">
      {inputs}

      <PlayerTable players={players} key={"players_info"} />

      {pageInfo.totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-6 text-sm">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            hidden={currentPage === 0}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ⬅ Previous
          </button>

          <div className="flex gap-2">
            {Array.from({ length: pageInfo.totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, pageInfo.totalPages))
            }
            disabled={currentPage === pageInfo.totalPages}
            hidden={currentPage === pageInfo.totalPages}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
          >
            Next ➡
          </button>
        </div>
      )}
    </div>
  );
};

export default PlayerList;
