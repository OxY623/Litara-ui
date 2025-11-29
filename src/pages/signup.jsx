import { gql } from '@apollo/client';
import { useApolloClient, useMutation } from '@apollo/client/react';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigation } from 'react-router';

const SIGNUP_USER = gql`
  mutation signUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password)
  }
`;

function SignUp() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
  });
  const client = useApolloClient();
  const navigation = useNavigation();
  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: (data) => {
      console.log('Sign up successful:', data);
      localStorage.setItem('token', data.signUp);
      client.writeData({ data: { isLoggedIn: true } });
      navigation.navigate('/');
    },
    onError: (err) => {
      console.error('Error during sign up:', err);
    },
  });

  useEffect(() => {
    document.title = 'Sign Up - OranNote';
  }, []);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp({ variables: { ...values } });
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'secondary.main',
          borderRadius: 2,
          p: 4,
          mt: 6,
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          className="text-violet-500"
        >
          Sign Up
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Username"
            name="username"
            value={values.username}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            required
          />

          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
              <CircularProgress />
            </Box>
          )}
          {error && (
            <Alert severity="error" sx={{ my: 2 }}>
              Error :( Please try again
            </Alert>
          )}

          <Button
            fullWidth
            variant="contained"
            color="secondary"
            type="submit"
            sx={{ mt: 2 }}
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default SignUp;
