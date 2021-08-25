import React from 'react';
import AddPlant from './Components/AddPlant';
import axios from 'axios';
import SignUp from './Components/SignUp';
import { useState, useEffect } from 'react';
import PlantEdit from './Components/PlantEdit';
import Dashboard from './Components/dashboard';
import PrivateRoute from './Components/PrivateRoute'
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
text-decoration: underline;
`;

const StyledAccountButtons = styled.div`
display: flex;
justify-content: space-around;
width: 100px;
`;
const initialformvalues = {username: '', password: '',phoneNumber: ''}
function App() {
  const [formvalues,setFormValues] = useState(initialformvalues)
  let history = useHistory();
  let location = useLocation();
  
  const change = (e)=> {
    const {value,name} = e.target
    setFormValues({...formvalues , [name] : value})
  }

  const login = () => {
    axios.post('https://wmp-api.herokuapp.com/api/auth/login', formvalues).then( res=>{
      console.log(res.data)
      const token = res.data.token;
      localStorage.setItem('token', `"${token}"`);
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
}

  return (
    <div>
   
      <StyledHeader>

          <StyledLink to = '/'><h1>Watery-Minder</h1></StyledLink> 

          <StyledAccountButtons>
            <StyledLink onClick={e=>logout(e)}>Logout</StyledLink>
            <StyledLink to = '/usersignup'>
             <h5>Sign Up</h5> 
            </StyledLink> 

            <StyledLink to = '/userlogin' >
            <h5>Login</h5>
            </StyledLink>

            <StyledLink to = '/addplant' >
            <h5>Add Plant</h5>
            </StyledLink>

          </StyledAccountButtons>

      </StyledHeader>

      
      <Switch>
        <Route exact path = '/' component = {Home}/>
        <Route path = '/usersignup'   render={() => <SignUp submit = {submit} formvalues = {formvalues} change = {change}  />}/>
        <Route path = '/userlogin'   render={() => <Login submit = {submit} formvalues = {formvalues} change = {change}  />}/>
        <PrivateRoute path = '/edit/:id' component = {PlantEdit}/>
        

        <Route path = '/usersignup' component = {SignUp}/> 
        <Route path = '/userlogin' component = {Login}/>
        <PrivateRoute path = '/addplant' component = {AddPlant}/>
        <PrivateRoute path = '/dashboard' component = {Dashboard}/>
        
        <Route path = '/edit/:id' component = {PlantEdit}/>

      </Switch>

     
    </div>
  );
}

export default App;
