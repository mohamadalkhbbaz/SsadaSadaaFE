import React from 'react'
import useUsers from '../services/useUsers'


const UserList = () => {
    const {data, isLoading, error} = useUsers();
        if(isLoading){
            return 'loading'
        }
        if(error){
            return error
        }   

  return (
    <div>
        <h3>UserList</h3>
        <ul>
        {data.map((item)=>
            <li>{item.username}</li>
        )}
        </ul>
    </div>
  )
}

export default UserList