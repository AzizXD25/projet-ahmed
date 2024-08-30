import React, { useState } from 'react'
import { Button , Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { register } from '../JS/Actions/user'
const Register = () => {
    const [newUser , setNewUser] = useState({})
    const dispatch = useDispatch()
const handleChange = (e) => {
    setNewUser({...newUser , [e.target.value] : e.target.value})
}
  return (
    <div>
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" name = "name" onChange={handleChange} placeholder="Enter name" />
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" name = "email" onChange={handleChange} placeholder="Enter email" />
      <Form.Label>Password</Form.Label>
      <Form.Control type="text" name = "password" onChange={handleChange}  placeholder="Enter password" />
      <Form.Label>Phone</Form.Label>
      <Form.Control type="text" name = "phone" onChange={handleChange} placeholder="Enter phone" />
      <Button variant="primary" type="submit" onClick = {() => dispatch(register(newUser))}>
        Submit
      </Button>
    </div>
  )
}

export default Register
