import React, { useState, useEffect } from 'react';
import './style.scss';
import { TextField, Button } from '@mui/material';
import { TbArrowBigRightFilled, TbArrowBigRight } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { loginUser } from 'services/services';

const Login = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });
  const [showIcon, setShowIcon] = useState(false);
  const [showPasswordIcon, setShowPasswordIcon] = useState(false);

  const handleShowIcon = () => setShowIcon(true);
  const handleHideIcon = () => setShowIcon(false);

  const handleShowPasswordIcon = () => setShowPasswordIcon(!showPasswordIcon);

  const navigate = useNavigate();
  const handleLogin = () => {
    loginUser(userData).then((res) => {
      localStorage.setItem('userData', JSON.stringify(res.data));
      navigate('/dashboard');
    });
  };

  return (
    <div className="loginMainWrapper">
      <div className="loginFiledContainer">
        <h2>Login</h2>
        <div className="loginFieldBox">
          <TextField
            className="inputFields"
            placeholder="username"
            inputProps={{
              autocomplete: 'new-username',
              form: {
                autocomplete: 'off',
              },
            }}
            onChange={(e) => {
              setUserData({ ...userData, username: e.target.value });
            }}
          />
          <div className="inputFields passwordField">
            <TextField
              type={showPasswordIcon ? 'text' : 'password'}
              className="passwordInputField"
              placeholder="password"
              inputProps={{
                autocomplete: 'new-password',
                form: {
                  autocomplete: 'off',
                },
              }}
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
              }}
            />
            <span className="showHideIcon" onClick={handleShowPasswordIcon}>
              {showPasswordIcon ? '😎' : '🥴'}
            </span>
          </div>
          <Button
            className="btn inputFieldsBtn"
            variant="contained"
            onMouseEnter={handleShowIcon}
            onMouseLeave={handleHideIcon}
            onClick={handleLogin}
          >
            {showIcon ? <TbArrowBigRightFilled /> : <TbArrowBigRight />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
