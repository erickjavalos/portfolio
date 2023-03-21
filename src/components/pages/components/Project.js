import React from 'react';
import gitLogo from '../../images/logos/github-logo.png'


// styles 
const styles = {
    portfolioImg: {
      width: '100%',
      height: '100%'
    },
    logoImg: {
      width : '24px',
      height: '24px'
    },
    aEle : {
      display: 'block',
    },
    text: {
      position: 'relative',
      top: '-250px',
      color: 'white',
      fontSize: '24px',
    }

  }


export default function Project(props) {
  const reroute = () => {
    window.location.href = props.deployedLink;
  }
  return (
    <>
      <div className="project card-hover">
        {/* redirect to page */}
        <div 
          onClick={reroute}
          style={{cursor: "pointer"}}
          tabIndex="1"
        >
          {/* display content of props variables for each project */}
          <img className="portfolio-img" style={styles.portfolioImg}src={props.projectImg} alt="portfolio"></img>
          <p className="text text-sum">{props.projectName} <a href={props.gitRepo}><img className="logo-hover"style={styles.logoImg}src={gitLogo} alt='gitlogo'></img></a></p>
          <p className="text text-sum">{props.projectSum}</p>
        </div>
      </div>
    </>
  );
}