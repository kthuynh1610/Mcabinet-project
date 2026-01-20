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
    left: '15.5%',
    right: '15.5%',
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
      title: 'Kitchens',
      description: 'Custom designer kitchens, renovations, and appliance integration',
    },
    {
      number: '02',
      title: 'Bathrooms',
      description: 'Luxury bathroom joinery and vanity units',
    },
    {
      number: '03',
      title: 'Laundry & Utility',
      description: 'Intelligent storage and workspace solutions',
    },
    {
      number: '04',
      title: 'Bedrooms & Wardrobes',
      description: 'Walk-in and built-in wardrobes',
    },
    {
      number: '05',
      title: 'Living & Home Office',
      description: 'Home offices and bespoke workstations',
    },
    {
      number: '06',
      title: 'Outdoor & Specialty',
      description: 'BBQ and outdoor kitchens',
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
              Bespoke Joinery & Cabinetry
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}
            >
              We specialise in custom joinery solutions for high-end projects, 
              combining cutting-edge technology, premium materials, and expert 
              craftsmanship. Our team can work with your existing plans, or we 
              can come onsite to measure, consult, and advise on design, budget, 
              and timelines.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', lineHeight: 1.8 }}
            >
              We design, manufacture, and install cabinetry that is truly unique, 
              tailored to your space and lifestyle.
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
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
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
              Materials & Technology
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}
            >
              We use premium materials suited for high-end finishes, including 
              laminates, vinyl wrap, and 2-Pac; natural and engineered veneers; 
              solid timber and plywood; natural and reconstituted stone; and 
              stainless steel with modern hardware.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', lineHeight: 1.8 }}
            >
              Our design process is technology-driven, using 3D computer modelling 
              to show exactly how your cabinetry will look once installed. We verify 
              measurements onsite to finalise materials, colours, and finishes, 
              ensuring a flawless outcome.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Our Services Include - Detailed Section */}
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <Typography
          variant="h2"
          sx={{ color: 'primary.main', mb: 5, fontWeight: 700, textAlign: 'center' }}
        >
          Our Services Include
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
              Kitchens
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>
              • Custom designer kitchens, renovations, and upgrades<br />
              • Appliance supply and integration<br />
              • Premium benchtops: Marble, Caesarstone, and other high-end surfaces<br />
              • Functional and stylish layouts for modern living
            </Typography>

            <Typography variant="h4" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
              Bathrooms
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>
              • Luxury bathroom joinery and vanity units<br />
              • Renovations, upgrades, and bespoke storage solutions
            </Typography>

            <Typography variant="h4" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
              Laundry & Utility Spaces
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>
              • Intelligent storage and workspace solutions<br />
              • Custom cabinets and benchtops for functional living
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
              Bedrooms & Wardrobes
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>
              • Walk-in and built-in wardrobes<br />
              • Custom bedroom cabinetry designed for lifestyle and organisation
            </Typography>

            <Typography variant="h4" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
              Living & Home Office
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>
              • Home offices and bespoke workstations<br />
              • Entertainment units, shelving, and wall units<br />
              • Innovative storage solutions for living spaces
            </Typography>

            <Typography variant="h4" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
              Outdoor & Specialty Joinery
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>
              • BBQ and outdoor kitchens<br />
              • Indoor/outdoor rooms and bespoke cabinetry<br />
              • Solid timber detailing for luxury finishes
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Our Process Section */}
      <Box sx={{ bgcolor: '#fff0d0', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{ color: 'primary.main', mb: 5, fontWeight: 700, textAlign: 'center' }}
          >
            Our Process
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
                Consultation & Concept Design
              </Typography>
              <Typography variant="body1" sx={{ color: 'primary.main', lineHeight: 1.8 }}>
                We learn about your style, needs, and how you use your space.
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="h4" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
                3D Design & Planning
              </Typography>
              <Typography variant="body1" sx={{ color: 'primary.main', lineHeight: 1.8 }}>
                We create detailed 3D visuals to help you visualise the finished project.
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="h4" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
                Manufacturing
              </Typography>
              <Typography variant="body1" sx={{ color: 'primary.main', lineHeight: 1.8 }}>
                Precision CNC machinery ensures high-quality, bespoke cabinetry.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
                Installation
              </Typography>
              <Typography variant="body1" sx={{ color: 'primary.main', lineHeight: 1.8 }}>
                On time, with meticulous attention to finish.
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
                Follow-Up
              </Typography>
              <Typography variant="body1" sx={{ color: 'primary.main', lineHeight: 1.8 }}>
                We work with you and your project team to ensure the final result meets your expectations.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Why Work With Us Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography
          variant="h2"
          sx={{ color: 'primary.main', mb: 5, fontWeight: 700, textAlign: 'center' }}
        >
          Why Work With Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.8 }}>
              • Bespoke, high-end joinery tailored to your space and lifestyle
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.8 }}>
              • Expert advice on design, materials, and functionality
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.8 }}>
              • Collaborative approach with builders, architects, and interior designers
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.8 }}>
              • Flexible and reliable service to suit your schedule
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.8 }}>
              • Commitment to quality, craftsmanship, and premium finishes
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.8 }}>
              • We don't just make cabinets — we create spaces that enhance the way you live
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

