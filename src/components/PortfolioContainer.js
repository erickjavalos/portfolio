import React, { useState } from 'react';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import background from './images/background.png'
import './css/font.css'

// define styles for navbar
const styles = {

  myText: {
    fontFamily: 'GagalinRegular, sans-serif',
  }
};


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Portfolio');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {

    if (currentPage === 'About') {
      return <About currentPage={currentPage} handlePageChange={handlePageChange}/>;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio currentPage={currentPage} handlePageChange={handlePageChange}/>;
    }
    if (currentPage === 'Contact')
    {
      return <Contact currentPage={currentPage} handlePageChange={handlePageChange}/>;
    }
    return <Resume currentPage={currentPage} handlePageChange={handlePageChange}/>
  };

  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div className="background" style={styles.myText}>
      {/* render content */}
      {renderPage()}
    </div>
  );
}
