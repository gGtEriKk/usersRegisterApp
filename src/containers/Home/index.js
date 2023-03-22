import React, { useState, useRef } from "react";
import { GeneralContainer, Image, InputLabel, Input } from './styles';
import TwoPeople from '../../assets/two-people.svg';
import ArrowIcon from '../../assets/arrow.svg';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import H1 from "../../components/Title";
import ItemsContainer from "../../components/ContainerItems";
import Button from '../../components/Button';

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const history = useHistory();

  const baseUrl = "https://first-project-node-dev-club.vercel.app";

  async function addNewUser() {
  const { data: newUser } = await axios.post(`${baseUrl}/users`, {
      name: inputName.current.value,
      age: inputAge.current.value
    });

    setUsers([...users, newUser]);

    history.push("/usuarios");
  }

  return (
    <GeneralContainer>
      <Image alt="logo-image" src={TwoPeople} />

      <ItemsContainer>
        <H1>Olá!</H1>

        <InputLabel for="name">Nome</InputLabel>
        <Input id="name" type="text" ref={inputName} placeholder="Nome" required />

        <InputLabel for="age">Idade</InputLabel>
        <Input id="age" type="number" ref={inputAge} placeholder="Idade" required />

        <Button onClick={addNewUser}>Cadastrar <img alt="arrow" src={ArrowIcon} /></Button>

      </ItemsContainer>
    </GeneralContainer>
  )

}

export default App;