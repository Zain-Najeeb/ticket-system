import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button, Checkbox, FormControlLabel, Link } from '@mui/material';
import MainModel from '../../components/mainModel/mainmodel';
import './signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [reverifyPassword, setReverifyPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isAnalyst, setIsAnalyst] = useState(false);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    email: false,
    username: false,
    password: false,
    reverifyPassword: false,
    phoneNumber: false,
  });

  const handleCreateAccount = () => {
    setErrors({
      email: !email,
      username: !username,
      password: !password,
      reverifyPassword: !reverifyPassword || password !== reverifyPassword,
      phoneNumber: !phoneNumber,
    });

    if (!email || !username || !password || !reverifyPassword || !phoneNumber || password !== reverifyPassword) {
      return;
    }
  };

  return (
    <div className="main-content">
      <MainModel title="Create New Account">
        <Box className="model_content" sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            error={errors.email}
            helperText={errors.email && "Email is required"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            error={errors.username}
            helperText={errors.username && "Username is required"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            error={errors.phoneNumber}
            helperText={errors.phoneNumber && "Phone number is required"}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
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