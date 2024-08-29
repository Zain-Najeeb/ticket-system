
import { useNavigate } from 'react-router-dom';
import { useSession } from '../../context/session';
import { Box, Typography, TextField, Button, Checkbox, FormControlLabel, Link } from '@mui/material';
import React, { useState } from 'react';
import MainModel from '../../components/mainModel/mainmodel';
import './signup.css';

import HandleApiCall from '../../handleApiCall';

function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [reverifyPassword, setReverifyPassword] = useState('');
  const [isAnalyst, setIsAnalyst] = useState(false);
  const navigate = useNavigate();
  const { setSession } = useSession();
  
  const [errors, setErrors] = useState({
    email: false,
    username: false,
    password: false,
    reverifyPassword: false,
    emailUnique: false,
    usernameUnique: false,
  });

  const handleCreateAccount = async () => {
    setErrors(prevErrors => ({
      email: !email,
      username: !username,
      password: !password,
      reverifyPassword: !reverifyPassword || password !== reverifyPassword,
      emailUnique: false,
      usernameUnique: false,
    }));

    if (!email || !username || !password || !reverifyPassword || password !== reverifyPassword) {
      return;
    }
    
    const body = {
      email: email, 
      isAuthenticated: true, 
      username: username, 
      password: password, 
      role: isAnalyst ? 'pending' : 'user'
    };
    
    try {
      const data = await HandleApiCall({ route: 'auth/signup', method: 'POST', body: body });
      setErrors(prevErrors => ({
        ...prevErrors,
        emailUnique: false,
        usernameUnique: false
      }));

      if (data.errors) {
        const error = data.errors[0];
        setErrors(prevErrors => ({
          ...prevErrors,
          emailUnique: error === 'Email is already in use',
          usernameUnique: error === 'Username is already in use'
        }));
      } else {
        setSession(body);
        navigate('/home')
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  const handleFieldChange = (field: string, setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
    setErrors(prevErrors => ({
      ...prevErrors,
      [field]: false,
      [`${field}Unique`]: false
    }));
  };

  return (
    <div className="main-content">
      <MainModel title="Create a New Account">
        <Box className="model_content" sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            error={errors.email || errors.emailUnique}
            helperText={errors.email ? "Email is required" : (errors.emailUnique ? "Email is already in use" : "")}
            value={email}
            onChange={handleFieldChange('email', setEmail)}
          />
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            error={errors.username || errors.usernameUnique}
            helperText={errors.username ? "Username is required" : (errors.usernameUnique ? "Username is already in use" : "")}
            value={username}
            onChange={handleFieldChange('username', setUsername)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            error={errors.password}
            helperText={errors.password && "Password is required"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Reverify Password"
            type="password"
            variant="outlined"
            fullWidth
            error={errors.reverifyPassword}
            helperText={errors.reverifyPassword && (password !== reverifyPassword ? "Passwords do not match" : "Reverify password is required")}
            value={reverifyPassword}
            onChange={(e) => setReverifyPassword(e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={isAnalyst}
                onChange={(e) => setIsAnalyst(e.target.checked)}
              />
            }
            label="Are you an Analyst?"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleCreateAccount}
          >
            Create Account
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
            <Typography variant="body2">
              Back to Login?{' '}
              <Link
                component="button"
                variant="body2"
                onClick={() => navigate('/login')}
                sx={{ color: 'primary.main', fontWeight: 'bold' }}
              >
                Click Here
              </Link>
            </Typography>
          </Box>
        </Box>
      </MainModel>
    </div>
  );
}

export default Signup;
