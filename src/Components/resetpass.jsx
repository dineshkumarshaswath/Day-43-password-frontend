import React, { useState } from 'react'
import { Form, Col, Row } from 'react-bootstrap'
import { useParams, useHistory } from "react-router-dom"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import * as yup from 'yup'
import { useFormik } from 'formik'
import Typography from '@mui/material/Typography';

const resetSchema = yup.object({
    password: yup.string().required("* required").min(10, ' * minimum 10 characters required'),
    confirmPassword: yup.string().required("* required").min(10, ' * minimum 10 characters required'),


})

function Resetpassword() {

    // const [email,setEmail]=useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setconfirmPassword] = useState()
    const [error, setError] = useState()
    const [message, setMessage] = useState()
    const { token } = useParams()
    const history = useHistory()



    const { handleSubmit, handleChange, values, handleBlur, touched, errors } = useFormik({
        initialValues: {
            password: "",
            confirmPassword: ""


        },
        validationSchema: resetSchema,
        onSubmit: (userpass) => {

            handleClick(userpass)
        }

    })

    async function handleClick(userpass) {



        const response = await fetch(`https://password-reset-task-0co5.onrender.com/api/reset/password/${token}`, {
            method: "POST",
            body: JSON.stringify(userpass),
            headers: {
                "content-type": "application/json"
            }

        })



        const data = await response.json()
        console.log(data)
        if (data.message == " successfully reset the password") {
            alert(data.message)

            history.push("/")
        } else if (data.error) {
            setError(data.error)
        }




    }

    return (



        <Row
            sm={1} md={1} xs={1} lg={1}>
            <Col style={{
                width: "100%", display: "grid",
                placeItems: "center", textAlign: "center"
            }} >
                <Card style={{
                    marginTop: '100px'
                    , width: "50%", textAlign: "center"
                }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: "bolder" }}>
                            Reset password
                        </Typography>
                        <Form onSubmit={handleSubmit}>

                            <TextField style={{ marginTop: "10px", width: "100%" }}
                                id="outlined-basic" label="Password" variant="outlined"

                                type="password"

                                value={values.password}
                                name='password'
                                onBlur={handleBlur}
                                onChange={handleChange} />
                            <Typography style={{ color: "crimson" }}>
                                {touched.password ? errors.password : ""}</Typography>

                            <TextField style={{ marginTop: "10px", width: "100%" }}
                                id="outlined-basic" label="Confirmpassword" variant="outlined"

                                type="password"

                                value={values.confirmPassword}
                                name='confirmPassword'
                                onBlur={handleBlur}
                                onChange={handleChange} />

                            <Typography style={{ color: "crimson" }}>
                                {touched.confirmPassword ? errors.confirmPassword : ""}
                            </Typography>


                            {error ?
                                <Form.Control style={{
                                    margin: "10px",
                                    Color: "crimson"
                                    , fontWeight: "bold", textAlign: "center"
                                }}
                                    placeHolder={error} /> : " "}


                            <Button variant="contained" type='submit' style={{ marginTop: "10px" }}>submit</Button>
                        </Form>
                    </CardContent>
                </Card>
            </Col>



        </Row>







    )
}

export default Resetpassword