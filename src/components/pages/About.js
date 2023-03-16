import React from 'react';
import Card from 'react-bootstrap/Card';
import '../css/styles.css'


export default function About() {
  return (
    <Card className="text-center text-color mx-auto my-5 py-5"style={{ width: '35rem', background: 'rgba(255,255,255,0.25)' }}>
      <Card.Body>
        <Card.Title className="mb-5" > About Me!</Card.Title>
        <Card.Text>
        My name is Erick, I am currently 25 years old based out of Los Angeles, Ca. In 2020, I received a bachelors in Electrical Engineering with a specialization in Signals and Systems. 
        </Card.Text>
        <Card.Text>
        I have experience in a variety of fields like robotics, embedded software development, hardware development, blockchain, and web develeopment. 
        </Card.Text>
        <Card.Text>
        I have been a software engineer for about 3 years, and am looking to venture into a full stack role.
        </Card.Text>

        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}
