import React from 'react';
import Card  from 'react-bootstrap/Card';



function ProfileCard(props){

    return(
        <Card
            bg='default'
            text='dark'
            style={{ width: '18rem' }}
            className="mb-2"
         >
        <Card.Header>Profile</Card.Header>
        <Card.Body>
          <Card.Title> {props.name} </Card.Title>
          <Card.Title> {props.email} </Card.Title>

        </Card.Body>
      </Card>
    );
 }

 
export default ProfileCard;