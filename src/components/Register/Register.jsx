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
		password: "",
		confirmPassword: "",
	});

	const navigate = useNavigate();

	const [showIcon, setShowIcon] = useState(false);

	const handleShowIcon = () => setShowIcon(true);
	const handleHideIcon = () => setShowIcon(false);

	const handlePasswordChange = (e) => {
		const { name, value } = e.target;
		setPasswordValidation((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	useEffect(() => {
		const { confirmPassword, password } = passwordValidation;

		if (confirmPassword === password) {
			setUserData({
				...userData,
				password: passwordValidation.confirmPassword,
			});
		}
	}, [passwordValidation]);

	const handleRegister = (e) => {
		e.preventDefault();
		const { confirmPassword, password } = passwordValidation;

		if (confirmPassword !== password) {
			enqueueSnackbar("Passwords do not match", { variant: "error" });
		} else {
			registerUser(userData)
				.then((res) => {
					if (res?.status === 201) {
						localStorage.setItem(
							"token",
							JSON.stringify(res?.data?.token)
						);
						enqueueSnackbar("Registration successful", {
							variant: "success",
						});
						navigate("/dashboard");
					} else {
						enqueueSnackbar("Registration failed", {
							variant: "error",
						});
					}
				})
				.catch((err) => {
					enqueueSnackbar("An error occurred during registration", {
						variant: "error",
					});
				});
		}
	};

	return (
		<div className="registerMainWrapper">
			<div className="registerFiledContainer">
				<h2>Register</h2>

				<form onSubmit={handleRegister} className="loginFieldBox">
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
						value={userData.name}
						onChange={(e) => {
							setUserData({
								...userData,
								name: e.target.value,
							});
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
						value={userData.email}
						onChange={(e) => {
							setUserData({
								...userData,
								email: e.target.value,
							});
						}}
					/>

					{/* Password */}
					<TextField
						type="text"
						className="inputFields"
						placeholder="Password"
						name="password"
						value={passwordValidation.password}
						inputProps={{
							autocomplete: "new-password",
							form: {
								autocomplete: "off",
							},
						}}
						onChange={handlePasswordChange}
					/>

					{/* ConfirmPassword */}
					<TextField
						type="password"
						className="inputFields"
						placeholder="Confirm password"
						name="confirmPassword"
						value={passwordValidation.confirmPassword}
						inputProps={{
							autocomplete: "new-password",
							form: {
								autocomplete: "off",
							},
						}}
						onChange={handlePasswordChange}
					/>

					{/* Submit */}
					<Button
						className="btn inputFieldsBtn"
						variant="contained"
						type="submit"
						onMouseEnter={handleShowIcon}
						onMouseLeave={handleHideIcon}
						onClick={handleRegister}
						disabled={
							!userData.name ||
							!userData.email ||
							!passwordValidation.password ||
							!passwordValidation.confirmPassword
						}
					>
						{showIcon ? (
							<TbArrowBigRightFilled />
						) : (
							<TbArrowBigRight />
						)}
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Register;
