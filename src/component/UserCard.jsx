import React from 'react'
import { Card } from 'react-bootstrap'

const UserCard = ({user}) => {
  return (
    <div className="userCard">
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src=' https://cdn-icons-png.flaticon.com/512/1177/1177568.png'  />
      <hr/>
      <Card.Body>
        <Card.Title className='cardTitle'>{user.name}</Card.Title>
        <Card.Text>{user.username}</Card.Text>
        <Card.Text>{user.email}</Card.Text>
        
      </Card.Body>
    </Card>
  </div>
  )
}

export default UserCard