import * as React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    const filterName = e.currentTarget.value;
    dispatch(setFilter(filterName));
  };

  return (
    <Container className={css.filter}>
      <Box component="form" action="filter contact" noValidate sx={{ mt: 2 }}>
        <Typography component="h2" variant="h5">
          Find contacts by name
        </Typography>
        <TextField
          margin="normal"
          label="Name"
          fullWidth
          id="filter"
          name="filter"
          autoComplete="name"
          onChange={handleChange}
          value={filter.value}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </Box>
    </Container>
  );
};
