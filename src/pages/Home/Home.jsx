import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { ContactsIcon } from 'components/ContactsIcon/ContactsIcon';
import css from "./Home.module.css"

const Home = () => {
  return (
    <Container component="main" className={css.homeBox}>
        <ContactsIcon/>
      <Typography component="h1" variant="h2" className={css.header}>Everything you need to manage your contacts.</Typography>
    </Container>
  )
}


export default Home

