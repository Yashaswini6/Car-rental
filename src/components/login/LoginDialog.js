import { useFormik } from 'formik';
import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import {Dialog, DialogTitle, CircularProgress, IconButton, Button, TextField, DialogContent, Grid, Typography, Box} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import './Login.css';

const loginValidationSchema = yup.object({
    email : yup.string().required("Email required").email("Invalid email"),
    password : yup.string().required("Password required")
})

const signUpValidationSchema = yup.object({
    name : yup.string().required("Name required"),
    phone : yup.string().required("Phone required").matches(/^[0-9]{10}$/, "Should be 10 digits"),
    password : yup.string().required("Password required"),
    confirmPassword : yup.string().required("Password confirmation required").oneOf([yup.ref("password")], "Password do not match"),
    email : yup.string().required("Email required").email("Invalid email")
})

function LoginDialog({open, onClose}) {
    const [isLogin, setIsLogin] = useState(false);

    const loginForm = useFormik({
        initialValues : {email : "", password : ""},
        validationSchema : loginValidationSchema,
        // onSubmit : (values) => {
        //     dispatch()
        // }
    })

    const signUpForm = useFormik({
        initialValues : {name : "", phone : "", email : "", password : "", confirmPassword : ""},
        validationSchema : signUpValidationSchema,
        // onSubmit : (values) => {
        //     dispatch()
        // }
    })

    const handleClose = () => {
        setIsLogin(true)
        onClose()
    }

    const loginInputs = [
        {id: "email", type: "email", label: "Email"},
        {id: "password", type: "password", label: "Password"}
    ];

    const signUpInputs = [
        {id: "name", type: "text", label: "Name"},
        {id: "phone", type: "text", label: "Phone"},
        {id: "email", type: "email", label: "Email"},
        {id: "password", type: "password", label: "Password"},
        {id: "confirmPassword", type: "password", label: "Confirm Password"}
    ];

  return <Dialog scroll='body' open={open} onClose={handleClose} PaperProps={{
    sx:{
        borderRadius: '30px',
        minWidth: { xs: "90%", sm: "400px" }
    }
  }}>

    <DialogTitle sx={{
        fontSize: { xs: "1.5rem", sm: "2rem" }, display: "flex",
        fontWeight: "500", justifyContent: 'space-between', alignItems: 'center'
    }}>{isLogin ? "Login to Becarrental" : "Sign Up to Becarrental"}
        <IconButton onClick={handleClose}>
            <CloseIcon fontSize='large'/>
        </IconButton>
    </DialogTitle>

    <DialogContent>
        <form onSubmit={isLogin ? loginForm.handleSubmit : signUpForm.handleSubmit}>
            <Grid container spacing={2}>
                {
                    (isLogin ? loginInputs : signUpInputs).map(input => {
                        return <Grid item key={input.id} xs={12} sx={{marginTop: "6px"}}>
                            <TextField
                                sx={{width: "550px"}}
                                name={input.id} label={input.label}
                                type={input.type}
                                onChange={isLogin ? loginForm.handleChange : signUpForm.handleChange}
                                onBlur={isLogin ? loginForm.handleBlur : signUpForm.handleBlur}
                                error={isLogin ? (loginForm.touched[input.id] && Boolean(loginForm.errors[input.id])) : (signUpForm.touched[input.id] && Boolean(signUpForm.errors[input.id]))}
                                helperText={isLogin ? (loginForm.touched[input.id] && Boolean(loginForm.errors[input.id])) : (signUpForm.touched[input.id] && Boolean(signUpForm.errors[input.id]))}
                            ></TextField>
                        </Grid>
                    })
                }
            </Grid>

            <Grid item xs={12}>
                <Typography>{isLogin ? "Don't have an account ?  " : "Already have an account  "}<Typography component="span" onClick={() => setIsLogin(!isLogin)} sx={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "#77a464"
                }}>{isLogin ? "SignUp" : "Login"}</Typography></Typography>
            </Grid>

            <Grid item xs={12}>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                        <Button sx={{borderRadius: "10px",backgroundColor: "#F54D2F",color: "#ffffff",}} className="loginBtn">Login</Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    </DialogContent>
  </Dialog>
}

export default LoginDialog