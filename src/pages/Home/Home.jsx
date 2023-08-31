import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { ContactsIcon } from 'components/ContactsIcon/ContactsIcon';
import css from "./Home.module.css"

const Home = () => {
  return (
    <Container maxWidth= "70%" component="main" sx={{display: "flex", gap: "30px", margin: "30px 0 "}}>
        <ContactsIcon/>
      <Typography component="h1" variant="h2" className={css.header}>Everything you need to manage your contacts.</Typography>
    </Container>
  )
}


export default Home

