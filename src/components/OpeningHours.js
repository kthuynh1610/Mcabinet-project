import React from 'react';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
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

function OpeningHours() {
  return (
    <SectionContainer id="contact">
      <BackgroundImage />
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
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <ContactButton>
            Contact Us
          </ContactButton>
        </Box> 
      </HoursCard>
    </SectionContainer>
  );
}

export default OpeningHours;

