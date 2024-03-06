import React, {useState} from 'react';
// import {registerUser} from "../utils/Auth";

const Register: React.FC = () =>{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = async(e:React.FormEvent) =>{
        e.preventDefault();

        try{
            // await registerUser(username,password);
            console.log(`{
                'username':${username},
                'password':${password}
            }`)
            // handle successful Registration
        }catch(error){
            // Handle registration error
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            {/* UserName Field */}
            <input
            type="text"
            placeholder='Username'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            />
            {/* Password Field */}
            <input
            type="password"
            placeholder='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            
        </form>
        
    )

}
export default Register;