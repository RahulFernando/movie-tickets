import {
  IconButton,
  Box,
  Toolbar,
  Typography,
  AppBar,
  Container,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useContext } from 'react';

// components
import LoginForm from './LoginForm';
import Dialog from './Dialog';

// reducers
import { setModal } from '../slices/authSlice';

// context
import AuthContext from '../store/auth-context';
import { useDispatch } from 'react-redux';

const useStyle = makeStyles({
  logo: {
    marginLeft: 5,
    display: {
      xs: 'none',
      md: 'flex',
    },
    color: '#ffff',
  },
  leftMenu: {
    flexGrow: 1,
    display: { xs: 'flex', md: 'none' },
  },
  rightMenu: {
    flexGrow: 0,
  },
});

const Header = () => {
  const dispatch = useDispatch();
  const classes = useStyle();
  const { token, onLogout } = useContext(AuthContext);

  const loginClickHandler = () => {
    dispatch(setModal(true));
  };

  const logoutClickHandler = () => {
    onLogout();
    window.location.reload();
  };

  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              className={classes.logo}
            >
              Movie Tickets
            </Typography>
            <Box className={classes.leftMenu} />
            {!token && (
              <Box className={classes.rightMenu}>
                <IconButton onClick={loginClickHandler}>
                  <Typography variant="subtitle1" color="white">
                    Login
                  </Typography>
                </IconButton>
              </Box>
            )}
            {token && (
              <Box className={classes.rightMenu}>
                <IconButton onClick={logoutClickHandler}>
                  <Typography variant="subtitle1" color="white">
                    Logout
                  </Typography>
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Dialog title="Login">
        <LoginForm />
      </Dialog>
    </>
  );
};

export default Header;
