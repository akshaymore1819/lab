// Login.jsx
import React, { useState } from 'react';
import './Login.css';
import {
  Box, TextField, Button, Typography, Divider, IconButton,
  InputAdornment, CircularProgress, Alert
} from '@mui/material';
import { WhatsApp, Person, Phone, Email, Lock } from '@mui/icons-material';

const Login = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    mobile: '', 
    email: '', 
    otp: '' 
  });
  const [loading, setLoading] = useState({ 
    otp: false, 
    submit: false 
  });
  const [errors, setErrors] = useState({ 
    name: '', 
    mobile: '', 
    email: '', 
    otp: '' 
  });
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [alert, setAlert] = useState({ 
    show: false, 
    message: '', 
    severity: 'info' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateMobile = (mobile) => /^\d{10}$/.test(mobile);

  const handleSendOtp = () => {
    if (!formData.email.trim()) {
      setErrors(prev => ({ ...prev, email: 'Email is required' }));
      return;
    }
    if (!validateEmail(formData.email)) {
      setErrors(prev => ({ ...prev, email: 'Invalid email format' }));
      return;
    }

    setLoading(prev => ({ ...prev, otp: true }));
    setTimeout(() => {
      setOtpSent(true);
      setAlert({ 
        show: true, 
        message: `OTP sent to ${formData.email}`, 
        severity: 'success' 
      });
      setLoading(prev => ({ ...prev, otp: false }));
    }, 1500);
  };

  const handleVerifyOtp = () => {
    if (!formData.otp.trim()) {
      setErrors(prev => ({ ...prev, otp: 'OTP is required' }));
      return;
    }
    if (formData.otp.length !== 6) {
      setErrors(prev => ({ ...prev, otp: 'OTP must be 6 digits' }));
      return;
    }

    setOtpVerified(true);
    setAlert({ 
      show: true, 
      message: 'OTP verified successfully!', 
      severity: 'success' 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: !formData.name.trim() ? 'Name is required' : '',
      mobile: !formData.mobile.trim() ? 'Mobile is required' : !validateMobile(formData.mobile) ? 'Invalid 10-digit number' : '',
      email: !formData.email.trim() ? 'Email is required' : !validateEmail(formData.email) ? 'Invalid email format' : '',
      otp: otpSent && !otpVerified ? 'Please verify OTP' : ''
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(error => error)) return;

    setLoading(prev => ({ ...prev, submit: true }));
    setTimeout(() => {
      setAlert({ 
        show: true, 
        message: `Registration successful, ${formData.name}!`, 
        severity: 'success' 
      });
      setLoading(prev => ({ ...prev, submit: false }));
    }, 2000);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/919876543210?text=Need%20help%20with%20login`, '_blank');
  };

  return (
    <Box className="redcliffe-login-container">
      <Box className="redcliffe-login-card">
        <Typography variant="h4" className="redcliffe-login-title">
          User Registration
        </Typography>

        {alert.show && (
          <Alert 
            severity={alert.severity} 
            className="redcliffe-alert"
            onClose={() => setAlert({ ...alert, show: false })}
          >
            {alert.message}
          </Alert>
        )}

        <Box 
          component="form" 
          onSubmit={handleSubmit} 
          className="redcliffe-login-form"
        >
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            className="redcliffe-input-field"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person color="primary" />
                </InputAdornment>
              )
            }}
          />

          <TextField
            fullWidth
            label="Mobile Number"
            name="mobile"
            value={formData.mobile}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '').slice(0, 10);
              setFormData(prev => ({ ...prev, mobile: value }));
              if (errors.mobile) setErrors(prev => ({ ...prev, mobile: '' }));
            }}
            error={!!errors.mobile}
            helperText={errors.mobile}
            className="redcliffe-input-field"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone color="primary" />
                </InputAdornment>
              )
            }}
          />

          <TextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            className="redcliffe-input-field"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email color="primary" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    onClick={handleSendOtp}
                    disabled={otpSent || loading.otp}
                    variant="outlined"
                    size="small"
                    className="redcliffe-otp-button"
                  >
                    {loading.otp ? <CircularProgress size={20} /> : 'Send OTP'}
                  </Button>
                </InputAdornment>
              )
            }}
            disabled={otpVerified}
          />

          {otpSent && (
            <TextField
              fullWidth
              label="Enter OTP"
              name="otp"
              value={formData.otp}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                setFormData(prev => ({ ...prev, otp: value }));
                if (errors.otp) setErrors(prev => ({ ...prev, otp: '' }));
              }}
              error={!!errors.otp}
              helperText={errors.otp}
              className="redcliffe-input-field"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="primary" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      onClick={handleVerifyOtp}
                      disabled={otpVerified || !formData.otp || formData.otp.length !== 6}
                      variant="outlined"
                      size="small"
                      color={otpVerified ? 'success' : 'primary'}
                      className="redcliffe-verify-button"
                    >
                      {otpVerified ? 'Verified' : 'Verify'}
                    </Button>
                  </InputAdornment>
                )
              }}
            />
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            disabled={loading.submit || (otpSent && !otpVerified)}
            className="redcliffe-submit-button"
          >
            {loading.submit ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              'Submit'
            )}
          </Button>
        </Box>

        <Divider className="redcliffe-divider" />

        <Box className="redcliffe-help-container">
          <Typography variant="body2" className="redcliffe-help-text">
            Need help?
          </Typography>
          <IconButton 
            onClick={handleWhatsApp} 
            className="redcliffe-whatsapp-button"
          >
            <WhatsApp fontSize="medium" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;