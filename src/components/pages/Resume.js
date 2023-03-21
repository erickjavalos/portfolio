import React from 'react';
import Header from './components/Header';
import resume from '../resume/Engineering.pdf'


const styles = {
  title: {
      width: "100%",
      fontSize: '2rem',
      color: 'white',
  },
  card : {
    background: 'rgba(4,22,90,0.5)',
    width: '55%',
    borderRadius: '4rem',
  },
  text: {
    marginTop: '1rem',
    color: 'white',
    fontSize: '1rem',
    width: '100%'
  },
  experienceTitle: {
    marginTop: '1rem',
    color: 'white',
    fontSize: '1.45rem',
    width: '100%'
  },
  download: {
    width:'100%',
    backgroundColor: 'pink'
  },
  experiences: {
    width: '100%',
    color: 'white'
  },
  bullets: {
    color: 'white',
    margin: '0px',
    padding: '0px',
    textAlign: 'center',
    fontSize: '.9rem',
  }
}

export default function Contact(props) {
  return (
    <>
      <Header currentPage={props.currentPage} handlePageChange={props.handlePageChange}></Header>
      <div className="portfolio-container mx-auto m-5 p-4" style={styles.card}>
        <h1 className="text-center" style={styles.title}>Resume</h1>
        <p className="text-center"style={styles.text}>Download my <a href={resume} download="resume.pdf" title="Download">resume</a></p>
       
        <h3 className="text-center" style={styles.experienceTitle}>Front End Experience</h3>
        <ul style={styles.bullets}>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Responsive Design</li>
          <li>Bootstrap</li>
          <li>TailWind</li>
          <li>React</li>
        </ul>

        <h3 className="text-center" style={styles.experienceTitle}>Back End Experience</h3>
        <ul style={styles.bullets}>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>JQuery</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>

    </>
    
  );
}
