import {
  Home,
  Upload,
  FileText,
  Brain,
  BarChart3,
  CalendarCheck,
  MessageSquare,
  Award,
  Crown,
  CreditCard,
  Settings,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { useState } from "react";

const UserSidebar = () => {
  const [openInterview, setOpenInterview] = useState(false);

  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white">
      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <h2 className="text-2xl font-bold text-cyan-400">
          CareerForge_BD
        </h2>
         <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg ${
              isActive
                ? "bg-cyan-500"
                : "hover:bg-slate-800"
            }`
          }
        >
          <Home size={20} />
          Back To Home
        </NavLink>
      </div>

      {/* Menu */}
      <nav className="p-4 space-y-2">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg ${
              isActive
                ? "bg-cyan-500"
                : "hover:bg-slate-800"
            }`
          }
        >
          <Home size={20} />
          Dashboard Home
        </NavLink>

        <NavLink
          to="/dashboard/upload-cv"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg ${
              isActive
                ? "bg-cyan-500"
                : "hover:bg-slate-800"
            }`
          }
        >
          <Upload size={20} />
          Upload CV
        </NavLink>
        <NavLink
          to="/dashboard/my-cvs"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg ${
              isActive
                ? "bg-cyan-500"
                : "hover:bg-slate-800"
            }`
          }
        >
          <FileText size={20} />
          My CVs
        </NavLink>

        <NavLink
          to="/dashboard/ai-analysis"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg ${
              isActive
                ? "bg-cyan-500"
                : "hover:bg-slate-800"
            }`
          }
        >
          <Brain size={20} />
          AI Analysis
        </NavLink>

        <NavLink
          to="/dashboard/ats-report"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg ${
              isActive
                ? "bg-cyan-500"
                : "hover:bg-slate-800"
            }`
          }
        >
          <BarChart3 size={20} />
          ATS Report
        </NavLink>


        <NavLink
          to="/dashboard/daily-tasks"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg ${
              isActive
                ? "bg-cyan-500"
                : "hover:bg-slate-800"
            }`
          }
        >
          <CalendarCheck size={20} />
          Daily Tasks
        </NavLink>

        {/* Mock Interview */}
        <button
          onClick={() => setOpenInterview(!openInterview)}
          className="flex justify-between items-center w-full p-3 rounded-lg hover:bg-slate-800"
        >
          <div className="flex items-center gap-3">
            <MessageSquare size={20} />
            Mock Interview
          </div>

          {openInterview ? (
            <ChevronDown size={18} />
          ) : (
            <ChevronRight size={18} />
          )}
        </button>

        {openInterview && (
          <div className="ml-10 mt-2 space-y-2">

            <NavLink
              to="/dashboard/mock-interview/quiz"
              className="block hover:text-cyan-400"
            >
              Quiz Interview
            </NavLink>

            <NavLink
              to="/dashboard/mock-interview/coding"
              className="block hover:text-cyan-400"
            >
              Coding Interview
            </NavLink>

            <NavLink
              to="/dashboard/mock-interview/behavioral"
              className="block hover:text-cyan-400"
            >
              Behavioral Interview
            </NavLink>

          </div>
        )}

        <NavLink
          to="/dashboard/readiness-score"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg ${
              isActive
                ? "bg-cyan-500"
                : "hover:bg-slate-800"
            }`
          }
        >
          <Award size={20} />
          Readiness Score
        </NavLink>

        <NavLink
          to="/dashboard/subscription"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg ${
              isActive
                ? "bg-cyan-500"
                : "hover:bg-slate-800"
            }`
          }
        >
          <Crown size={20} />
          Subscription
        </NavLink>

        <NavLink
          to="/dashboard/payment-history"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg ${
              isActive
                ? "bg-cyan-500"
                : "hover:bg-slate-800"
            }`
          }
        >
          <CreditCard size={20} />
          Payment History
        </NavLink>

        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg ${
              isActive
                ? "bg-cyan-500"
                : "hover:bg-slate-800"
            }`
          }
        >
          <Settings size={20} />
          Settings
        </NavLink>

      </nav>
    </aside>
  );
};

export default UserSidebar;