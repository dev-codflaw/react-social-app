import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Login from './Login'
import HeaderNav from '../components/HeaderNav';

import ProfileCard from  './ProfileCard'

import './HomePage.css';





function UserLoggedIn(props) {

  return (
    <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Welcome To {props.name}</h1>
      <ProfileCard name={props.name} email={props.email}/>
      <Button onClick={logoutUser}>Logout</Button>
    </Jumbotron>
    </Container>
  );
}

function logoutUser(e) {
  e.preventDefault();
  // alert('Logout');
  localStorage.removeItem('isGoogleUser');
  refreshPage();
}

function refreshPage(){
  window.location.reload(false);
}

function GuestUser(props) {

  return (
    <Container className="p-3">
    <Jumbotron>
    <h1 className="header">Welcome To {props.name}</h1>
  
    <Login />
  
    </Jumbotron>
    </Container>
  );
}



function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserLoggedIn name={props.name} email={props.email} />;
  }
  return <GuestUser name={props.name}/>;
}




function HomePage(props) {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState(null);
  const [name, setName] = useState('Guest');

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      const store = JSON.parse(localStorage.getItem('isGoogleUser'));
      if(store && store.login){
        setLogin(store.login);
        setEmail(store.email);
        setName(store.name);
        // alert(JSON.stringify(store.email));
      }

    }, [name, email, login]);


    return (
      <div className="App">
        <HeaderNav name={name} />
        <Greeting isLoggedIn={login} name={name} email={email} />
        {/* <ProfileCard /> */}

      </div>
    );
}

export default HomePage;
