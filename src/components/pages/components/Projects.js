import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from './Project'

// import images 
import onlyrecipes from '../../images/portolio/only-recipes.png'
import marvelGeeks from '../../images/portolio/marvel-geeks.png'
import weather from '../../images/portolio/weather-dashboard.png'
import javascriptQuiz from '../../images/portolio/javascript-quiz.png'
import workdayPlanner from '../../images/portolio/workday-planner.png'
import buildDragon from '../../images/portolio/build-dragon.png'

const styles = {
    card : {
      background: 'rgba(4,22,90,0.5)',
      width: '70%',
      borderRadius: '4rem'
    },
    titleSize: {
      fontSize: '2.5rem',
      color: 'white',
    },
  
    descriptionSize: {
      fontSize: '1.2rem',
      color: 'white',
    }
  
  }

export default function Projects(props) {
    return (
        <>
            <Card className="card-format text-center text-color mx-auto my-5 p-lg-3" style={styles.card}>
                <Card.Body>
                    <Card.Title className="card-title-size" style={styles.titleSize}>Portfolio</Card.Title>
                    <Project 
                        deployedLink="https://only-recipes-app.herokuapp.com/"
                        projectName ="Recipe Tracker"
                        projectImg= {onlyrecipes}
                        projectSum="Model-View-Controller Full Stack App"
                        gitRepo="https://github.com/erickjavalos/only-recipes"
                    >
                    </Project>

                </Card.Body>
            </Card>
        </>
        //     <div className="row cards-overview" style={{width:'100%'}}>
        //         <div className="row card-title-size text-center">Portfolio</div> */}
        //         {/* only recipes app */}
                // {/* <Project 
                //     deployedLink="https://only-recipes-app.herokuapp.com/"
                //     projectName ="Recipe Tracker"
                //     projectImg= {onlyrecipes}
                //     projectSum="Model-View-Controller Full Stack App"
                //     gitRepo="https://github.com/erickjavalos/only-recipes"
                // ></Project> */}
        //         {/* Marvel Geek App */}
        //         {/* <Project 
        //             deployedLink="https://wiilki.github.io/marvel-geeks-fandom-page/"
        //             projectName ="Marvel Geeks"
        //             projectImg= {marvelGeeks}
        //             projectSum="HTML, CSS, Javascript, and Web APIs App"
        //             gitRepo="https://github.com/wiilki/marvel-geeks-fandom-page"
        //         ></Project> */}
    
        //         {/* Weather dashboard App */}
        //         {/* <Project 
        //             deployedLink="https://erickjavalos.github.io/weather-dashboard/"
        //             projectName ="Weather Dashboard"
        //             projectImg= {weather}
        //             projectSum="HTML, CSS, Javascript, and Web APIs App"
        //             gitRepo="https://github.com/erickjavalos/weather-dashboard"
        //         >
        //         </Project> */}
    
        //         {/* JavaScript Quiz App */}
        //         {/* <Project 
        //             deployedLink="https://erickjavalos.github.io/javascript-quiz/"
        //             projectName ="Javascript Quiz"
        //             projectImg= {javascriptQuiz}
        //             projectSum="HTML, CSS, and Javascript App"
        //             gitRepo="https://github.com/erickjavalos/javascript-quiz"
        //         >
        //         </Project> */}
        //         {/* JavaScript Quiz App */}
        //         {/* <Project 
        //             deployedLink="https://erickjavalos.github.io/work-day-scheduler/"
        //             projectName ="Work Day Scheduler"
        //             projectImg= {workdayPlanner}
        //             projectSum="HTML CSS, and Javascript App"
        //             gitRepo="https://github.com/erickjavalos/work-day-scheduler"
        //         >
        //         </Project> */}
        //         {/* build your own dragon App */}
        //         {/* <Project 
        //             deployedLink="https://erickjavalos.github.io/build-your-own-dragon/"
        //             projectName ="Build Your Own Dragon"
        //             projectImg= {buildDragon}
        //             projectSum="HTML CSS, and Javascript App"
        //             gitRepo="https://github.com/erickjavalos/build-your-own-dragon"
        //         >
        //         </Project> */}
        // //     </div>
        // // </div>
    );
  }