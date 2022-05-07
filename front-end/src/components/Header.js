import { useContext } from 'react';
import {
  IconButton,
  Box,
  Toolbar,
  Typography,
  AppBar,
  Container,
  Badge,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { ShoppingCart } from '@material-ui/icons';

// components
import LoginForm from './LoginForm';
import Cart from './Cart';
import Dialog from './Dialog';

// reducers
import { setModal, setCart } from '../slices/authSlice';

// context
import AuthContext from '../store/auth-context';

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
  cartIcon: {
    color: 'white',
  },
  badge: {
    '& .MuiBadge-badge': {
      color: 'white',
      backgroundColor: 'black',
    },
  },
});

const Header = () => {
  const dispatch = useDispatch();
  const classes = useStyle();
  const { token, user, onLogout } = useContext(AuthContext);

  const openCart = useSelector((state) => state.authentication.openCart);
  const openLogin = useSelector((state) => state.authentication.openModal);
  const movies = useSelector((state) => state.movie.cartData.movies);
  const cartData = useSelector((state) => state.movie.cartData);

  const loginClickHandler = () => {
    dispatch(setModal(true));
  };

  const dialogCloseHandler = () => {
    dispatch(setModal(false));
  };

  const cartOpenHandler = () => {
    if (cartData.movies.length > 0) {
      dispatch(setCart(true));
    }
  };

  const cartCloseHandler = () => {
    dispatch(setCart(false));
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
            {token && user.role !== 'MOVIE_ADMIN' && (
              <Box className={classes.rightMenu}>
                <IconButton onClick={cartOpenHandler}>
                  <Badge badgeContent={movies.length} className={classes.badge}>
                    <ShoppingCart className={classes.cartIcon} />
                  </Badge>
                </IconButton>
              </Box>
            )}
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
      <Dialog title="Login" open={openLogin} onCose={dialogCloseHandler}>
        <LoginForm />
      </Dialog>
      <Dialog title="You Cart" open={openCart} onCose={cartCloseHandler}>
        <Cart />
      </Dialog>
    </>
  );
};

export default Header;
