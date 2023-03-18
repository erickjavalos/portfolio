import React from 'react';
import '../../css/styles.css'

import Navigation from './Navigation';



// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Header(props) {
  return (
    <Navigation currentPage={props.currentPage} handlePageChange={props.handlePageChange}></Navigation>
    
  );
}

export default Header;
