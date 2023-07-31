import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import {useParams,useHistory} from "react-router-dom"

function Resetpassword(){

    // const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const[confirmPassword,setconfirmPassword]=useState()
    const{token}=useParams()
    const history=useHistory()

 async function handleClick(){

       const user={
       password,
       confirmPassword
      }
      console.log(user)

      const response = await fetch(`https://password-reset-task-0co5.onrender.com/api/reset/password/${token}`,{
        method:"POST",
        body:JSON.stringify(user),
        headers:{
            "content-type":"application/json"
        }

      })


   
      const data= await response.json()
      console.log(data)
      history.push("/")


     
}

    return(
       <div style={{marginTop:'50px'}}>
        <Form.Control   style={{margin:'30px' ,width:"50%"}} type="password"
         onChange={(e)=>setPassword(e.target.value)} />
         <Form.Control   style={{margin:'30px' ,width:"50%"}} type="password"
         onChange={(e)=>setconfirmPassword(e.target.value)} />
         

        <Button onClick={handleClick}>submit</Button>
        </div>
    )
}

export default Resetpassword