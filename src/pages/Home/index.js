import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
// class é palavra reservada, pode dar xabu. para usar no JSX (pseudo-HTML) tem que usar className em camelCase
// possive tambem usar chavez vazias (frag) <></> para so renderizar mais de um elemento sem ter que criar uma div
// hooks sao API simplificada
// o input esta linkado por meio de value usuario e o onChange afeta o state do usuario
// handle toda vez que vai lidar com algume coisa
// voltar em JS depois para ver AJAX (sera que tem em outro momento do curso?)

function Home(props) {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  //const [nome, setNome] = useState('Alvim');
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name)
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      navigate('/repositories');
    })
    //console.log(response.data));
  }

  return (
    <div>
    <h1>{ usuario }</h1>
    <h1 id="main-title"> {props.title} </h1>
    <h2 id="carlos"> {props.lecarl}</h2>
    <input placeholder="usuario" name="user-input" id="user-input" className="input-box" value={usuario} onChange={e => setUsuario(e.target.value)}/>
    <button type="button" onClick={handlePesquisa}>Manda Bala</button>
    </div>
  );
}

export default Home;

// useState retorn Array. [ usuario, setUsuario ]
