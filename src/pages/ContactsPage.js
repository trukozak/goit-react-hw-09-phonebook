import React from 'react';
import AdvForm from '../components/Admin/AdvForm';
import Filter from '../components/Filter/Filter';
import ContactsList from '../components/ContactsList/ContactsList';
import Section from '../components/Section/Section';

const ContactsPage = () => {
  return (
    <Section title=''>
      <AdvForm />
      <Filter />
      <ContactsList />
    </Section>
  );
};

export default ContactsPage;
