import { Container } from '@mui/material';

// components
import Header from './components/Header';

const Layout = (props) => {
  return (
    <>
      <Header />
      <Container>{props.children}</Container>
    </>
  );
};

export default Layout;
