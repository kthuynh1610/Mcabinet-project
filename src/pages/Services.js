import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import serviceHeroImg from '../assets/background2.jpg';
import serviceMainImg from '../assets/service1.jpg';
import technologyImg from '../assets/service2.jpg';
import ctaBackground from '../assets/background3.jpg';

const HeroSection = styled(Box)(({ theme }) => ({
  height: '450px',
  position: 'relative',
  paddingTop: '100px',
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${serviceHeroImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'center',
  marginBottom: theme.spacing(8),
  [theme.breakpoints.down('md')]: {
    height: '300px',
    paddingTop: '70px',
    marginBottom: theme.spacing(6),
  },
}));

const ServiceNumber = styled(Typography)(({ theme }) => ({
  fontSize: '5rem',
  fontWeight: 700,
  color: theme.palette.primary.main,
  lineHeight: 1,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    fontSize: '4rem',
  },
}));

const TimelineContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '120px',
    left: '11.5%',
    right: '11.5%',
    height: '1px',
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

const ServiceCard = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '83px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '11px',
    height: '11px',
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

const CTASection = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '500px',
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${ctaBackground})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    minHeight: '400px',
  },
}));

const CTAButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  padding: '16px 48px',
  fontSize: '1.1rem',
  fontWeight: 600,
  borderRadius: '50px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  [theme.breakpoints.down('md')]: {
    padding: '14px 40px',
    fontSize: '1rem',
  },
}));

function Services() {
  const navigate = useNavigate();
  const services = [
    {
      number: '01',
      title: 'Exclusive Kitchens',
      description: 'Appliance supply, renovation and upgrades',
    },
    {
      number: '02',
      title: 'Luxury Bathrooms',
      description: 'Renovations and upgrades',
    },
    {
      number: '03',
      title: 'Home Offices',
      description: 'Home offices and custom made workstations',
    },
    {
      number: '04',
      title: 'Laundry Designs',
      description: 'Laundry designs with intelligent storage solutions',
    },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <HeroSection>
        <Typography
          variant="h1"
          sx={{
            color: 'secondry.main',
            fontSize: { xs: '3rem', md: '5rem' },
            fontWeight: 700,
          }}
        >
          Service
        </Typography>
      </HeroSection>

      {/* Our Service Section */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{ color: 'primary.main', mb: 3, fontWeight: 700 }}
            >
              Our Service
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: 'text.secondary', mb: 3, fontWeight: 400 }}
            >
              Here's What We Provide
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', mb: 3 }}
            >
              M Design Cabinet has earned its positive reputation because we go
              out of our way to provide truly exceptional service to each of our
              customers.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', lineHeight: 1.8 }}
            >
              We understand your needs, and we're making sure that we deliver
              our services to meet your expectation.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={serviceMainImg}
              alt="Modern Kitchen"
              sx={{
                width: '90%',
                height: '250px',
                objectFit: 'cover',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Service Items Timeline */}
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <TimelineContainer>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <ServiceCard>
                  <ServiceNumber>{service.number}</ServiceNumber>
                  <dot/>
                  <Typography
                    variant="h4"
                    sx={{
                      color: 'primary.main',
                      mb: 1,
                      mt: 3,
                      fontWeight: 600,
                      fontSize: { xs: '1rem', md: '1.5rem', lg: '1.1rem' },
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      fontSize: {  xs: '0.95rem', md: '1rem', lg: '0.9rem' },
                    }}
                  >
                    {service.description}
                  </Typography>
                </ServiceCard>
              </Grid>
            ))}
          </Grid>
        </TimelineContainer>
      </Container>

      {/* Technology & Materials Section */}
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={technologyImg}
              alt="Material Selection"
              sx={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{ 
                color: 'primary.main', 
                mb: 3, 
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              Technology & Materials
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', mb: 3 }}
            >
              We have extensive knowledge of all types of materials and their
              compatibility for high end joinery finishes – including laminate,
              vinyl wrap, 2 pac, veneers both natural and man made, natural
              stone, reconstituted stone, stainless steel, plywood and solid
              timber.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary' }}
            >
              We computer model so that we can show clients a 3D presentation of
              designs as they will look installed, then do a final check on-site
              to measure again and finalise colours, materials and finishes..
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <CTASection>
        <Box sx={{ textAlign: 'center', maxWidth: '900px', mx: 'auto', px: 2 }}>
          <Typography
            variant="h2"
            sx={{
              color: 'secondary.main',
              mb: 4,
              fontWeight: 700,

              fontSize: { xs: '1.75rem', md: '2.5rem', lg: '2.5rem' },
              lineHeight: 1.3,
            }}
          >
            Want To Know More About Our Services?
            <br />
            Contact Us Today
          </Typography>
          <CTAButton
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const footer = document.getElementById('contact');
                if (footer) {
                  footer.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
          >
            Contact Us
          </CTAButton>
        </Box>
      </CTASection>
    </Box>
  );
}

export default Services;

