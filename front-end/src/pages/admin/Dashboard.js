import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { AddCircle as AddCircleIcon } from '@material-ui/icons';
import { makeStyles } from '@mui/styles';

// components
import Dialog from '../../components/Dialog';
import MovieForm from '../../components/MovieForm';

// actions
import { setModal } from '../../slices/movieSlice';

const columns = [
  { field: 'id', headerName: '#', width: 70 },
  { field: 'movie', headerName: 'Movie', width: 130 },
  { field: 'theater', headerName: 'Theater', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
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

  const openModalHandler = () => {
    dispatch(setModal(true));
  };

  const closeModalHandler = () => {
    dispatch(setModal(false));
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <IconButton sx={{ float: 'right' }} onClick={openModalHandler}>
          <AddCircleIcon className={classes.addIcon} />
        </IconButton>
      </Grid>
      <Grid item xs={12} p={2}>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid columns={columns} rows={rows} hideFooter />
        </div>
      </Grid>
      <Dialog open={open} onCose={closeModalHandler} title="Movie">
        <MovieForm />
      </Dialog>
    </Grid>
  );
};

export default Dashboard;
