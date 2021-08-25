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

export default function SignUp (props){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    // const onSubmit = (e) => {
    //     e.preventDefault()

    //     if(!username) {
    //         alert('Please add an username')
    //         return
    //     }
    //     onAdd({username, password, phoneNumber})

    //     setUsername('')
    //     setPassword('')
    //     setPhoneNumber('')
    // }

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
                                    placeholder='username goes here'
                                    value={username}
                                    onChange={(e)=>setUsername(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Password:</label>
                                <input 
                                type='text'
                                placeholder='case sensitive'
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Phone Number:</label>
                                <input 
                                type='text'
                                placeholder='xxx-xxx-xxxx'
                                value={phoneNumber}
                                onChange={(e)=>setPhoneNumber(e.target.value)}
                                />
                            </div>
                        </StyledEntryBoxes>
                        <input type='submit' value="Create User"/>
                    </StyledForm>
                </StyledCard>
            </Route>
        </StyledDiv>
    )
} 