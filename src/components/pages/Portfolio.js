import React from 'react';
import Card from 'react-bootstrap/Card';
import '../css/styles.css'


export default function Portfolio() {
  return (
    <>
    <div className='cards-portfolio text-center text-color mx-auto my-lg-5 p-lg-5 border-radius-card' style={{background: 'rgba(255,255,255,0.25)' }}>
      <div className="row cards-overview" style={{width:'100%'}}>
        <div className="row card-title-size text-center">Portfolio</div>
        <div id="{{recipe_id}}" className="card card-hover">
            <h4 className="mb-5">recipe name</h4>
            <p className="mt-4">Difficulty: diff</p>
            <p>Servings: yuh</p>
            <p>Total Time: ok</p>
        </div>
        
        <div id="{{recipe_id}}" className="card card-hover">
            <h4 className="mb-5">recipe name</h4>
            <p className="mt-4">Difficulty: diff</p>
            <p>Servings: yuh</p>
            <p>Total Time: ok</p>
        </div>
        <div id="{{recipe_id}}" className="card card-hover">
            <h4 className="mb-5">recipe name</h4>
            <p className="mt-4">Difficulty: diff</p>
            <p>Servings: yuh</p>
            <p>Total Time: ok</p>
        </div>
        <div id="{{recipe_id}}" className="card card-hover">
            <h4 className="mb-5">recipe name</h4>
            <p className="mt-4">Difficulty: diff</p>
            <p>Servings: yuh</p>
            <p>Total Time: ok</p>
        </div>

        <div id="{{recipe_id}}" className="card card-hover">
            <h4 className="mb-5">recipe name</h4>
            <p className="mt-4">Difficulty: diff</p>
            <p>Servings: yuh</p>
            <p>Total Time: ok</p>
        </div>

        <div id="{{recipe_id}}" className="card card-hover">
            <h4 className="mb-5">recipe name</h4>
            <p className="mt-4">Difficulty: diff</p>
            <p>Servings: yuh</p>
            <p>Total Time: ok</p>
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
