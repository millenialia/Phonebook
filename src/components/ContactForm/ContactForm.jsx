import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { nanoid } from '@reduxjs/toolkit';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const checkName = (name) => {
    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return false;
    }
    return true;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;
    const id = nanoid();

    const newContact = {
      name,
      number,
      id,
    };
    if (checkName(name)) {
      dispatch(addContact(newContact));
    }
    event.currentTarget.reset();
  };

  return (
    <Container className={css.contactForm}>
      <Box component="form" action="add contact" onSubmit={onFormSubmit} noValidate sx={{ mt: 2 }}>
        <Typography component="h1" variant="h5">
          Add contact
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="number"
          label="Number"
          type="tel"
          id="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Add contact
        </Button>
      </Box>
    </Container>
  );
};
