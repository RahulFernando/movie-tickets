import React, { useState } from 'react';
import { Grid } from '@mui/material';

// components
import TextField from './TextField';
import Button from './Button';

const LoginForm = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [userNameError, setUserNameError] = useState();
  const [passwordError, setPasswordError] = useState();

  const onChangeHandler = (event) => {
    const { name, value } = event;

    if (name === 'userName') {
      setUserName(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (userName.trim() === '') {
      setUserNameError('User name is required');
      return;
    }
    if (password.trim() === '') {
      setPasswordError('Password is required');
      return;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="User Name"
            name="userName"
            value={userName}
            error={userNameError}
            helperText={userNameError}
            onChange={onChangeHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            name="password"
            value={password}
            error={passwordError}
            helperText={passwordError}
            onChange={onChangeHandler}
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={12}>
            <Button label="Login" />
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
