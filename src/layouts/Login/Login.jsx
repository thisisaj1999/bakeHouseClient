import React, { useState } from 'react';
import './style.scss';
import { TextField, Button } from '@mui/material';
import { TbArrowBigRightFilled, TbArrowBigRight } from 'react-icons/tb';
import './style.scss';
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [showPasswordIcon, setShowPasswordIcon] = useState(false);

  const handleShowIcon = () => setShowIcon(true);
  const handleHideIcon = () => setShowIcon(false);

  const handleShowPasswordIcon = () => setShowPasswordIcon(!showPasswordIcon);

  const navigate = useNavigate();
  const handleLogin = () => navigate('/dashboard')

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
