import React, {useState} from 'react'
import {loginUser} from "../utils/Auth"


const Login: React.FC = () =>{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = async(e:React.FormEvent) =>{
        e.preventDefault();

        try{
            // const user = await loginUser(username, password);
            console.log("Logged in Successfully");
        }catch(error){
            //will add error handling later
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            />

            <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
        </form>
    );

};

export default Login;