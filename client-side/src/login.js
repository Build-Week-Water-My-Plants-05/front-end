import { Route } from 'react-router-dom';
import styled from 'styled-components';
import UserAvatar from './img/img1.jpg';



const StyledDiv = styled.div`
height: 80vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const StyledCard = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background-color: ghostwhite;
width : 350px;
height: 70%;
padding: 2%;
border: 5px solid #007360;
color: #007360;
`;

const GreenCircle = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color:  #007360;
border-radius: 9999px;
height: 165px;
width: 165px;
`;

const ImgCircle = styled.div`
width: 90%;
height: 90%;
background-image: url('${UserAvatar}');
background-size: cover;
background-position: center;
border-radius: 999px;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 150px;
    font-weight: bolder;
    width: 300px;
`;

const StyledEntryBoxes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100px;
`


const Login = () => {

    return (
    <StyledDiv>
        <Route exact path = '/userlogin'>
            <StyledCard>
                <GreenCircle>
                    <ImgCircle ></ImgCircle >
                </GreenCircle>
                <div className = 'loginForm'>

                </div>
                {/* Just setting up the basic set up for my user login page */}
                    <h2>Connect With Your Plants</h2>
                    <StyledForm>
                        <StyledEntryBoxes>
                        <label> Username: 
                            <input type ='text' placeholder = ''></input>
                        </label>
                        <label>Password: 
                        <input type = 'text' placeholder = 'Case Sensitive'></input>
                        </label>
                        </StyledEntryBoxes>
                        <button type = 'submit'>Login!</button>
                    </StyledForm>
                    
                {/* ****************************************** */}
            </StyledCard>
        </Route>
    </StyledDiv>
    )
}
export default Login