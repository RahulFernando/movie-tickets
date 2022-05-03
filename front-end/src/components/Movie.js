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

const Movie = ({ img, title, theater, show_time }) => {
  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt="img"
      />
      <CardContent>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="subtitle2">{theater}</Typography>
        <Typography variant="subtitle2">{show_time}</Typography>
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
