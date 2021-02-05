import React from 'react'
import { Table } from "react-bootstrap"
import User from "./User"

function Index({ users }) {
    return <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Avatar</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    {
        users.length && <tbody>
        {users.map((user, index) => {
            return <User user={user} key={index} />
        })}
        </tbody>
    }
  </Table>
}

export default Index
