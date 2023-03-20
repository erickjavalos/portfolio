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

    title: {
        width: "100%",
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
            <div className="portfolio-container mx-auto m-5 p-4" style={styles.card}>
                {/* <div className="project-container mx-auto" style={styles.cardProject}> */}
                    {/* <h1 class=>Portolio</h1> */}
                <h1 className="text-center" style={styles.title}>Portfolio</h1>
                <Project 
                    deployedLink="https://only-recipes-app.herokuapp.com/"
                    projectName ="Recipe Tracker"
                    projectImg= {onlyrecipes}
                    projectSum="Model-View-Controller Full Stack App"
                    gitRepo="https://github.com/erickjavalos/only-recipes"
                ></Project>
            </div>
        </>
    //     <>
    //     <div className='cards-portfolio text-center text-color mx-auto p-lg-4 border-radius-card' style={{background: 'rgba(255,255,255,0.3)' }}>
    //         <div className="row cards-overview" style={{width:'100%'}}>
    //             <div className="row card-title-size text-center">Portfolio</div>
    //             {/* only recipes app */}
                // {/* <Project 
                //     deployedLink="https://only-recipes-app.herokuapp.com/"
                //     projectName ="Recipe Tracker"
                //     projectImg= {onlyrecipes}
                //     projectSum="Model-View-Controller Full Stack App"
                //     gitRepo="https://github.com/erickjavalos/only-recipes"
                // ></Project> */}
    //             {/* Marvel Geek App */}
    //             {/* <Project 
    //                 deployedLink="https://wiilki.github.io/marvel-geeks-fandom-page/"
    //                 projectName ="Marvel Geeks"
    //                 projectImg= {marvelGeeks}
    //                 projectSum="HTML, CSS, Javascript, and Web APIs App"
    //                 gitRepo="https://github.com/wiilki/marvel-geeks-fandom-page"
    //             ></Project>
    //  */}
    //             {/* Weather dashboard App */}
    //             {/* <Project 
    //                 deployedLink="https://erickjavalos.github.io/weather-dashboard/"
    //                 projectName ="Weather Dashboard"
    //                 projectImg= {weather}
    //                 projectSum="HTML, CSS, Javascript, and Web APIs App"
    //                 gitRepo="https://github.com/erickjavalos/weather-dashboard"
    //             >
    //             </Project> */}
    
    //             {/* JavaScript Quiz App */}
    //             {/* <Project 
    //                 deployedLink="https://erickjavalos.github.io/javascript-quiz/"
    //                 projectName ="Javascript Quiz"
    //                 projectImg= {javascriptQuiz}
    //                 projectSum="HTML, CSS, and Javascript App"
    //                 gitRepo="https://github.com/erickjavalos/javascript-quiz"
    //             >
    //             </Project> */}
    //             {/* JavaScript Quiz App */}
    //             {/* <Project 
    //                 deployedLink="https://erickjavalos.github.io/work-day-scheduler/"
    //                 projectName ="Work Day Scheduler"
    //                 projectImg= {workdayPlanner}
    //                 projectSum="HTML CSS, and Javascript App"
    //                 gitRepo="https://github.com/erickjavalos/work-day-scheduler"
    //             >
    //             </Project> */}
    //             {/* build your own dragon App */}
    //             {/* <Project 
    //                 deployedLink="https://erickjavalos.github.io/build-your-own-dragon/"
    //                 projectName ="Build Your Own Dragon"
    //                 projectImg= {buildDragon}
    //                 projectSum="HTML CSS, and Javascript App"
    //                 gitRepo="https://github.com/erickjavalos/build-your-own-dragon"
    //             >
    //             </Project> */}
    //         </div>
    //     </div>
    //     </>
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