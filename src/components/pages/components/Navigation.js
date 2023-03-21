import React from 'react';
import '../../css/styles.css'

const styles = {
  colors: {
    color: 'white'
  },
  textSize:{
    fontSize: '3rem',
    color: 'white',
    textDecoration: 'none'
  },
  colorsNavLinks: {
    color: 'white !important'
  }
}


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({ currentPage, handlePageChange }) {
  return (
    <>
    <nav className="navbar navbar-expand-lg" style={styles.colors}>
      <div className="d-flex flex-grow-1 text-center">
        <div className="container-fluid">
          <a 
            href="#about"
            onClick={() => handlePageChange('about')}
            // className={'nav-link'}
            style={styles.textSize}
          >
            Erick Avalos
          </a>

          <ul className="nav nav-tabs text-center justify-content-center my-1" >
           <li className="nav-item">
             <a
               href="#about"
               onClick={() => handlePageChange('about')}
               // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
               className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
             >
               About
             </a>
          </li>

          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange('portfolio')}
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange('contact')}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange('resume')}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </a>
          </li>

          
          </ul>
    
        </div>
      </div>
    </nav>
    </>
    
  );
}

export default Navigation;
