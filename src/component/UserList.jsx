import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import axios from 'axios'

const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(()=> {
      axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  
    },[])
  
    return (
      <div className='userList'>
          {users.map(el => (
              <UserCard user={el} key={el.id}  /> 
            ))} 
      </div>
    )}

export default UserList