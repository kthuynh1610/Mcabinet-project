import React, { useState } from 'react';
import { Box, Container, Typography, Button, Paper, TextField, Checkbox, FormControlLabel, Grid, Alert, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import openingHour from '../assets/openingHour.jpg';

const SectionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '800px',
  marginTop: theme.spacing(8),
  marginBottom: 0,
  overflow: 'hidden',
}));

const BackgroundImage = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `url(${openingHour})`,
  backgroundSize: '110%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  transform: 'scaleX(-1)',
  zIndex: 0,
}));

const HoursCard = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  right: theme.spacing(10),
  transform: 'translateY(-50%)',
  zIndex: 1,
  backgroundColor: theme.palette.secondary.main,
  padding: theme.spacing(5),
  width: '550px',
  opacity: '90%',
  height: '500px',
  borderRadius: '8px',
  [theme.breakpoints.down('md')]: {
    position: 'relative',
    top: 'auto',
    right: 'auto',
    transform: 'none',
    margin: theme.spacing(4, 2),
    maxWidth: '100%',
  },
}));

const ContactButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  padding: theme.spacing(1.5, 4),
  marginTop: theme.spacing(3),
  fontWeight: 600,
  borderRadius: 10,
  width: '200px',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const HoursItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5, 0),
  borderBottom: '1px solid #35170d',
  '&:last-child': {
    borderBottom: 'none',
  },
}));

const ContactFormCard = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: theme.spacing(10),
  transform: 'translateY(-50%)',
  zIndex: 1,
  backgroundColor: theme.palette.secondary.main,
  padding: theme.spacing(5),
  width: '550px',
  opacity: '90%',
  borderRadius: '8px',
  [theme.breakpoints.down('md')]: {
    position: 'relative',
    top: 'auto',
    left: 'auto',
    transform: 'none',
    margin: theme.spacing(4, 2),
    maxWidth: '100%',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiOutlinedInput-root': {
    color: theme.palette.primary.main,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    '& fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.primary.main,
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.primary.main,
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  padding: theme.spacing(1.5, 4),
  fontWeight: 600,
  borderRadius: 10,
  width: '100%',
  marginTop: theme.spacing(2),
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  '&:disabled': {
    backgroundColor: 'rgba(53, 23, 13, 0.5)',
    color: 'rgba(254, 246, 227, 0.5)',
  },
}));

function OpeningHours() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agree: false,
  });
  
  const [sending, setSending] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'agree' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setAlert({ show: false, type: '', message: '' });

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      message: formData.message,
      to_email: 'info@mcabinetdesign.com.au',
    };

    // Send email using EmailJS
    emailjs
      .send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text);
          setAlert({
            show: true,
            type: 'success',
            message: 'Thank you! Your message has been sent successfully. We will get back to you soon.',
          });
          // Reset form
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            agree: false,
          });
          setSending(false);
        },
        (error) => {
          console.error('Failed to send email:', error);
          setAlert({
            show: true,
            type: 'error',
            message: 'Sorry, something went wrong. Please try again or email us directly at info@mcabinetdesign.com.au',
          });
          setSending(false);
        }
      );
  };
  return (
    <SectionContainer id="contact">
      <BackgroundImage />
      
      {/* Contact Form Card */}
      <ContactFormCard>
        <Typography variant="h1" sx={{ color: 'primary.main', mb: 3 }}>
          Send Us a Message
        </Typography>
        
        {alert.show && (
          <Alert severity={alert.type} sx={{ mb: 2 }}>
            {alert.message}
          </Alert>
        )}
        
        <form onSubmit={handleSubmit}>
          <StyledTextField
            fullWidth
            required
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
          />
          <StyledTextField
            fullWidth
            required
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
          />
          <StyledTextField
            fullWidth
            label="Phone (optional)"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            variant="outlined"
          />
          <StyledTextField
            fullWidth
            required
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            variant="outlined"
            multiline
            rows={3}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
                sx={{
                  color: 'primary.main',
                  '&.Mui-checked': {
                    color: 'primary.main',
                  },
                }}
              />
            }
            label={
              <Typography variant="body2" sx={{ color: 'primary.main', fontSize: '0.875rem' }}>
                I agree to receive a reply and understand my data will be used according to the privacy policy.
              </Typography>
            }
            sx={{ mb: 1, alignItems: 'flex-start' }}
          />
          <SubmitButton 
            type="submit" 
            variant="contained"
            disabled={!formData.agree || sending}
          >
            {sending ? <CircularProgress size={24} sx={{ color: 'secondary.main' }} /> : 'Send Message'}
          </SubmitButton>
        </form>
      </ContactFormCard>

      {/* Opening Hours Card */}
      <HoursCard id="hours-card">
        <Typography variant="h1" sx={{ color: 'primary.main', mb: 1 }}>
          Opening Hours
        </Typography>
        <HoursItem>
        <Typography variant="h2" sx={{ color: 'primary.main', mb: 3, fontWeight: 400 }}>
          Come Visit
        </Typography>
        </HoursItem>
        <Box sx={{ mt: '10px', mb: '10px', pt: '10px' }}>
            <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 500, margin:'10px 10px 15px 0px' }}>
              Mon - Fri: 9am - 6pm
            </Typography>
            <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 500, margin:'10px 10px 15px 0px' }}>
              Sat: 10am - 2pm
            </Typography>
            <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 500, margin:'10px 10px 15px 0px' }}>
              Sun: Closed
            </Typography> 
        </Box>
        
      </HoursCard>
    </SectionContainer>
  );
}

export default OpeningHours;

