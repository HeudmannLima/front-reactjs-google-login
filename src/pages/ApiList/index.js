import React, { useEffect, useState } from 'react';
import apiPortal from '../../services/apiPortal';

import logo from '../../assets/brasao.jpg';
import './styles.css';

const params = new URLSearchParams(window.location.search);
const userMail = params.get('email');
const userName = params.get('name');
const userImg = params.get('picture');

function ApiList() {
  const [orgaos, setOrgaos] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await apiPortal.get('/orgaos-siafi');
      setOrgaos(response.data);
    })();
  }, []);

  return (
    <>
      <div className='container'>
        <div className='content'>
          <nav>
            <img src={logo} alt="Portal da Transparência" />
              <strong>{userMail}</strong>
          </nav>

          <div className='portal'>
            <center>
              Portal
            </center>
          </div>

          <aside>
            <div className='profile'>
              <div className='nome'>
                <strong>{userName}</strong>
              </div>
              <img src={userImg} alt={userMail}></img>
            </div>
          </aside>

        </div>
      </div>

      <span className="box" >
        Órgãos SIAFI: {orgaos.length}
      </span>

      <ul className="lista">
        {orgaos.map(orgao => (
          <li key={orgao.codigo}>
            <strong>CÓDIGO: </strong>{orgao.codigo}
            <br></br><br></br>
            <strong>DESCRIÇÃO: </strong>{orgao.descricao}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ApiList;