import React, { useEffect, useState } from "react";
import "./style.scss";

import { TextField, Button } from "@mui/material";
import { TbArrowBigRightFilled, TbArrowBigRight } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { registerUser } from "services/services";
import { useSnackbar } from "notistack";

const Register = () => {
	const { enqueueSnackbar } = useSnackbar();

	const [userData, setUserData] = useState({
		name: "",
		email: "",
		password: "",
	});

  const [passwordValidation, setPasswordValidation] = useState({
    password: '',
    confirmPassword: '',
  });

	const navigate = useNavigate();

	const [showIcon, setShowIcon] = useState(false);

	const handleShowIcon = () => setShowIcon(true);
	const handleHideIcon = () => setShowIcon(false);

	const handleRegister = () => {
		registerUser(userData).then((res) => {
			if (res?.status === 200) {
				localStorage.setItem("token", JSON.stringify(res?.data?.token));
				enqueueSnackbar("Registration successful", {
					variant: "success",
				});
				navigate("/dashboard");
			} else {
				enqueueSnackbar("Login failed", { variant: "error" });
			}
		});
	};


  useEffect(()=>{

  },[passwordValidation])

	return (
		<div className="registerMainWrapper">
			<div className="registerFiledContainer">
				<h2>Register</h2>
				<div className="loginFieldBox">
					{/* Name */}
					<TextField
						className="inputFields"
						placeholder="Name"
						type="text"
						inputProps={{
							autocomplete: "new-name",
							form: {
								autocomplete: "off",
							},
						}}
						onChange={(e) => {
							setUserData({ ...userData, name: e.target.value });
						}}
					/>

					{/* Email */}
					<TextField
						className="inputFields"
						placeholder="Email"
						type="email"
						inputProps={{
							autocomplete: "new-email",
							form: {
								autocomplete: "off",
							},
						}}
						onChange={(e) => {
							setUserData({ ...userData, email: e.target.value });
						}}
					/>

					{/* Password */}
					<TextField
						type="text"
						className="inputFields"
						placeholder="Password"
						inputProps={{
							autocomplete: "new-password",
							form: {
								autocomplete: "off",
							},
						}}
					/>
					
          {/* ConfirmPassword */}
          <TextField
						type="password"
						className="inputFields"
						placeholder="Confirm password"
						inputProps={{
							autocomplete: "new-password",
							form: {
								autocomplete: "off",
							},
						}}
						onChange={(e) => {
							setUserData({
								...userData,
								password: e.target.value,
							});
						}}
					/>

          {/* Submit */}
					<Button
						className="btn inputFieldsBtn"
						variant="contained"
						onMouseEnter={handleShowIcon}
						onMouseLeave={handleHideIcon}
						onClick={handleRegister}
					>
						{showIcon ? (
							<TbArrowBigRightFilled />
						) : (
							<TbArrowBigRight />
						)}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Register;
