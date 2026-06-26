import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="w-72 min-h-screen bg-black text-white p-5">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

      <ul className="space-y-3">

        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/dashboard/users">Users</NavLink></li>
        <li><NavLink to="/dashboard/transactions">Transactions</NavLink></li>
        <li><NavLink to="/dashboard/revenue">Revenue Analytics</NavLink></li>
        <li><NavLink to="/dashboard/ai-usage">AI Usage</NavLink></li>
        <li><NavLink to="/dashboard/reports">User Reports</NavLink></li>
        <li><NavLink to="/dashboard/settings">Settings</NavLink></li>

      </ul>
    </div>
  );
};

export default AdminSidebar;