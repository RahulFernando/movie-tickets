import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import SearchBar from 'material-ui-search-bar';

// components
import Movie from '../../components/Movie';

// actions
import { fetchMovies } from '../../actions/movieActions';

const Home = () => {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movie.movieData.data.movies);

  const [search, setSearch] = useState('');

  const onSearchHandler = (value) => {
    setSearch(value);
  };

  const requestSearchHandler = () => {
    dispatch(fetchMovies(search));
  };

  const cancelSearchHandler = () => {
    dispatch(fetchMovies(''));
  };

  useEffect(() => {
    dispatch(fetchMovies(''));
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} />
      {/* <Grid item xs={6} md={4}>
        <FormControl fullWidth>
          <InputLabel>By Theater</InputLabel>
          <Select label="By theater">
            <MenuItem value="ccc">CCC</MenuItem>
          </Select>
        </FormControl>
      </Grid> */}
      <Grid item xs={6}>
        <SearchBar
          value={search}
          onChange={onSearchHandler}
          onRequestSearch={requestSearchHandler}
          onCancelSearch={cancelSearchHandler}
          style={{ height: '55px', width: '100%' }}
        />
      </Grid>
      <Grid container item xs={12}>
        {movies &&
          movies.map((movie) => (
            <Grid item xs={3}>
              <Movie
                key={movie._id}
                id={movie._id}
                img={movie.banner}
                title={movie.name}
                theater={movie.theater.name}
                show_time={movie.show_time}
                price={movie.price}
              />
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

export default Home;
