import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import heroBackground from '../assets/background4.jpg';
import aboutImage from '../assets/service1.jpg';
import whyChooseUsImage from '../assets/aboutUs1.jpg';
import ctaBackground from '../assets/background1.jpg';

const HeroSection = styled(Box)(({ theme }) => ({
  height: '450px',
  position: 'relative',
  paddingTop: '100px',
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBackground})`,
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

const CTASection = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '700px',
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

const ContactButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  padding: '14px 40px',
  fontSize: '1rem',
  fontWeight: 600,
  borderRadius: '4px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  [theme.breakpoints.down('md')]: {
    padding: '12px 32px',
    fontSize: '0.95rem',
  },
}));

function AboutUs() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      const footer = document.getElementById('contact');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <HeroSection>
        <Typography
          variant="h1"
          sx={{
            color: 'secondary.main',
            fontSize: { xs: '3rem', md: '5rem' },
            fontWeight: 700,
          }}
        >
          About Us
        </Typography>
      </HeroSection>

      {/* Who We Are Section */}
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{ color: 'primary.main', mb: 4, fontWeight: 700 }}
            >
              Who we are
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'primary.main', mb: 3, fontSize: '1.05rem' }}
            >
              MCabinetDesign is a premium cabinetry and joinery studio based in Melbourne, specialising in bespoke solutions for high-end residential and commercial projects.
              Founded in 2009, our journey began as a small workshop with a passion for craftsmanship, quality and attention to detail. Over the years, through consistent excellence and trusted relationships with builders, architects, and interior designers, we have grown into MCabinetDesign — a brand recognised for delivering sophisticated, tailored joinery across Melbourne.
            </Typography>
           
            <ContactButton onClick={handleContactClick}>
              Contact Us
            </ContactButton>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={aboutImage}
              alt="Modern Kitchen Design"
              sx={{
                width: '100%',
                height: '450px',
                objectFit: 'cover',
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Why Choose Us Section */}
      <Box sx={{ position: 'relative', pb: 10, mb: 8 }}>
        {/* Full-width Background Box */}
        <Box 
          sx={{ 
            bgcolor: '#fff0d0', 
            height: '550px', 
            position: 'absolute',
            top: '100px',
            left: 0,
            right: 0,
            width: '100%',
            zIndex: 0
          }}
        />
        
        {/* Content on top */}
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center" sx={{ position: 'relative', zIndex: 1 }}>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={whyChooseUsImage}
                alt="Modern Kitchen Interior"
                sx={{
                  width: '100%',
                  height: '650px',
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
                Why Choose Us?
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'primary.main', fontSize: '1.05rem' }}
              >
                Comprehensive Service
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'primary.main', fontSize: '1.05rem' }}
              >
                We guide every project from initial concept to final installation, making the process seamless for clients and project teams alike. Our experienced designers and craftsmen can work with your plans or develop solutions from scratch.
                Trusted by Professionals
                <Typography
                variant="body1"
                sx={{ color: 'primary.main', fontSize: '1.05rem' }}
              >
                We have established strong relationships with premium builders, architects, and interior designers. Our clients rely on us to deliver realistic timelines, high-quality results, and expert guidance on design, functionality, and material selection.
                Transparent Communication
                </Typography>
                <Typography
                variant="body1"
                sx={{ color: 'primary.main', fontSize: '1.05rem' }}
              >
                We provide clear quotations, re-quote as needed, and suggest cost-saving alternatives if required. We are flexible with appointments and always aim to meet the unique needs of our clients and partners.
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* The Difference & Quality Section */}
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <Box sx={{ position: 'relative' }}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                sx={{ 
                  color: 'primary.main', 
                  mb: 3, 
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '2.5rem' }
                }}
              >
                Design & Technology
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'primary.main', fontSize: '1.05rem' }}
              >
                At MCabinetDesign, we combine traditional craftsmanship with cutting-edge technology:
                </Typography>
                <Typography
                variant="body1"
                sx={{ color: 'primary.main', fontSize: '1.05rem' }}
              >
                •	Advanced CNC machinery for precision manufacturing
                </Typography>
                <Typography
                variant="body1"
                sx={{ color: 'primary.main', fontSize: '1.05rem' }}
              >
                •	AutoCAD and AutoKitchen 3D design for accurate planning and visualization
                Our designers work collaboratively to ensure every space is optimised for workflow, storage, and aesthetics.
              </Typography>
            </Grid>
            
            {/* Centered Vertical Divider */}
            <Box 
              sx={{ 
                display: { xs: 'none', md: 'block' },
                position: 'absolute',
                left: '49%',
                marginTop: '30px',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '1px',
                height: '220px',
                bgcolor: 'primary.main'
              }}
            />
            
            <Grid item xs={12} md={6} sx={{ pl: { xs: 0, md: 6 } }}>
              <Typography
                variant="h1"
                sx={{ 
                  color: 'primary.main', 
                  mb: 3, 
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '2.5rem' }
                }}
              >
                Quality Materials
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'primary.main', fontSize: '1.05rem' }}
              >
               We use only premium materials sourced from trusted suppliers, including:
                •	Laminates, vinyl wraps, 2-Pac finishes
                </Typography>
                <Typography
                variant="body1"
                sx={{ color: 'primary.main', fontSize: '1.05rem' }}
              >
                •	Natural and engineered veneers
                </Typography>
                <Typography
                variant="body1"
                sx={{ color: 'primary.main', fontSize: '1.05rem' }}
              >
                •	Solid timber and plywood
                </Typography>
                <Typography
                variant="body1"
                sx={{ color: 'primary.main', fontSize: '1.05rem' }}
              >
                •	Natural and reconstituted stone
                </Typography>
                <Typography
                variant="body1"
                sx={{ color: 'primary.main', fontSize: '1.05rem' }}
              >
                •	Stainless steel
                </Typography>
                <Typography
                variant="body1"
                sx={{ color: 'primary.main', fontSize: '1.05rem' }}
              >
                Where possible, we incorporate environmentally sustainable materials and eco-conscious design practices.
                </Typography>
             
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Call to Action Section */}
      <CTASection>
        <Box sx={{ textAlign: 'center', maxWidth: '900px', mx: 'auto', px: 2 }}>
          <Typography
            variant="h1"
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

export default AboutUs;

