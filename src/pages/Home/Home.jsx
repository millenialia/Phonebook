// import ContactsIcon from '@mui/icons-material/Contacts';
import Container from '@mui/material/Container';
import { ContactsIcon } from 'components/ContactsIcon/ContactsIcon';
import css from "./Home.module.css"
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <Container component="main" className={css.homeBox}>

        <ContactsIcon/>
      <Typography component="h1" variant="h2" className={css.header}>Everything you need to manage your contacts.</Typography>
    </Container>
  )
}


export default Home

