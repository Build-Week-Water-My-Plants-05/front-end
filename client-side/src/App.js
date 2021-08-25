import React from 'react'
import SignUp from './SignUp';
import AddPlant from './Components/AddPlant';
import SignUp from './Components/SignUp';
import PlantEdit from './Components/PlantEdit';

import { Route, Link, Switch } from "react-router-dom";
import Home from './Components/Home.js';
import Login from './Components/login';
import styled from 'styled-components';
import AddPlant from './AddPlant';


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

function App() {



  return (
    <div>
   
      <StyledHeader>

          <StyledLink to = '/'><h1>Watery-Minder</h1></StyledLink> 

          <StyledAccountButtons>

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
        <Route path = '/usersignup' component = {SignUp}/> 
        <Route path = '/userlogin' component = {Login}/>
        <Route path = '/addplant' component = {AddPlant}/>
        <Route path = '/edit/:id' component = {PlantEdit}/>
      </Switch>

     
    </div>
  );
}

export default App;
