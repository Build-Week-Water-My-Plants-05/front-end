import React from 'react';
import AddPlant from './Components/AddPlant';
import axios from 'axios';
import SignUp from './Components/SignUp';
import { useState, useEffect } from 'react';
import PlantEdit from './Components/PlantEdit';
import Dashboard from './Components/dashboard';
import PrivateRoute from './Components/PrivateRoute'
import UserEdit from './Components/UserEdit';
import axiosWithAuth from './axiosWithAuth/axiosWithAuth';
import {
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useHistory
} from "react-router-dom";

import Home from './Components/Home.js';
import Login from './Components/login';
import styled from 'styled-components';



const StyledHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #007360;
height: 20vh;
padding-left: 3%;
padding-right: 3%;`

const StyledLink = styled(Link)`
text-decoration: none;
color: white;
text-decoration: none;
/* font-size: 1.5rem; */
`;

const StyledAccountButtons = styled.div`
display: flex;
justify-content: space-around;
width: 50%;
`;

const StyledMessage = styled.div` 
background-color: #00957c;
padding: 0.6rem;
color: #d9d6d6;
`;
const initialformvalues = {username: '', password: '',phoneNumber: ''}
function App() {
  const [formvalues,setFormValues] = useState(initialformvalues)
  const[loggedin, setLoggedin] = useState(false)
  const[trigger, setTrigger] = useState(false) 
  let history = useHistory();
  let location = useLocation();
  const [user,setUser] = useState(null)
  
  const change = (e)=> {
    const {value,name} = e.target
    setFormValues({...formvalues , [name] : value})
  }

  const login = () => {
    axios.post('https://wmp-api.herokuapp.com/api/auth/login', formvalues).then( res=>{
      console.log(res.data)
      const token = res.data.token;
      localStorage.setItem('token', `"${token}"`);
      setLoggedin(true)
      history.push('/dashboard')
    }).catch( err => console.log(err.response.data['message']))
  }
  const register = () => {
    axios.post('https://wmp-api.herokuapp.com/api/auth/register', formvalues).then( res=>{
      console.log(res.data)
      // const token = res.data.token;
      // localStorage.setItem('token', `"${token}"`);
      history.push('/userlogin')
    }).catch( err => {console.log(err.response.data['message'])})
  }

  const submit = (e) => {
    e.preventDefault()
    if(location.pathname === '/usersignup') {
      register()
  }
    else{
      login()

    }
    setFormValues(initialformvalues)
}
const logout = ()=> {
  history.push('/userlogin')
  localStorage.removeItem('token')
  setLoggedin(false)
}

useEffect(()=>{
  axiosWithAuth().get('/api/users')
  .then(res => {setUser(res.data)})
  .catch(e => console.log(e))
  if(localStorage.getItem('token')) {
    setLoggedin(true)
  }
}
, [])

useEffect(()=> {
setTrigger(!trigger)
}, [loggedin])

  return (
    <div>
   
      <StyledHeader>

          <StyledLink to = '/'><h1>Watery-Minder</h1></StyledLink> 

          <StyledAccountButtons>
            {loggedin && <> 
            <StyledLink to = '/addplant' >
            <h2>Add Plant</h2>
            </StyledLink>
            <StyledLink to = '/dashboard' >
            <h2>Dashboard</h2>
            </StyledLink>
            <StyledLink to = '/useredit'>
             <h2>Edit Information</h2> 
            </StyledLink> 
            <StyledLink onClick={e=>logout(e)}> <h2>Logout</h2> </StyledLink>
            <StyledMessage>
              {user && <div><h4>Hello {user.username}</h4></div>}
              </StyledMessage>
            </>}

            {!loggedin && <>
            <StyledLink to = '/userlogin' >
            <h2>Login</h2>
            </StyledLink> 
            <StyledLink to = '/usersignup'>
             <h2>Sign Up</h2> 
            </StyledLink> 
 </> }
          </StyledAccountButtons>

      </StyledHeader>
      
      <Switch>
        <Route exact path = '/' component = {Home}/>
        <Route path = '/usersignup'   render={() => <SignUp submit = {submit} formvalues = {formvalues} change = {change}  />}/>
        <Route path = '/userlogin'   render={() => <Login setLoggedin={setLoggedin}/>}/>
        <PrivateRoute path = '/edit/:id' component = {PlantEdit}/>
        <PrivateRoute path = '/useredit/' setUser={setUser} component = {UserEdit}/>
        <PrivateRoute path = '/addplant' component = {AddPlant}/>
        <PrivateRoute path = '/dashboard'  component = {Dashboard}/>
        
      </Switch>

     
    </div>
  );
}

export default App;
