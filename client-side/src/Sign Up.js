import React, {useState} from 'react'

export default function SignUp (props){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!username) {
            alert('Please add an username')
            return
        }
        onAdd({username, password, phoneNumber})

        setUsername('')
        setPassword('')
        setPhoneNumber('')
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Username</label>
                <input 
                type='text'
                placeholder='username goes here'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Password</label>
                <input 
                type='text'
                placeholder='password goes here'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <div>
                <label>Phone Number</label>
                <input 
                type='text'
                placeholder='xxx-xxx-xxxx'
                value={phoneNumber}
                onChange={(e)=>setPhoneNumber(e.target.value)}
                />
            </div>
            <input type='submit' value="Create User"/>
        </form>
    )
} 