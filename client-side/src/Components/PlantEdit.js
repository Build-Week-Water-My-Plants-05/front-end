import React, { useEffect, useState } from 'react'
import {useParams, useHistory} from "react-router-dom"

const initialState ={ 
    name: '',
    h2ointerval: '',
    h2oamount: '',
    species: ''
}

const PlantEdit =() => {
    const {id} = useParams()
    const [plant, setPlant] = useState(initialState)

    useEffect(()=>{
        
    },[])

    return(<div className="editpage">
        <h2>Edit Plant Page for plant {id} </h2>
        <form className="editform">
            <label> Name:</label>
<input type="text" name="name" value={plant.name}/>
<label> Species:</label>
<input type="text" name="species" value={plant.species}/>
<label> H2oAmount:</label>
<input type="text" name="h2amount" value={plant.h2amount}/>
<label> H2oInterval:</label>
<input type="text" name="h2ointerval" value={plant.h2ointerval}/>

             </form>
    </div>)
}

export default PlantEdit