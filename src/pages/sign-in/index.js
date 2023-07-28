import React, { useState } from 'react'
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import "bootstrap/dist/css/bootstrap.css";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Footer from '../common/Footer';
import Header from '../common/Header';
import httpCommon from '@/src/http-common';

const SignIn = () => {

const router=useRouter()

  const [user,setUser]=useState({email:"",password:""});
  const [error,setError]=useState("");

  const handleChange=(e)=>{
      let user1={...user};
      user1[e.currentTarget.name]=e.currentTarget.value;
      setUser(user1);
      setError("");
  } 

   const handleSubmit = (event) => {
    event.preventDefault();
     login(user); 
  };
  const handleEnter = (event) => {
    if(event.key=="Enter")
     login(user); 
  };

  const login=async(user)=>{
       try{
        let response=await httpCommon.post("/lybleyCRMlogin",user);
        let {data}=response;
        let obj=JSON.stringify(data);
        localStorage.setItem("crmUser",obj);
        router.push("/crm/dashboard");
       }catch(err){
        if(err.response.status===401)
        setError(err.response.data);
        console.log(err);
       }
  }

  return (
    <>
    <Header />
    <div className='d-flex m-0 p-0    align-items-center'   >
    <Container  component="main" maxWidth="lg">
      <Box
        sx={{
          // marginTop: 8,
          
        }}
       
      >
        <Grid container>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            mt={5}
            mb={5}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
            mt={5}
            mb={5}
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Typography color="red" component="h4" variant="h6">
                  {error?.length>0 ? error : "" }
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                  onKeyPress={handleEnter}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/sign-up" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
 
    </div>
    <Footer />
    </>
  )
}

export default SignIn