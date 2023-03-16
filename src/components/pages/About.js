import React from 'react';
import Card from 'react-bootstrap/Card';
import '../css/styles.css'
import pfp from '../images/pfp.png'



export default function About() {
  return (
    <Card className="text-center text-color mx-auto my-5 border-radius-card"style={{ width: '35rem', background: 'rgba(255,255,255,0.25)' }}>
      <Card.Body>
        <Card.Title className="card-title-size" > About Me!</Card.Title>
        <Card.Img variant="top" src={pfp} className="m-1"style={{width: '150px',height:'150px', borderRadius: '75px'}} />
        <Card.Text className='card-text-size'>
        My name is Erick, I am currently 25 years old based out of Los Angeles, Ca. In 2020, I received a bachelors in Electrical Engineering with a specialization in Signals and Systems. 
        </Card.Text>
        <Card.Text className='card-text-size'>
        I have experience in a variety of fields like robotics, embedded software development, hardware development, blockchain, and web develeopment. 
        </Card.Text>
        <Card.Text className='card-text-size'>
        I have been a software engineer for about 3 years, and am looking to venture into a full stack role.
        </Card.Text>

        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}
