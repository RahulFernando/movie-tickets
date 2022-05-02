import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import SearchBar from 'material-ui-search-bar';
import Movie from '../../components/Movie';

const useStyles = makeStyles({
  container: {
    height: '48px',
  },
});

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={4}>
        <SearchBar style={{ height: '55px' }} />
      </Grid>
      <Grid item xs={6} md={4}>
        <FormControl fullWidth>
          <InputLabel>By Theater</InputLabel>
          <Select label="By theater">
            <MenuItem value="ccc">CCC</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Movie />
      </Grid>
    </Grid>
  );
};

export default Home;
