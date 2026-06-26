import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "../Context/AuthContext";

const useRole = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [role, setRole] = useState("");
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    axiosSecure.get(`/users/role/${user.email}`).then((res) => {
      setRole(res.data.role);
      setRoleLoading(false);
    });
  }, [user, axiosSecure]);

  return [role, roleLoading];
};

export default useRole;