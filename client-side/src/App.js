import React from 'react'
import AddPlant from './AddPlant';
import SignUp from './SignUp';
import PlantEdit from './PlantEdit';
import PrivateRoute from './PrivateRoute'
import { Route, Link, Switch } from "react-router-dom";
import Home from './Home.js';
import Login from './login';
import styled from 'styled-components';
import Dashboard from './components/dashboard';


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
				<StyledLink to="/">
					<h1>Watery-Minder</h1>
				</StyledLink>

				<StyledAccountButtons>
					<StyledLink to="/usersignup">
						<h5>Sign Up</h5>
					</StyledLink>

					<StyledLink to="/userlogin">
						<h5>Login</h5>
					</StyledLink>
				</StyledAccountButtons>
			</StyledHeader>

			<Switch>
				<PrivateRoute exact path="/dashboard" component={Dashboard} />
				<Route exact path="/" component={Home} />
				<Route path="/usersignup" component={SignUp} />
				<Route path="/userlogin" component={Login} />
				<Route path="/editplant/:id" component={PlantEdit} />
			</Switch>
		</div>
	);
}

export default App;
