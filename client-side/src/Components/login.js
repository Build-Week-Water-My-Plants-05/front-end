import React, { useEffect, useState } from 'react';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import UserAvatar from './img/img1.jpg';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import { isSchema } from 'yup';
YupPassword(yup);


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
    height: 200px;
    font-weight: bolder;
    width: 300px;
`;

const StyledEntryBoxes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100px;
`

const initialFormValues = {
    username: '',
    password: '',
}

const loginSchema = yup.object().shape({
    username : yup.string().required().min('4', 'Username must be at least 4 characters in length'),
    password : yup.string().required().matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters one uppercase, one number and one special case character"
      ),
})


const Login = () => {
    //Set up or slices of state//
    const [ formValues, setFormValues ] = useState(initialFormValues);
    const [ errors, setErrors ] = useState(initialFormValues);
    const [ disabledUsername, setDisabledUsername ] = useState(false);
    // const [ disabledPassword, setDisabledPassword ] = useState(true);

    //Function that validates form entries according to the schema which can be found above//
    const setFormErrors = (name, value) => {
        yup.reach(loginSchema, name).validate(value)
        .then(() => setErrors({...errors,[name]:''}))
        .catch(err => setErrors({...errors, [name]:err.errors[0]}))
    }

    //Function that handles form changes and updates the form and errors//
    const change = event => {
        const {value,name} = event.target;
        setFormErrors(name,value);
        setFormValues({...formValues, [name]:value});
    }

    useEffect(()=>{
        loginSchema.isValid(formValues.username)
        .then(valid => {
            setDisabledUsername(!valid)
            console.log(valid)
    })
    }, [formValues]);



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
                            <input 
                                name = 'username'
                                value = {formValues.username}
                                type = 'text' 
                                placeholder = ''
                                onChange ={change}></input>
                        </label>
                        {disabledUsername && <div style = {
                            {marginTop: '5px',
                            marginBottom: '5px',
                            color: 'red',
                            backgroundColor: 'pink',
                            width: '75.2%',
                            border: '1px solid red'}}>{errors.username}</div>}
                        <label>Password: 
                            <input 
                                name = 'password'
                                value = {formValues.password}
                                type = 'text' 
                                placeholder = 'Case Sensitive'
                                onChange = {change} ></input>
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