import React from 'react';
import Card from 'react-bootstrap/Card';
import '../css/styles.css'

// import images 
import onlyrecipes from '../images/portolio/only-recipes.png'
import marvelGeeks from '../images/portolio/marvel-geeks.png'
import weather from '../images/portolio/weather-dashboard.png'
import javascriptQuiz from '../images/portolio/javascript-quiz.png'
import workdayPlanner from '../images/portolio/workday-planner.png'
import buildDragon from '../images/portolio/build-dragon.png'
import gitLogo from '../images/logos/github-mark-white.png'


const styles = {
  portfolioImg: {
    width: '100%',
    height: '100%'
  },
  logoImg: {
    width : '24px',
    height: '24px'
  }
}

export default function Portfolio() {
  return (
    <>
    <div className='cards-portfolio text-center text-color mx-auto p-lg-4 border-radius-card' style={{background: 'rgba(255,255,255,0.3)' }}>
      
      <div className="row cards-overview" style={{width:'100%'}}>
        <div className="row card-title-size text-center">Portfolio</div>

        {/* only recipes */}
        <div className="card-portfolio card-hover" >
          <a className="text-decoration-none" href="https://only-recipes-app.herokuapp.com/">

            {/* recipes image */}
            <img className="portfolio-img" style={styles.portfolioImg}src={onlyrecipes}></img>
            <div className="text">Recipe Tracker <a href="https://github.com/erickjavalos/only-recipes"><img className="logo-hover"style={styles.logoImg}src={gitLogo}></img></a></div>
            <div className="text-sum">Model-View-Controller Full Stack App</div>
         </a>
        </div>
        
        <div className="card-portfolio card-hover">
          {/* marvel geeks image */}
          <a className="text-decoration-none" href="https://wiilki.github.io/marvel-geeks-fandom-page/">

            {/* recipes image */}
            <img className="portfolio-img" style={styles.portfolioImg}src={marvelGeeks}></img>
            <div className="text">Marvel Geeks <a href="https://github.com/wiilki/marvel-geeks-fandom-page"><img className="logo-hover"style={styles.logoImg}src={gitLogo}></img></a></div>
            <div className="text-sum">HTML CSS, Javascript, and Web Apis App</div>
         </a>

        </div>

        <div className="card-portfolio card-hover">
          {/* weather image */}
          <a className="text-decoration-none" href="https://erickjavalos.github.io/weather-dashboard/">

            {/* recipes image */}
            <img className="portfolio-img" style={styles.portfolioImg}src={weather}></img>
            <div className="text">Weather dashboard <a href="https://github.com/erickjavalos/weather-dashboard"><img className="logo-hover"style={styles.logoImg}src={gitLogo}></img></a></div>
            <div className="text-sum">HTML CSS, Javascript, and Web Apis App</div>
         </a>
           
        </div>
        
        <div className="card-portfolio card-hover">
          {/* Javascript quiz image */}
          <a className="text-decoration-none" href="https://erickjavalos.github.io/javascript-quiz/">

            {/* recipes image */}
            <img className="portfolio-img" style={styles.portfolioImg}src={javascriptQuiz}></img>
            <div className="text">JavaScript Quiz <a href="https://github.com/erickjavalos/javascript-quiz"><img className="logo-hover"style={styles.logoImg}src={gitLogo}></img></a></div>
            <div className="text-sum">HTML CSS, and Javascript App</div>
         </a>
        </div>

        <div className="card-portfolio card-hover">
          {/* workdayPlanner image */}
          <a className="text-decoration-none" href="https://erickjavalos.github.io/work-day-scheduler/">

            {/* recipes image */}
            <img className="portfolio-img" style={styles.portfolioImg}src={workdayPlanner}></img>
            <div className="text">Work Day Scheduler <a href="https://github.com/erickjavalos/work-day-scheduler"><img className="logo-hover"style={styles.logoImg}src={gitLogo}></img></a></div>
            <div className="text-sum">HTML CSS, Javascript App</div>
         </a>
            
        </div>

        <div className="card-portfolio card-hover">
          {/* workdayPlanner image */}
          <a className="text-decoration-none" href="https://erickjavalos.github.io/build-your-own-dragon/">

            {/* recipes image */}
            <img className="portfolio-img" style={styles.portfolioImg}src={buildDragon}></img>
            <div className="text">Build Your Own Dragon <a href="https://github.com/erickjavalos/build-your-own-dragon"><img className="logo-hover"style={styles.logoImg}src={gitLogo}></img></a></div>
            <div className="text-sum">HTML CSS, Javascript App</div>
         </a>
        </div>
      </div>
      

    </div>
      
    </>
    // <Card className="cards-portfolio text-center text-color mx-auto my-lg-5 p-lg-5 border-radius-card" style={{background: 'rgba(255,255,255,0.25)' }}>
    //   <Card.Body>
    //     {/* Portfolio top level */}
    //     <Card.Title className="card-title-size" > Portfolio</Card.Title>
    //   </Card.Body>
    //     {/* first project */}
    //     <Card className="card-portfolio text-color my-lg-5 p-lg-5 border-radius-card" style={{background: 'rgba(255,255,255,0.25)' }}>
    //       <h1>HELLO </h1>
    //     </Card>
    //     <Card className="card-portfolio text-color my-lg-5 p-lg-5 border-radius-card" style={{background: 'rgba(255,255,255,0.25)' }}>
    //       <h1>HELLO </h1>
    //     </Card>
    //     {/* <Card.Img variant="top" src={pfp} className="m-3"style={{width: '150px',height:'150px', borderRadius: '75px'}} />
    //     <Card.Text className='card-text-size'>
    //     My name is Erick, I am currently 25 years old based out of Los Angeles, Ca. In 2020, I received a bachelors in Electrical Engineering with a specialization in Signals and Systems. 
    //     </Card.Text>
    //     <Card.Text className='card-text-size'>
    //     I have experience in a variety of fields like robotics, embedded software development, hardware development, blockchain, and web develeopment. 
    //     </Card.Text>
    //     <Card.Text className='card-text-size'>
    //     I have been a software engineer for about 3 years, and am looking to venture into a full stack role.
    //     </Card.Text> */}

    // </Card>
  );
}
