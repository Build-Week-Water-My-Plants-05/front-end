import React, { useEffect, useState } from 'react'
import {useParams, useHistory} from "react-router-dom"
import styled from 'styled-components';
import axiosWithAuth from '../axiosWithAuth/axiosWithAuth';

const StyledDiv = styled.div`
color: #007360;
border: 5px solid white;
margin-top: 3%;
text-align: center;
form{
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: auto;
    input , button{
        width: 40%;
        margin: auto;
    }
    button{
        width: 10%;
        margin-top: 3%;
        padding: 1rem;
        background-color: #007360;
        color: white;
        font-weight: bold;
        border: none;
    }
}
`

const initialState ={ 
    name: '',
    h2ointerval: '',
    h2oamount: '',
    species: ''
}



const PlantEdit =() => {
    const {id} = useParams()
    const [plant, setPlant] = useState(initialState)
    const {push} = useHistory()

    useEffect(() => {
        axiosWithAuth()
            .get(`https://wmp-api.herokuapp.com/api/plants/${id}`)  
            .then(res => {
                setPlant(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleChange = e => {
        e.preventDefault()
        setPlant({
            ...plant,
            [e.target.name]: e.target.value
        })
    }

    const SavePlant = e => {
        e.preventDefault()
        axiosWithAuth()
            .put(`/api/plants/${id}`, plant) 
            .then(res => {
                setPlant(plant)
                push('/dashboard')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
    
    <StyledDiv >
        <h2>Edit Plant Page for plant {id} </h2>
        <form className="editform" onSubmit={SavePlant}>
            <label> Name:</label>
<input onChange={e=>handleChange(e)} type="text" name="name" value={plant.name}/>
<label> Species:</label>
<input  onChange={e=>handleChange(e)} type="text" name="species" value={plant.species}/>
<label> H2oAmount:</label>
<input  onChange={e=>handleChange(e)} type="text" name="h2amount" value={plant.h2amount}/>
<label> H2oInterval:</label>
<input  onChange={e=>handleChange(e)} type="text" name="h2ointerval" value={plant.h2ointerval}/>
<button>Submit</button>
             </form>
    </StyledDiv>
    )
}

export default PlantEdit