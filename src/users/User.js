import React from 'react'
import useUser  from "./useUser"

function User({ user }) {
    const { updateUser, deleteUser } = useUser()
    return <tr>
        <td>{user.id}</td>
        <td><img src={user.avatar} width="50px" height="50px" /></td>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td><button onClick={() => updateUser(user.id)}>edit</button><button onClick={() => deleteUser(user.id)}>delete</button></td>
  </tr>
}

export default User
