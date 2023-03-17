import React from 'react';
import Card from 'react-bootstrap/Card';

export default function AboutCard(props) {
  return (
    <Card className="card-format text-center text-color mx-auto my-lg-5 p-lg-5 border-radius-card" style={{background: 'rgba(255,255,255,0.25)' }}>
      <Card.Body>
        {/* title about me */}
        <Card.Title className="card-title-size" > About Me!</Card.Title>
        {/* pfp image */}
        <Card.Img variant="top" src={props.pfp} className="m-3"style={{width: '150px',height:'150px', borderRadius: '75px'}} />
        {/* text */}
          <Card.Text className='card-text-size'>
          My name is Erick, I am currently 25 years old based out of Los Angeles, Ca. In 2020, I received a bachelors in Electrical Engineering with a specialization in Signals and Systems. 
          </Card.Text>
          <Card.Text className='card-text-size'>
          I have experience in a variety of fields like robotics, embedded software development, hardware development, blockchain, and web develeopment. 
          </Card.Text>

          <Card.Text className='card-text-size'>
          I have been a software engineer for about 3 years, and am looking to venture into a full stack role.
          </Card.Text>

      </Card.Body>
    </Card>
  );
}