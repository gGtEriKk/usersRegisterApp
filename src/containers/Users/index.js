import React, { useState, useEffect } from "react";
import { GeneralContainer, Image, User } from '../Users/styles';
import H1 from '../../components/Title';
import Avatar from '../../assets/avatar.svg';
import ArrowIcon from '../../assets/arrow.svg';
import Trash from '../../assets/trash-icon.svg';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import ItemsContainer from "../../components/ContainerItems";
import Button from "../../components/Button";

const Users = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  const baseUrl = "https://first-project-node-dev-club.vercel.app";

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("https://usersregister.netlify.app/users");

      setUsers(newUsers);
    }

    fetchUsers();

  }, [])

  async function deleteUser(userId) {
    await axios.delete(`${baseUrl}/users/${userId}`)

    const newUsers = users.filter(user => user.id !== userId);

    setUsers(newUsers);
  }

  function goBackPage(){
    history.push("/")
  }

  return (
    <GeneralContainer>
      <Image alt="logo-image" src={Avatar} />

      <ItemsContainer isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {
            users.map(user => (
              <User key={user.id}>
                <p>{user.name}</p> <p>{user.age}</p>
                <button onClick={() => deleteUser(user.id)}><img alt="trash-img" src={Trash} /></button>
              </User>
            ))
          }
        </ul>

        <Button isBack={true} onClick={goBackPage}> <img alt="arrow" src={ArrowIcon} />Voltar</Button>

      </ItemsContainer>
    </GeneralContainer>
  )

}

export default Users;