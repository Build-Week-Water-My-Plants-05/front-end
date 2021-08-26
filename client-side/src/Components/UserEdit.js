import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../axiosWithAuth/axiosWithAuth'
import {
    useHistory
  } from "react-router-dom";

const initialValues = {
    username: '',
    password: '',
    phoneNumber: ''
}

const UserEdit = (props) => {

    const [formValues, setFormValues] = useState(initialValues)
    let history = useHistory();

    const submit = (e) => {
        e.preventDefault()
        axiosWithAuth().put('/api/users', formValues).then( res=>{
          console.log(res.data)
          props.setUser(res.data)
          history.push('/dashboard')
        }).catch( err => {console.log(err.response.data['message'])})
      }

    const change = (e)=> {
        const {value,name} = e.target
        setFormValues({...formValues , [name] : value})
      }

    useEffect(()=>{
        axiosWithAuth().get('/api/users')
        .then(res => {setFormValues(res.data)})
        .catch(e => console.log(e))
    }
    , [])

    return(<div>
        {console.log(formValues)}
        <form onSubmit={e =>submit(e)}>
            <label>Username</label>
            <input onChange={e=>change(e)} name="username" value={formValues.username}/>
            <label>Password</label>
            <input type="password" onChange={e=>change(e)} name="password" value={formValues.password}/>
            <label>Phone No:</label>
            <input onChange={e=>change(e)} name="phoneNumber" value={formValues.phoneNumber}/>
            <button>Submit</button>

        </form>
    </div>)
}

export default UserEdit