import {Route} from 'react-router-dom';

const Home = () => {
    return (
        
        <div className = 'home'>
            {/* Just setting up my home page with the correct dom link */}
            <Route exact path = '/'>
                <h1>Your number one choice to help make sure you keep your plants alive!</h1>
            </Route>
            {/* ****************************************** */}
        </div>
    )
}

export default Home