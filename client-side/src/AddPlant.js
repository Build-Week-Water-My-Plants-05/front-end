import React, {useState} from 'react'

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
        <form /*onSubmit={onSubmit} working on this again later*/ >
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
            <input type='submit' value='Save Plant' />
        </form>

      
    )
} 