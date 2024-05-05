import { useState } from "react";
import './AddContact.css';
//import { Button } from "@mui/material";

function AddContact(props){
    const [inputData,setInputData]=useState(
{
    
        name:"",
        email:"",
        mobileno:"",
    
}
    );

   

    const handleChange=(e)=>{
       let name=e.target.name;
       let value=e.target.value;
        if(name==='name'){
            setInputData({...inputData,name:value})
        }
        if(name==='mobileno'){
            setInputData({...inputData,mobileno:value})
        }
        if(name==='email'){
            setInputData({...inputData,email:value})
        }
        console.log(inputData.name,inputData.email)
    }

    const SubmitHandler=(e)=>{
        e.preventDefault();
        props.addContact(inputData);
       
        
    }
    
    return (<div>
    <h2>Add Contact</h2>
    <form onSubmit={SubmitHandler}>
       
    <input type="text" placeholder="Name"  name='name' onChange={(e)=>handleChange(e)}/><br/>
    <input type="text" placeholder="Mobile No"  name='mobileno' onChange={(e)=>handleChange(e)}/><br/>
    <input type="email" placeholder="Email" name="email" onChange={(e)=>handleChange(e)}/><br/>
    
    <button type="submit">Add Contact</button>

    </form>
    </div>)
}

export default AddContact;