import React from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm'

export default function Contact(props) {
  return (
    <>
      <Header currentPage={props.currentPage} handlePageChange={props.handlePageChange}></Header>
      <ContactForm></ContactForm>
    </>
    
  );
}
