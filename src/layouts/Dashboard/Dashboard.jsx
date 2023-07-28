import React, { useEffect, useState, useMemo } from "react";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack'

const Dashboard = () => {
	const [user, setUser] = useState();
  const { enqueueSnackbar } = useSnackbar()

  const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem("token") === null) {
      enqueueSnackbar('Un-verified User', {variant : 'error'});
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
