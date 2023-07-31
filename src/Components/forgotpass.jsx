import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'

function Forgotpassword(){

    const [email,setEmail]=useState()

 async function handleClick(){

       const user={
        email,
      }
      console.log(user)

      const response = await fetch("https://password-reset-task-0co5.onrender.com/api/forgot/password",{
        method:"POST",
        body:JSON.stringify(user),
        headers:{
            "content-type":"application/json"
        }

      })


    //   const response = await fetch("https://password-reset-task-0co5.onrender.com/api/login", {
    //     method: "POST",
    //     body: JSON.stringify(loginUser),
    //     headers: {
    //         "content-type": "application/json"
    //     }


    // })

      const data= await response.json()
      console.log(data)


     
}

    return(
       <div style={{marginTop:'50px'}}>
        <Form.Control   style={{margin:'30px' ,width:"50%"}} type="text" onChange={(e)=>setEmail(e.target.value)} />
        <Button onClick={handleClick}>submit</Button>
        </div>
    )
}

export default Forgotpassword