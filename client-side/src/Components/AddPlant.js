import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import axiosWithAuth from '../axiosWithAuth/axiosWithAuth';


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
align-items: flex-start;
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


const initialValues = {
    speciesID: '',
    h2oInterval: '', 
    h2oAmount: '',
    nickname: '',
    userID: '',
}

export default function AddPlant (){
    const [plant,setPlant] = useState(initialValues)

    const handleInput = e => {
        setPlant({...plant, [e.target.name]: e.target.value})
    }

    const handlePlantAdded = (e) => {
        // alert('Plant added')
        // axiosWithAuth().post
        e.preventDefault()
        console.log(plant)
        return setPlant(
            initialValues
            )
    }

    return (
        <StyledDiv>
            <Route>
                <StyledCard>
                    <StyledForm>
                        <StyledEntryBoxes>
                        <div>
                            <label>Plant Name:</label>
                {//could try and bring in the plant name dynamically here from an API, maybe based on user input or add the correct name to the plant list once user submits their plant
                    }   
                                <input type='text'
                                    name='plantName'
                                    placeholder=''
                                    value={plant.plantName}
                                    onChange={handleInput}/>
                        </div>
                        <div>
                            <label>Plant's Nickname:</label>
                                <input type='text'
                                name='nickName'
                                placeholder=''
                                value={plant.nickName}
                                onChange={handleInput}/>
                        </div>
                        <div>
                            <label>Watering Amount: </label>
                                <input type='text'
                                name='waterAmount'
                                placeholder='# of liters'
                                value={plant.waterAmount}
                                onChange={handleInput}/>
                        </div>
                        <div>
                            <label>Watering Frequency:</label>
                                <input type='text'
                                name='waterFrequency'
                                placeholder='# of days'
                                value={plant.waterFrequency}
                                onChange={handleInput}/>
                        </div>
                        </StyledEntryBoxes>

                        <input type='submit' value='Save Plant' onClick={handlePlantAdded}/>
                    </StyledForm>
                </StyledCard>
            </Route>
        </StyledDiv>
    
    )
} 