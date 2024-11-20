import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OrganizationHome from "./Dashboard/OrganizationHome";
import DonerHome from "./Dashboard/DonerHome";
import HospitalHome from "./Dashboard/HospitalHome";
import HomeAdmin from "./Dashboard/Admin/HomeAdmin";
function HomePage() {
  let { user } = useSelector((item) => item.auth);
  let navigate = useNavigate();
  return (
    <>
      {user?.role === "originazation" && <OrganizationHome />}
      {user?.role === "doner" && <DonerHome />}
      {user?.role === "hospital" && <HospitalHome />}
      {user?.role === "admin" && <HomeAdmin />}
    </>
  );
}

export default HomePage;
