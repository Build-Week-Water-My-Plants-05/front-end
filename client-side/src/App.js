import React from 'react'
import { Route, Link, Switch } from "react-router-dom";
import Home from './Home.js';
import Login from './login';
import PlantEdit from './PlantEdit.js';

function App() {

  return (
    <div className="App">

      {/*Header to be shown on every page of our website. The idea would be to replace the login and sign up links once the user logged in and only show a message like 'Hello, First Name', but I am not sure how to do that.*/}
      <header>
        <Link to = '/'><h1>Watery-Minder</h1></Link>
        <Link to = '/signup'>
          <h5>Sign Up!</h5>
        </Link>
        <Link to = '/userlogin'>
          <h5>Login</h5>
        </Link>

        <Link to = '/userlogin'>
          <h5>Login</h5>
        </Link>
      </header>
      {/* *******************test*********************** */}


      {/* Here we will display all of the different pages of our app below the header */}
      <Switch>
        <Route exact path = '/' component = {Home}/>
        {/* <Route path = '/usersignup' component = {Form}/> */}
        <Route path = '/userlogin' component = {Login}/>
        <Route path = '/plantedit/:id' component = {PlantEdit}/>
      </Switch>

      {/* ****************************************** */}
    </div>
  );
}

export default App;
