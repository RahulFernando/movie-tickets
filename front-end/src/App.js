import { ThemeProvider } from '@mui/system';
import Layout from './Layout';

// theme
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>

      </Layout>
    </ThemeProvider>
  );
}

export default App;
