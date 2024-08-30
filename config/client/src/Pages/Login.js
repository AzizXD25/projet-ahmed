import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { login } from '../JS/Actions/user'



const Login = () => {
    const [user , setUser] = useState({})
    const dispatch = useDispatch()
const handleChange = (e) => {
    setUser({...user , [e.target.name] : e.target.value})
}
  return (
    <div>
      <Form.Control type="email" name = "email" onChange={handleChange} placeholder="Enter email" />
      <Form.Label>Password</Form.Label>
      <Form.Control type="text" name = "password" onChange={handleChange} placeholder="Enter password" />
      <Button variant="primary" type="submit" onclick = {() => dispatch(login(user))}>
        Submit
      </Button>
    </div>
  )
}

export default Login
