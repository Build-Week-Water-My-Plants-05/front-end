import { Route } from 'react-router-dom'
import React, {useState} from 'react'
import styled from 'styled-components';

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
const initialValues = {
    username: '',
    password: '',
    phoneNumber: '',
}

export default function SignUp (props){
    const [newUser, setNewUser] = useState(initialValues)

    const handleInput = e => {
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }
    const createUserSubmit = e => {
        e.preventDefault()
        console.log(newUser)
        return setNewUser(initialValues)
    }

    return (
        <StyledDiv>
            <Route exact path = '/usersignup'>
                <StyledCard>
                    <StyledForm>
                        <StyledEntryBoxes>
                            <div>
                            <label>Username:</label>
                                <input 
                                    type='text'
                                    placeholder=''
                                    name='username'
                                    value={newUser.username}
                                    onChange={handleInput}
                                />
                            </div>
                            <div>
                                <label>Password:</label>
                                <input 
                                type='text'
                                placeholder='Case Sensitive'
                                name='password'
                                value={newUser.password}
                                onChange={handleInput}
                                />
                            </div>
                            <div>
                                <label>Phone Number:</label>
                                <input 
                                type='text'
                                placeholder='xxx-xxx-xxxx'
                                name='phoneNumber'
                                value={newUser.phoneNumber}
                                onChange={handleInput}
                                />
                            </div>
                        </StyledEntryBoxes>
                        <input type='submit' value="Create User" onClick={createUserSubmit}/>
                    </StyledForm>
                </StyledCard>
            </Route>
        </StyledDiv>
    )
} 