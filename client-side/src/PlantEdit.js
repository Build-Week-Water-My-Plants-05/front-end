import React from 'react'
import {useParams, useHistory} from "react-router-dom"


const PlantEdit =() => {
    const {id} = useParams()

    return(<div>
        Edit Plant Page for plant {id}
    </div>)
}

export default PlantEdit