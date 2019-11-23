import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef('');

  const { clearFiltered, filterContacts, filtered } = contactContext;

  useEffect(() => {
    if (!filtered) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFiltered();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        name='filter'
        placeholder='Search Contacts...'
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
