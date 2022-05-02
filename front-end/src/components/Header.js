import {
  IconButton,
  Box,
  Toolbar,
  Typography,
  Avatar,
  Tooltip,
  AppBar,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

// assets
import ProfileImg from '../assets/img/avatar.jpg';

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
  const classes = useStyle();

  return (
    <AppBar>
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
        <Box className={classes.rightMenu}>
          <Tooltip title="Avatar">
            <IconButton>
              <Avatar alt="user" src={ProfileImg} />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
