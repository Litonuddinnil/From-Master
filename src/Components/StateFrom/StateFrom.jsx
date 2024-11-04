import { useState } from "react";

 
const StateFrom = () => {
    const[ name,setName] =useState('liton');
    const [email,setEmail] = useState(null);
    const[password,setPassword] =useState(null);
    const [error,setError] = useState('')
    const handlerSubmit = e =>{
      
        e.preventDefault();
        if(password.length<6)
        {
            setError('password must be 6 character')
        }
        else{
            setError('');

            console.log(name,email,password)
        }
    }
    const handlerChangeName =(e)=>{
        // console.log(e.target.value);
        setName(e.target.value)
    }
    const handlerChangeEmail =(e)=>{
        // console.log(e.target.value);
        setEmail(e.target.value)
    }
    const handlerChangePassword =(e)=>{
        // console.log(e.target.value);
        setPassword(e.target.value)
    }
   
    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <br />
                <br />
            <input  value={name}
            onChange={handlerChangeName}
            type="text" name="name" />
            <br />
            <br />
            <input 
            onChange={handlerChangeEmail}
            type="email" name="email" id="" />
            <br />
            <br />
            <input
            onChange={handlerChangePassword}
            type="password" name="password" id="" required />
            <br />
            <input className="bg-green-500 p-2 mt-2 rounded-lg" type="submit" value="Submit" />
            {
                error && <p>{error}</p>
            }
          </form>
        </div>
    );
};

export default StateFrom;