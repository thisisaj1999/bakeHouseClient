import React, { useEffect, useState, useMemo } from "react";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
	const [user, setUser] = useState();

  const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem("token") === null) {
			navigate("/login");
		}
		setUser(JSON.parse(localStorage.getItem("userData")));
	}, []);

	return (
		<>
			<SideNavbar />
		</>
	);
};

export default Dashboard;
