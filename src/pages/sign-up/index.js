import React from 'react'
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
 
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import "bootstrap/dist/css/bootstrap.css";
import { useRouter } from 'next/router';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Link from 'next/link';

const SignUp = () => {
const router=useRouter()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    localStorage.setItem("user1","ABC")
    router.push("/sign-in")
  };

  return (
    <>
    <Header />
    <div className='d-flex m-0 p-0   align-items-center'   >
    <Container  component="main" maxWidth="lg">
      <Box
        sx={{
          // marginTop: 8,
          
        }}
       
      >
        <Grid container>
          <CssBaseline />
          {/* <Grid
            item
            xs={false}
            sm={4}
            md={7}
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
          /> */}
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
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
                Sign Up
              </Typography>
              
                <div className='row'>
                <div className='col-12 col-md-4 col-lg-4'>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Name"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                </div>
                <div className='col-12 col-md-4 col-lg-4'>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="contact"
                  label="Mobile No."
                  type="number"
                  id="password"
                  autoComplete="current-password"
                />
                </div>
                <div className='col-12 col-md-4 col-lg-4'>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="email"
                  label="Email Address"
                  type="email"
                  id="password"
                  autoComplete="current-password"
                />
                </div>
                <div className='col-12 col-md-4 col-lg-4'>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="text"
                  label="Address"
                  type="text"
                  id="password"
                  autoComplete="current-password"
                />
                </div>
                <div className='col-12 col-md-4 col-lg-4'>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Country"
                  type="text"
                  id="password"
                  autoComplete="current-password"
                />
                </div>
                <div className='col-12 col-md-4 col-lg-4'>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="City"
                  type="text"
                  id="password"
                  autoComplete="current-password"
                />
                </div>
                <div className='col-12 col-md-4 col-lg-4'>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                </div>
                <div className='col-12 col-md-4 col-lg-4'>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                </div>
                </div >
                {/* <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                /> */}
                <div className='col-12 col-md-4 col-lg-4'>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container>
                  {/* <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid> */}
                  <Grid item>
                    <Link href="/sign-in" variant="body2">
                      {"Don't have an account? Sign In"}
                    </Link>
                  </Grid>
                </Grid>
                </div>
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

export default SignUp