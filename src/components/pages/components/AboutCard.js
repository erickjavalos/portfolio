import React from 'react';
import Card from 'react-bootstrap/Card';

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

export default function AboutCard(props) {
  return (
    <Card className="card-format text-center text-color mx-auto my-5 p-lg-3" style={styles.card}>
      <Card.Body>
        {/* title about me */}
        <Card.Title className="card-title-size" style={styles.titleSize}> About Me</Card.Title>
        {/* pfp image */}
        <Card.Img variant="top" src={props.pfp} className="m-3 pfp"style={{width: '150px',height:'150px', borderRadius: '30%'}} />
        {/* text */}
          <Card.Text className='card-text-size m-4' style={styles.descriptionSize}>
          My name is Erick, I am currently 25 years old based out of Los Angeles, Ca. In 2020, I received a bachelors degree in Electrical Engineering with a specialization in Signals and Systems. 
          </Card.Text>
          <Card.Text className='card-text-size' style={styles.descriptionSize}>
          I have experience in a variety of fields such as robotics, embedded software development, hardware development, blockchain, and web develeopment. 
          </Card.Text>

          <Card.Text className='card-text-size' style={styles.descriptionSize}>
          I have been a software engineer for about 3 years, and am looking to venture into a full stack role.
          </Card.Text>

      </Card.Body>
    </Card>
  );
}