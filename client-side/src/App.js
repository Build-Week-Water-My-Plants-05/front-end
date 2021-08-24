import React from 'react'
import AddPlant from './Add Plant';
import SignUp from './Sign Up';

function App() {



  return (
    <div>
   
      <StyledHeader>

          <StyledLink to = '/'><h1>Watery-Minder</h1></StyledLink> 

          <StyledAccountButtons>

            <StyledLink to = '/signup'>
             <h5>Sign Up</h5> 
            </StyledLink> 

            <StyledLink to = '/userlogin' >
            <h5>Login</h5>
            </StyledLink>

          </StyledAccountButtons>

      </StyledHeader>

      
      <Switch>
        <Route exact path = '/' component = {Home}/>
        {/* <Route path = '/usersignup' component = {Form}/> */}
        <Route path = '/userlogin' component = {Login}/>
      </Switch>

     
    </div>
  );
}

export default App;
