import React from 'react';
// import api from '../../services/apiSpring'

import './styles.css';
import springLogo from '../../assets/java.png';
import reactLogo from '../../assets/react.png';
import gLogin from '../../assets/glogin.png';

export default function Login() {

  // Estudar Problema acesso - CORS
  // async function handleLogin(e) {
  //   e.preventDefault();

  //   try {
  //     const response = await api.get('/restricted', {
  //       headers: { 'Content-Type': 'application/json' }
  //     });
  //     console.log(response.data);

  //   } catch (error) {
  //     console.log(error);
  //     alert('Falha no login, tente novamente.')
  //   }
  // }

  return (
    <>
      <title>Login</title>
        <div className="contents">
        <header>
          <div className="logos">
            <img src={springLogo} alt="Spring"/>
            <img src={reactLogo} alt="react"/>
          </div>

            <h1>Login</h1>
            <a href="http://localhost:8080/restricted">
            {/* {/* <form onSubmit={handleLogin}> */}
              {/* <button className="gbutton"> */}
                <img src={gLogin} style={{width:'300px'}} alt="Google Login"/>
              {/* </button>
            </form> */}
            </a>
        </header>
        </div>
    </>
  );
}