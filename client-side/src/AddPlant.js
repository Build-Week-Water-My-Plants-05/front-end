import React, {useState} from 'react';
import { Route } from 'react-router-dom';
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

export default function AddPlant (props){
    const [plantName, setPlantName] = useState('')
    const [nickName, setNickName] = useState('')
    const [waterNeeds, setWaterNeeds] = useState('')
    const [time, setTime] = useState('')

    // const onSubmit = (e) => {
    //     e.preventDefault()

    //     if(!plantName) {
    //         alert('Please add a Plant')
    //         return
    //     }
    //     onAdd({plantName,nickName,waterNeeds,time})

    //     setPlantName('')
    //     setNickName('')
    //     setWaterNeeds('')
    //     setTime('')
    // }

    return (
        <StyledDiv>
            <Route>
                <StyledCard>
                    <StyledForm>
                        <StyledEntryBoxes>
                        <div>
                            <label>Plant Name</label>
                {//could try and bring in the plant name dynamically here from an API, maybe based on user input or add the correct name to the plant list once user submits their plant
                    }   
                                <input type='text'
                                    placeholder='plant name here'
                                    value={plantName}
                                    onChange={(e)=>setPlantName(e.target.value)}/>
                        </div>
                        <div>
                            <label>Nickname for your Plant</label>
                            <input type='text'
                            placeholder='nickname for your plant'
                            value={nickName}
                            onChange={(e)=>setNickName(e.target.value)}/>
                        </div>
                        <div>
                            <label>Amount of Water Plant Needs</label>
                            <input type='text'
                            placeholder='plant name here'
                            value={waterNeeds}
                            onChange={(e)=>setWaterNeeds(e.target.value)}/>
                        </div>
                        <div>
                            <label></label>
                            <input type='text'
                            placeholder='plant name here'
                            value={time}
                            onChange={(e)=>setTime(e.target.value)}/>
                        </div>
                        </StyledEntryBoxes>
                        <input type='submit' value='Save Plant' />
                    </StyledForm>
                </StyledCard>
            </Route>
        </StyledDiv>
    
    )
} 