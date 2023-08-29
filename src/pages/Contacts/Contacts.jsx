import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import css from './Contacts.module.css';
import { Loader } from 'components/Loader/Loader';

const Contacts = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <div className={css.contactForms}>
        <ContactForm />
        {error ? <b className={css.error}>{error}</b> : <Filter />}
      </div>
      {isLoading && !error && <Loader />}
      <ContactList />
    </div>
  );
};

export default Contacts;
