import { Outlet } from "react-router-dom";
import UserSidebar from "./UserSidebar";
import AdminSidebar from "./AdminSidebar";
import useRole from "../../Hooks/useRole";

const Dashboard = () => {
  const [role, roleLoading] = useRole();

  if (roleLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      {role === "admin" ? <AdminSidebar /> : <UserSidebar />}

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;