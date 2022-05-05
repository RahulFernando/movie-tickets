import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { AddCircle as AddCircleIcon, Edit as EditIcon } from '@material-ui/icons';
import { makeStyles } from '@mui/styles';

// components
import Dialog from '../../components/Dialog';
import MovieForm from '../../components/MovieForm';

// actions
import { fetchMovies } from '../../actions/movieActions';
import { setModal, setSelectedMovie } from '../../slices/movieSlice';

const columns = [
  { field: 'name', headerName: 'Movie', width: 130 },
  { field: 'cast', headerName: 'Cast', width: 200 },
  {
    field: 'banner',
    headerName: 'Banner',
    width: 180,
    renderCell: (params) => (
      <img style={{ width: '50px' }} src={params.value} alt={params.row._id} />
    ),
  },
  {
    field: 'theater',
    headerName: 'Theater',
    width: 180,
    valueGetter: (params) => {
      return `${params.row.theater[0].name || ''}`;
    },
  },
  { field: 'price', headerName: 'Price', width: 130 },
];

const useStyles = makeStyles({
  addIcon: {
    color: '#eb8334',
    width: '40px',
    height: '40px',
  },
});

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const open = useSelector((state) => state.movie.openModal);
  const rows = useSelector((state) => state.movie.movieData.data.movies);

  const openModalHandler = () => {
    dispatch(setModal(true));
  };

  const editModalHandler = (select) => {
    dispatch(setModal(true));
    dispatch(setSelectedMovie(select.row));
  };

  const closeModalHandler = () => {
    dispatch(setModal(false));
    dispatch(setSelectedMovie(null));
  };

  useEffect(() => {
    dispatch(fetchMovies(''));
  }, [dispatch]);

  const data_columns = [
    ...columns,
    {
      field: '_',
      headerName: '',
      width: 130,
      renderCell: (params) => (
        <IconButton onClick={editModalHandler.bind(null, params)}>
          <EditIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <Grid container>
      <Grid item xs={12}>
        <IconButton sx={{ float: 'right' }} onClick={openModalHandler}>
          <AddCircleIcon className={classes.addIcon} />
        </IconButton>
      </Grid>
      <Grid item xs={12} p={2}>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            columns={data_columns}
            rows={rows || []}
            getRowId={(row) => row._id}
            hideFooter
          />
        </div>
      </Grid>
      <Dialog open={open} onCose={closeModalHandler} title="Movie">
        <MovieForm />
      </Dialog>
    </Grid>
  );
};

export default Dashboard;
