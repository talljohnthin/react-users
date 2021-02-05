import {toast} from 'react-toastify';
import axios from '../helper/axios'

export default function useUser() {
    const deleteUser = async(id) => {
        try {
            await axios.get(`users/${id}`)
            toast.success("User deleted successfully")
        } catch (error) {
            toast.error('Failed to delete user')
        }
    }
    const addUser = async() => {
        try {
            await axios.get(`users`, {
                "name": "morpheus",
                "job": "leader"
            })
            toast.success("User added successfully")
        } catch (error) {
            toast.error('Failed to add user')
        }
    }
    const updateUser = async(id) => {
        try {
            await axios.get(`users/${id}`, {
                "name": "morpheus",
                "job": "zion resident"
            })
            toast.success("User updated successfully")
        } catch (error) {
            toast.error('Failed to update user')
        }
    }

    return { addUser, updateUser, deleteUser }

}
