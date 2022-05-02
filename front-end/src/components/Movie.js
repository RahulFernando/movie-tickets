import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  icon: {
    color: '#eb8334',
  },
  leftContainer: {
    display: 'flex',
    marginLeft: 'auto',
  },
  input: {
    width: '30px',
    marginLeft: '0.4rem',
  },
});

const Movie = () => {
  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image="https://pbs.twimg.com/media/FRYKrTmXsAASiRF?format=jpg&name=small"
        alt="img"
      />
      <CardContent>
        <Typography variant="subtitle1">Black Panther</Typography>
        <Typography variant="subtitle2">Colombo City Center</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <AddCircle className={classes.icon} />
        </IconButton>
        <div className={classes.leftContainer}>
          <Typography variant='body2'>No of tickets</Typography>
          <input type="number" className={classes.input} />
        </div>
      </CardActions>
    </Card>
  );
};

export default Movie;
