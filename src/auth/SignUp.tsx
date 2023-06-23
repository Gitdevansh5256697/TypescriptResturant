import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
// function Copyright(props: any) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>

//     </Typography>
//   );
// }

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hash = await bcrypt.hash(password, salt);
      // Use the hashed password (hash) as needed
      // console.log('Hashed password:', hash);
      //////////////////////////
      const encryptedPassword = JSON.stringify(hash);
    event.preventDefault();
    let regobj = { id, name,password: encryptedPassword, email };
    // const data = new FormData(event.currentTarget);
    console.log(regobj);
    // return
    //Fetch Api for SignUp
    fetch("http://localhost:8000/user", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(regobj),
    })
      .then((res) => {
        toast.success("Register successfully");
        navigate("/login");
      })
      .catch((err) => {
        toast.success("Failed:" + err.message);
      });
  };

  // console.log({
  //   email: data.get('email'),
  //   password: data.get('password'),

  // });

  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [password, passwordchange] = useState("");

  const navigate = useNavigate();
  const IsValidate = () => {
    let isproceed = true;
    return isproceed;
  };

  // Validation Alert
  // const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState("");
  const handleEmailChange = (value) => {
    emailchange(value);

    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  // Encryption

  const handlePasswordSubmit = async (password: string) => {
    try {
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hash = await bcrypt.hash(password, salt);
      // Use the hashed password (hash) as needed
      // console.log('Hashed password:', hash);
      //////////////////////////
      const encryptedPassword = JSON.stringify(hash);
      localStorage.setItem("encryptedPassword", encryptedPassword);
    } catch (error) {
      console.error("Error hashing password:", error);
    }
    //////////////
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            CREATE AN ACCOUNT
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            {/* username */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  //   autoComplete="given-name"
                  value={id}
                  onChange={(e) => idchange(e.target.value)}
                  name="id"
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  autoFocus
                />
              </Grid>

              {/* Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  value={name}
                  onChange={(e) => namechange(e.target.value)}
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="Name"
                  autoComplete="family-name"
                />
              </Grid>

              {/* Email Address */}
              <Grid item xs={12}>
                <TextField
                  value={email}
                  onChange={(e) => {
                    emailchange(e.target.value);
                    handleEmailChange(e.target.value);
                  }}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={Boolean(emailError)}
                  helperText={emailError}
                />
              </Grid>

              {/* password */}
              <Grid item xs={12}>
                <TextField
                  value={password}
                  onChange={(e) => {
                    passwordchange(e.target.value);
                    handlePasswordSubmit(e.target.value);
                  }}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              CREATE AN ACCOUNT
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
