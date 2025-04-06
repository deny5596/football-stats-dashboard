import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

type Props = {
  players: { id: number; name: string; goals: number }[];
};

const COLORS = [
  "#2563eb",
  "#3b82f6",
  "#60a5fa",
  "#93c5fd",
  "#bfdbfe",
  "#1d4ed8",
  "#1e40af",
  "#1e3a8a",
  "#172554",
  "#0f172a",
];

const GoalsChart = ({ players }: Props) => {
  const data = players;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full">
      <h3 className="text-xl font-bold mb-4 text-center">
        Top 10 Goal Scorers
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="goals"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            labelLine={false}
            label={({ name, goals }) => `${name} (${goals})`}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name, props) => [
              `${value} goals`,
              props.payload.name,
            ]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GoalsChart;
