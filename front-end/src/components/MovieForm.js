import React, { useState } from 'react';
import { Grid, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

// components
import TextField from './TextField';
import Button from './Button';

const movieForm = [
  {
    label: 'Movie name',
    name: 'name',
    type: 'text',
  },
  {
    label: 'Cast',
    name: 'cast',
    type: 'text',
  },
  {
    label: 'Banner',
    name: 'banner',
    type: 'text',
  },
  {
    label: 'Theater',
    name: 'theater',
    type: 'dropdown',
  },
];

const MovieForm = () => {
  const [movie, setMovie] = useState({
    name: '',
    cast: '',
    banner: '',
    theater: '',
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setMovie((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <form>
      <Grid container spacing={2}>
        {movieForm.map((item, index) => {
          if (item.type === 'dropdown') {
            return (
              <Grid key={index} item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">{item.label}</InputLabel>
                  <Select
                    fullWidth
                    name={item.name}
                    label={item.label}
                    value={movie[item.name]}
                    onChange={onChangeHandler}
                  >
                    <MenuItem value="">None</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            );
          }
          return (
            <Grid key={index} item xs={12}>
              <TextField
                label={item.label}
                name={item.name}
                value={movie[item.name]}
                onChange={onChangeHandler}
              />
            </Grid>
          );
        })}
        <Grid item xs={6} />
        <Grid item xs={6}>
          <Button label="Add" />
        </Grid>
      </Grid>
    </form>
  );
};

export default MovieForm;
