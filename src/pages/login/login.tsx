import './login.css';
import HandleApiCall from '../../handleApiCall';
import { useSession } from '../../context/session';
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const navigate = useNavigate();
  const { setSession } = useSession();

  const handleSignIn = async () => {
    const body = {
      email: email,
      password: password,
    };
    try {
      const data = await HandleApiCall({ route: 'auth/login', method: 'POST', body: body });
      if (data && data.body && data.body.isAuthenticated) {
        setSession(data.body);
        navigate('/home');
      } else {
        setError('Incorrect email or password'); 
      }
    } catch (err) {
      console.error('Error during login:', err);
      setError('An error occurred. Please try again.'); 
    }
  };

  return (
    <div className="main-content">
      <Box className="login-box" sx={{ padding: 4, boxShadow: 3, borderRadius: 2, maxWidth: 400, bgcolor: 'background.paper' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          sx={{ mt: 2 }} 
          onClick={handleSignIn}
        >
          Sign In
        </Button>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
          <Typography variant="body2">
            Don't have an account?{' '}
            <Link
              component="button"
              variant="body2"
              onClick={() => navigate('/signup')}
              sx={{ color: 'primary.main', fontWeight: 'bold' }}
            >
              Create One
            </Link>
          </Typography>
        </Box>
        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
      </Box>
    </div>
  );
}

export default Login;
