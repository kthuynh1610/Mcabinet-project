import React from 'react';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import openingHour from '../assets/openingHour.jpg';

const SectionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '700px',
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
  right: theme.spacing(4),
  transform: 'translateY(-50%)',
  zIndex: 1,
  backgroundColor: theme.palette.secondary.main,
  padding: theme.spacing(5),
  width: '450px',
  opacity: '90%',
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
  textTransform: 'uppercase',
  fontWeight: 600,
  borderRadius: 0,
  width: '100%',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const HoursItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5, 0),
  borderBottom: '1px solid rgba(0,0,0,0.1)',
  '&:last-child': {
    borderBottom: 'none',
  },
}));

function OpeningHours() {
  return (
    <SectionContainer id="contact">
      <BackgroundImage />
      <HoursCard id="hours-card">
        <Typography variant="h4" sx={{ color: 'primary.main', mb: 1 }}>
          Opening Hours
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'primary.main', mb: 3, fontWeight: 400 }}>
          Come Visit
        </Typography>
        <Box>
          <HoursItem>
            <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 500 }}>
              Mon - Fri: 9am - 6pm
            </Typography>
          </HoursItem>
          <HoursItem>
            <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 500 }}>
              Sat: 10am - 2pm
            </Typography>
          </HoursItem>
          <HoursItem>
            <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 500 }}>
              Sun: Closed
            </Typography>
          </HoursItem>
        </Box>
        <ContactButton variant="contained">
          Contact Us
        </ContactButton>
      </HoursCard>
    </SectionContainer>
  );
}

export default OpeningHours;

