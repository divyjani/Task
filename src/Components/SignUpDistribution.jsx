import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Clock } from "lucide-react";
import { getSignupHours } from "../utils/DashFunctions.js";

const SignupDistribution = (props) => {
  const hS = getSignupHours(props.data);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center mb-4">
        <Clock className="w-5 h-5 text-orange-600 mr-2" />
        <h3 className="text-lg font-semibold">Signup Time</h3>
      </div>
      <div className="h-64">
        <ResponsiveContainer>
          <BarChart data={hS}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#F59E0B" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SignupDistribution;
