import React, { useState } from 'react';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import background from './images/background.png'
import './css/font.css'

// define styles for navbar
const styles = {
  // background styling
  backgroundStyle: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat-y',
    width: '100vw',
    height: '100vh',
    // backgroundAtachment:'fixed'
  },
  // gagalin font
  myText: {
    fontFamily: 'GagalinRegular, sans-serif',
  }

};
// combines the style objects into one object
const combinedStyles = { ...styles.backgroundStyle, ...styles.myText };


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

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
    <div style={combinedStyles}>

      {/* We are passing the currentPage from state and the function to update it */}
      {/* <Header currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
