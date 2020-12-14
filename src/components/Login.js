// import React, { useState } from 'react';
import React from 'react';
import GoogleLogin from 'react-google-login';



function Login(props){
    // const [login, setLogin] = useState(false);

    const responseGoogle = async(response) => {
        localStorage.setItem('isGoogleUser', JSON.stringify({
          login:true,
          token:response.accessToken,
          email: response.profileObj.email,
          name: response.profileObj.name,
        }));
        // storeCollector()
        console.log(response);
        console.log(response.profileObj.email);
        refreshPage();
      }
      
      const fresponseGoogle = async(response) => {
      
        console.log(response);
      }


    function refreshPage(){
      window.location.reload(false);
    }
    
    return (
        <>
            <GoogleLogin
                clientId="17134391804-9ofvalms637k71u7s45gl4i21o1sjp6j.apps.googleusercontent.com"
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={responseGoogle}
                onFailure={fresponseGoogle}
            />
        </>
    );
  }


export default Login;


