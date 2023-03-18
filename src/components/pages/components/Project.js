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
  }


export default function Project(props) {
  return (
    
    <div className="card-portfolio card-hover" >
          <a className="text-decoration-none" href={props.deployedLink}>
            <img className="portfolio-img" style={styles.portfolioImg} src={props.projectImg}></img>
            {/* <div className="text">{props.projectName} <a href={props.gitRepo}><img className="logo-hover"style={styles.logoImg}src={gitLogo}></img></a></div> */}
            {/* <div className="text-sum">{props.projectSum}</div> */}
         </a>
    </div>
  );
}