import React from 'react';
import Header from './components/Header';

import Projects from './components/Projects'



export default function Portfolio(props) {
  return (
    <>
      <Header currentPage={props.currentPage} handlePageChange={props.handlePageChange}></Header>
      <Projects></Projects>
    </>
  );
}
