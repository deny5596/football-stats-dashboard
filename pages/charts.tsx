import DashboardLayout from "@components/DashboardLayout";
import GoalsChart from "@components/GoalsChart";
import Loading from "@components/Loading";
import { GET_TOP_PLAYERS_CHART_QUERY } from "@lib/queries/TopPlayersForChart.Query";
import { useLazyLoadQuery } from "react-relay";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function ChartsPage() {
  const data = useLazyLoadQuery(
    GET_TOP_PLAYERS_CHART_QUERY,
    {},
    { fetchPolicy: "store-and-network" }
  );

  if (!data) return <Loading />;

  const topGoals = data?.topPlayersForChart?.topGoals || [];
  const topAssists = data?.topPlayersForChart?.topAssists || [];
  const topFiveGoals = topGoals.slice(0, 5);

  return (
    <DashboardLayout style={{}}>
      <div className="h-[calc(100vh-80px)] overflow-y-auto p-4">
        <div
          className="flex flex-col gap-6 w-full max-w-6xl mx-auto"
          style={{
            marginTop: "20px",
            marginLeft: "20px",
          }}
        >
          <div className="bg-white p-4 rounded-lg shadow-md w-full overflow-hidden">
            <h3 className="text-xl font-bold mb-4 text-center">Goals Chart</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <GoalsChart players={topGoals} />
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md w-full overflow-hidden">
            <h3 className="text-xl font-bold mb-4 text-center">
              Top 5 Goal Scorers
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topFiveGoals}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="goals" fill="#3b82f6" name="Goals" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md w-full overflow-hidden">
            <h3 className="text-xl font-bold mb-4 text-center">
              Top 5 Assisters
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topAssists}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="assists" fill="#10b981" name="Assists" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
