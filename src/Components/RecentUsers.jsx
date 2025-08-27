import React from "react";
import { Users } from "lucide-react";
import { getRecentUsers } from "../utils/DashFunctions.js";

const RecentUsers = (props) => {
  const recUsers = getRecentUsers(props.data);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center mb-4">
        <Users className="w-5 h-5 text-indigo-600 mr-2" />
        <h3 className="text-lg font-semibold">Recent Users</h3>
      </div>
      <div className="space-y-3">
        {recUsers.map((u, i) => (
          <div key={i} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded">
            {u.avatar ? (
              <img src={u.avatar} alt={u.name} className="w-10 h-10 rounded-full" />
            ) : (
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-gray-600" />
              </div>
            )}
            <div className="flex-1">
              <p className="text-sm font-medium">{u.name}</p>
              <p className="text-xs text-gray-500">{u.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentUsers;
