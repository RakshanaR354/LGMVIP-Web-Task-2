import React from "react";
import { useState,useEffect } from "react";


const Users = () =>{
    const [items,setItems] = useState([])
    const [column,setColumn] = useState([])

    
          useEffect(()=>{
           fetch("https://reqres.in/api/users?page=1")
             .then(res=>res.json())
             .then(data=>{
                setColumn(Object.keys(data.data[0]))
                setItems(data.data)
             })
        
          },[])

          console.log(items)
          
     

    return(
        <div> 
            <div>
                {
                    items.map(({id,avatar,first_name,last_name,email})=>{
                        return(
                        <div>
                            <table className="tables">
                                <tr key={id}>
                                   <td>{id}</td>
                                   <td>{email}</td>
                                   <td>{first_name}</td>
                                   <td>{last_name}</td>
                                   <td><img src={avatar} alt={first_name}/></td>
                                </tr>
                            </table>
                        </div>
                            

                        );
                        
                    })
                }
            </div>
           
        </div>
    );
}

export default Users;