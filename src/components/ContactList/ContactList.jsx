import * as React from 'react';

import { Contact } from "../Contact/Contact"
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "redux/contacts/selectors";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Container from '@mui/material/Container';

import css  from "./ContactList.module.css";

export const ContactList = () => {

  const visibleContacts = useSelector(selectVisibleContacts)

  return (
<Container className={css.contactList}>
    <List className= {css.contactNameList}>
      {visibleContacts.map((contact) => {
        return (
          <ListItem key={contact.id}>
          <Contact
              contact={contact} />
            </ListItem>
        )
      })}
      </List>
      </Container>
)
}
