'use client';

import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Link,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
} from '@mui/icons-material';
import { colors } from '@/theme/color';

export default function LoginPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // State management
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });

  // Handle form submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors = { email: '', password: '' };
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    
    // If no errors, proceed with login
    if (!newErrors.email && !newErrors.password) {
      console.log('Login attempt:', { email, password });
      // Add your login logic here
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.secondary.main} 100%)`,
        padding: { xs: 2, sm: 2, md: 3 },
        overflow: 'hidden',
      }}
    >
      {/* Login Card */}
      <Card
        elevation={8}
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', sm: 420, md: 440, lg: 460 },
          boxShadow: '0px 12px 40px rgba(0, 0, 0, 0.2)',
          borderRadius: 3,
          overflow: 'visible',
        }}
      >
        <CardContent
          sx={{
            padding: { xs: 3, sm: 3.5, md: 4 },
            '&:last-child': {
              paddingBottom: { xs: 3, sm: 3.5, md: 4 },
            },
          }}
        >
          {/* Logo/Brand Section */}
          <Box
            sx={{
              textAlign: 'center',
              mb: 3,
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.secondary.main} 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                mb: 1.5,
                boxShadow: '0px 4px 20px rgba(25, 118, 210, 0.35)',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: colors.text.white,
                  fontWeight: 700,
                  fontSize: '1.75rem',
                }}
              >
                K
              </Typography>
            </Box>

            {/* Brand Name */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: colors.text.primary,
                mb: 0.5,
                fontSize: { xs: '1.5rem', sm: '1.625rem' },
              }}
            >
              Kavprime
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: colors.text.secondary,
                fontSize: '0.875rem',
              }}
            >
              Ticket Management System
            </Typography>
          </Box>

          {/* Welcome Text */}
          <Box sx={{ mb: 2.5, textAlign: 'center' }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: colors.text.primary,
                mb: 0.5,
                fontSize: '1.125rem',
              }}
            >
              Welcome Back
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: colors.text.secondary,
                fontSize: '0.8125rem',
              }}
            >
              Please sign in to continue
            </Typography>
          </Box>

          {/* Login Form */}
          <form onSubmit={handleLogin}>
            <Stack spacing={2}>
              {/* Email Field */}
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ color: colors.text.secondary, fontSize: '1.25rem' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: colors.primary.main,
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: colors.primary.main,
                      borderWidth: '2px',
                    },
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: colors.primary.main,
                  },
                }}
              />

              {/* Password Field */}
              <TextField
                fullWidth
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={{ color: colors.text.secondary, fontSize: '1.25rem' }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        size="small"
                        sx={{ color: colors.text.secondary }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: colors.primary.main,
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: colors.primary.main,
                      borderWidth: '2px',
                    },
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: colors.primary.main,
                  },
                }}
              />

              {/* Forgot Password Link */}
              <Box sx={{ textAlign: 'right', mt: -0.5 }}>
                <Link
                  href="#"
                  underline="hover"
                  sx={{
                    color: colors.primary.main,
                    fontSize: '0.8125rem',
                    fontWeight: 500,
                    '&:hover': {
                      color: colors.primary.dark,
                    },
                  }}
                >
                  Forgot Password?
                </Link>
              </Box>

              {/* Login Button */}
              <Button
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  mt: 1,
                  background: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.secondary.main} 100%)`,
                  color: colors.text.white,
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  padding: '12px 24px',
                  textTransform: 'none',
                  borderRadius: 2,
                  boxShadow: '0px 4px 14px rgba(25, 118, 210, 0.4)',
                  '&:hover': {
                    background: `linear-gradient(135deg, ${colors.primary.dark} 0%, ${colors.secondary.dark} 100%)`,
                    boxShadow: '0px 6px 20px rgba(25, 118, 210, 0.5)',
                    transform: 'translateY(-1px)',
                  },
                  '&:active': {
                    transform: 'translateY(0px)',
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                Sign In
              </Button>
            </Stack>
          </form>

          {/* Additional Options */}
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography
              variant="body2"
              sx={{
                color: colors.text.secondary,
                fontSize: '0.8125rem',
              }}
            >
              Don't have an account?{' '}
              <Link
                href="#"
                underline="hover"
                sx={{
                  color: colors.primary.main,
                  fontWeight: 600,
                  '&:hover': {
                    color: colors.primary.dark,
                  },
                }}
              >
                Contact Admin
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Copyright Footer */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 16,
          left: 0,
          right: 0,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '0.75rem',
            textShadow: '0px 1px 3px rgba(0, 0, 0, 0.3)',
            fontWeight: 500,
          }}
        >
          © 2024 Kavprime. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}