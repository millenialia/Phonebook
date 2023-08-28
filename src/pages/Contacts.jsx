import { ContactForm } from 'components/ContactForm/ContactForm'
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';


const Contacts = () => {
  const dispatch = useDispatch()

  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (

      <div className='phonebookBlock'>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        {error ? <b>{error}</b> : <Filter/>}
        {isLoading && !error && <b>Request in progress...</b> }
        <ContactList/>
      </div>
    );

};

export default Contacts
