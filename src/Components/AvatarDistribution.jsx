
import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { UserCheck } from "lucide-react";
import { avatarDistribution } from "../utils/DashFunctions.js";







const AvatarDistribution = (props) => {
    const gAD = avatarDistribution(props.data);
    console.log(gAD);
    
    return(

  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
    <div className="flex items-center mb-4">
      <UserCheck className="w-5 h-5 text-purple-600 mr-2" />
      <h3 className="text-lg font-semibold">Avatar Distribution</h3>
    </div>
    <div className="h-64">
      <ResponsiveContainer>
        <PieChart>
          <Pie data={gAD} dataKey="value" innerRadius={50} outerRadius={90}>
          { Object.entries(gAD).map(([key, value], i) => (
  <Cell key={i} name={key} value={value} fill={i === 0 ? "teal" : "gray"} />
))}
          </Pie>
       
          <Tooltip />
        </PieChart>
        
      </ResponsiveContainer>
    </div>
  </div>
);
}
export default AvatarDistribution