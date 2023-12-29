import React from "react";
import { useState } from "react";


const Users = () =>{
    const [users,setUsers] = useState([]);

const loadUsers = async() =>{
    const response = await fetch("https://api.github.com/users");
    const jsonResponse = await response.json();
    setUsers(jsonResponse);
}

return(
    <div>
         <h1>Hello All</h1>
         <button onClick={loadUsers}>Get Data</button>
         <h2>Users:</h2>
         <ul>
            {users.map(({id,login,avatar_url})=>(
                <li key={id}>
                    Name:{login}
                    Avator:{avatar_url}<br></br>
                </li>
            ))}
         </ul>
    </div>
);
}

export default Users;