import GetUsers from "../services/getUsers";
import { useEffect, useState } from 'react';

function CardUser() {


    const [users, setUsers] = useState([]);


    useEffect(() => {
      const fetchUsers = async () => {
        const data = await GetUsers();
       
        
        setUsers(data);
   
      };
      fetchUsers();
    }, []);

    console.log(users)



    return (
      <div>
        <h1>Lista de Usuarios</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
export default CardUser