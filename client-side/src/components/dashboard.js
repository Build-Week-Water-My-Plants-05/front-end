import React from 'react'
import { useState, useEffect } from 'react';
import axiosWithAuth from './axiosWithAuth/axiosWithAuth';
import styled from 'styled-components'
import { Link, useHistory, Route } from "react-router-dom";
import HomeImage from "./../img/img2.jpg"


const Dashboard = (props) => { 
    const [plants,setPlants] = useState(null)
    const [watering,setWater] = useState(null)
    const {trigger,setTrigger} = props

    const history = useHistory()

    useEffect(() => {
        axiosWithAuth().get('https://wmp-api.herokuapp.com/api/plants').then(res => 
        setPlants(res.data)
        )
    },[watering,trigger])

    const deletePlant = (e,id) => {

        e.preventDefault()

        axiosWithAuth()

            .delete(`/api/plants/${id}`)
            .then(res => {
               
                console.log('Delete success')
                setPlants([...plants])
                history.push('/dashboard')
                setTrigger(!trigger)
            })

            .catch(err => {
                console.log(err)
            })
    }

    Date.prototype.addHours= function(h){
        this.setHours(this.getHours()+h);
        return this;
    }

    
    const water = (id) => {
        axiosWithAuth().put(`https://wmp-api.herokuapp.com/api/plants/${id}`,{lastWatered: new Date().toLocaleString()})
        .then(res =>{
            var myDate = new Date();
            console.log(res)
            setWater(myDate.toString())})
        .catch( e => console.log(e))
    }
    

    //style component
    const StyledDash = styled.div`
    background-image: url('${HomeImage}');
    background-size: cover;
    background-position: center;
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    `


    return(
    <StyledDash>  
        <Route exact path = '/'></Route> 

            <h2>My Plants</h2> 

        <div className="tablecontainer">
        {/* <table className="comicGreen"> */}
          
            <tr><th>Species</th>
            <th>Image</th>
            <th>Name</th>
            <th>H2o Interval(hrs)</th>
            <th>H2o Amount</th>
            <th>Last Watered</th>
            <th>Date/Time to be watered</th>
            <th>Water</th><th>Edit</th>
            <th>Delete</th></tr>

            {plants && plants.map(el => {

                const date = new Date (Date.parse(el.lastWatered))
                const newdate = new Date(date)
                newdate.addHours(parseInt(el.h2oInterval))

                let valuetostring = null
                if(el.h2oInterval === "1"){
                    valuetostring = "Once every hour"
                }

                else if (el.h2oInterval === "2"){
                    valuetostring = "Once every 2 hours"
                }

                else if (el.h2oInterval === "3"){
                    valuetostring = "Once every 3 hours"
                }

                else if (el.h2oInterval === "4"){
                    valuetostring = "Once every 4 hours"
                }
                
                const current = new Date()
                let color = 'good'

                if(current.getTime() > newdate.getTime()) {
                    color = 'danger'

                }
                
                return<tr><td>{ el.speciesID }</td><td>
                    <img src={process.env.PUBLIC_URL + `/${el.speciesID}.jpg`} alt="logo" />
                    </td><td>{el.nickname}</td>
                    <td>{valuetostring}</td>
                    <td>{el.h2oAmount}</td>
                    <td>{el.lastWatered}</td>

                <td className={color}>
                    {newdate.toLocaleString()}</td>

                <td><button className="water" onClick={() => water(el.plantID)}>
                    </button></td><td><Link to={`/edit/${el.plantID}`} className="edit">Edit</Link></td>
                    <td><button className="delete" onClick = {(e) => deletePlant(e,el.plantID)}>X</button></td></tr>

            })}
            

           
    </div>
    </StyledDash>
)
}


export default Dashboard