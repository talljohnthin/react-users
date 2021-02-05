import React, { useState, useEffect} from 'react'; 
import './App.css';
import axios from './helper/axios'

import Users from "./users/Index"

// Load toast
import ToastMessage from './helper/toastContainer';
import {toast} from 'react-toastify';

import useUser from "./users/useUser"

function App() {
     const [usersToDisplay, setUsers] = useState([]);
     const { addUser } = useUser()
     
     useEffect(() => {
       displayUsers();
     }, [])

     const displayUsers = () => {
       axios
            .get('users')
            .then(response => {
                const { data } = response.data
                setUsers(data)
            })
            .catch(() => toast.error('Failed to fetch users'))
     }

     const getUsers = async() => {
        try {
            const response = await axios.get(`users`)
            const { data } = response.data
            setUsers(data)
            toast.success("Users are fetch successfully")
        } catch (error) {
            toast.error('Failed to fetch users')
        }
     } 

    return (
        <React.Fragment>
          <button onClick={getUsers}>Get All Users</button>
          <button onClick={addUser}>Add User</button>
          <Users users={usersToDisplay}/>
          <ToastMessage />
        </React.Fragment>
    );
}

export default App;
