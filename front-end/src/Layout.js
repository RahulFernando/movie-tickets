import { Route, Routes } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import AuthProvider from './store/auth-provider';

// components
import Header from './components/Header';

// pages
import Home from './pages/home/Home';

const useStyles = makeStyles({
  pageContainer: {
    padding: '0px 10px 0px 10px',
    marginTop: '90px',
  },
});

const Layout = (props) => {
  const classes = useStyles();

  return (
    <AuthProvider>
      <Header />
      <div className={classes.pageContainer}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default Layout;
