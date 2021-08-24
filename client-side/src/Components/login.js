import {Route} from 'react-router-dom';

const Login = () => {

    return (
    <div className = 'userlogin'>
        {/* Just setting up the basic set up for my user login page */}
            <Route exact path = '/userlogin'>
                <h1>You have already have an account, so let's get you signed in!</h1>
            </Route>
            {/* ****************************************** */}
        </div>
    )
}
export default Login