import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SimulationGraph = ({ data }) => {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="time"
            label={{ value: "Time (s)", position: "bottom" }}
          />
          <YAxis
            label={{ value: "Displacement (m)", angle: -90, position: "left" }}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="displacement"
            stroke="#8884d8"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimulationGraph;
