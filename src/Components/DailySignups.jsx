
import React from "react";
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip 
} from "recharts";
import { Calendar } from "lucide-react";
import { dailySignups } from "../utils/DashFunctions.js";


const DailySignups = (props) =>{
  const gDS = dailySignups(props.data);
  console.log(gDS);
 return (
<div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
    <div className="flex items-center mb-4">
      <Calendar className="w-5 h-5 text-green-600 mr-2" />
      <h3 className="text-lg font-semibold">Daily Signups</h3>
    </div>
    <div className="h-64">
      <ResponsiveContainer>
        <LineChart data={gDS}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#10B981" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);
}
export default DailySignups