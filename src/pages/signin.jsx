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
import { useNavigate } from 'react-router';

const SIGNIN_USER = gql`
  mutation signIn($username: String, $email: String, $password: String!) {
    signIn(username: $username, email: $email, password: $password)
  }
`;

function SignIn() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
  });
  const client = useApolloClient();
  const navigate = useNavigate();

  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: (data) => {
      console.log('Sign in successful:', data);
      localStorage.setItem('token', data.signIn);

      // Apollo будет читать isLoggedIn через typePolicies
      // можно принудительно обновить UI:
      client.cache.evict({ fieldName: 'isLoggedIn' });
      client.cache.gc();

      navigate('/');
    },

    onError: (err) => {
      console.error('Error during sign in:', err);
    },
  });

  useEffect(() => {
    document.title = 'Sign In - OranNote';
  }, []);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn({ variables: { ...values } });
  };

  return (
    <Container maxWidth="sm">
      <Box
        className="border-amber-500"
        sx={{
          border: '1px solid',
          borderRadius: 2,
          p: 4,
          mt: 6,
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          className="text-amber-500"
        >
          Sign In
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
            color="primary"
            className="bg-amber-500 hover:bg-amber-600"
            type="submit"
            sx={{ mt: 2 }}
          >
            Sign In
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default SignIn;
