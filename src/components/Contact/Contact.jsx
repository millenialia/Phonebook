import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/contacts/operations';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';

import css from "./Contact.module.css";

export const Contact = ({contact}) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <Box sx={{ mt: 2 }} className={css.contact}>
            <Typography>{contact.name}: {contact.number}</Typography>
        <IconButton type="button" onClick={handleDelete} id={contact.id}><DeleteIcon/></IconButton>
      </Box>
  )

}
