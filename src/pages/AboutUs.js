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
              Since being established in 2009, M Design Cabinet has been known
              for an unparalleled commitment to customer satisfaction. It's this
              standard of excellence that has provided the impetus for us to grow
              into the business we are today.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'primary.main', mb: 4, fontSize: '1.05rem' }}
            >
              Bespoke joinery solutions for high end builders, architects &
              interior designers. Based in Melbourne we are sophisticated cabinet
              makers and joiners working with residential, commercial clients. We
              combine traditional craftsmanship, modern materials and contemporary
              design with expert technology to achieve high-end results.
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
            height: '450px', 
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
                  height: '550px',
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
                No matter how big or small your idea may be, we can guide or assist
                you through the entire process from start to finish. We make
                everything from scratch to extremely high standards and the team at
                Mdesign Interiors have many years experience in all facets of
                joinery and cabinet making.
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
                The Difference
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'primary.main', fontSize: '1.05rem' }}
              >
                We communicate openly, have great, up-to-the-minute design ideas,
                quote fairly, re-quote and negotiate co-operatively and suggest ways
                for clients to save money if budget is an issue. We are happy to
                make appointments outside office hours and be flexible to meet the
                needs of clients and industry partners.
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
                Quality & Technology
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'primary.main', fontSize: '1.05rem' }}
              >
                We work with the very highest quality materials available and have
                strong relationships with our suppliers, creating beautiful end
                results with traditional, contemporary or unusual materials.
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

