import { useState } from "react";
import Header from "./Header";
import "./SignupPage.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function SignupPage() {
  const [name , setName] = useState()
  const [email,setEmail]=useState()
  const[password,setPassword]=useState()
  const navigate =useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:8000/register',{name , email, password}
    .then(result=>{console.log(result)
     navigate('/login')
    }))
    .catch(err=>console.log(err))
  }

  return (
    <div className="registeration-page">
        <Header/>
        <div className="register">
            <h1>Register</h1>
            <input type="text" name="name" placeholder="username"></input>
            <input type="text" name="email"  placeholder=" Email" ></input>
            <input type="password" name="password"  placeholder=" Password"></input>
            <div className="button" >Register</div>
        </div>
   
    </div>

  );
}