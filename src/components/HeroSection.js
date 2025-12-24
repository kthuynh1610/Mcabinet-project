import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import header from '../assets/header.png';
const HeroContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '800px',
  width: '100%',
  overflow: 'hidden',
  backgroundColor: 'transparent',
  [theme.breakpoints.down('md')]: {
    minHeight: '600px',
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: '500px',
  },
}));

const ImageBackground = styled(Box)(({ theme, imageUrl }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  width:'100%',
  height: '850px',
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  zIndex: 2,
  [theme.breakpoints.down('md')]: {
    height: '600px',
    backgroundPosition: 'center center',
  },
  [theme.breakpoints.down('sm')]: {
    height: '500px',
  },
}));

const TextOverlay = styled(Box)(({ theme, imageUrl }) => ({
  position: 'absolute',
  padding: theme.spacing(8, 6),
  display: 'flex',
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor:'transparent',
  color: '#ffffff',
  width: '50%',
  minHeight: '800px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: theme.spacing(6, 4),
    minHeight: '600px',
    backgroundColor: 'rgba(53, 23, 13, 0.7)', // Add overlay for mobile readability
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 3),
    minHeight: '500px',
  },
}));

const ViewProjectButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  padding: theme.spacing(1.5, 4),
  marginTop: theme.spacing(3),
  fontWeight: 600,
  borderRadius: '4px',
  alignSelf: 'flex-start',
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
}));

function HeroSection() {
  return (
    <HeroContainer id="top">
        {/* <ImageBackground imageUrl={header} /> */}
        {/* <Box sx={{ 
          zIndex: 0,
          padding: 'theme.spacing(8, 6)',
        position:'absolute',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#35170d',
          color: '#ffffff',
          width: '50%',
          minHeight: '800px',
          ["theme.breakpoints.down('md')"]: {
            width: '100%',
          }
           }}/> */}
        <ImageBackground imageUrl={header}>
        <TextOverlay imageUrl={header}>
          <Typography 
            sx={{ 
              mb: 2, 
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 900,
              color: 'secondary.main'
            }}
          >
            M CABINET DESIGN
          </Typography>
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 4, 
              fontWeight: 700, 
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              letterSpacing: '1px',
              color: 'secondary.main'
            }}
          >
            WELCOMES YOU
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 4, 
              fontSize: '1.1rem',
              maxWidth: '90%',
              color: 'secondary.main'
            }}
          >
            Since opening in 2009, Mdesign&Joinery has been proud to serve the Victorian community. We're committed to not only providing quality products and services, but going above and beyond to ensure our customers are completely satisfied. We welcome you to look through our site to see all we have to offer.
          </Typography>
        </TextOverlay>
        </ImageBackground>
        
    </HeroContainer>
  );
}

export default HeroSection;

