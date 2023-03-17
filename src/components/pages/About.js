import React from 'react';
import Header from './components/Header';
import AboutCard from './components/AboutCard'
import '../css/styles.css'
import pfp from '../images/pfp.png'



export default function About(props) {
  return (
    <>
    {/* add header to the about page */}
    <Header currentPage={props.currentPage} handlePageChange={props.handlePageChange}></Header>
    <AboutCard pfp={pfp}></AboutCard>
    {/* TODO: ADD FOOTER */}
    <></>

    </>
  );
}
