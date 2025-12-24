import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo2 from '../assets/MCabinet-2.png';

const FooterContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
  padding: theme.spacing(6, 0, 2),
  color: '#ffffff',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 0, 2),
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent:'center',
  height:'100%',
  gap: '24px',
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(3),
  },
}));

const LogoIcon = styled(Box)(({ theme }) => ({
  width: '40px',
  height: '40px',
  backgroundColor: theme.palette.secondary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  fontSize: '24px',
  fontWeight: 'bold',
  color: theme.palette.primary.main,
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(2.5),
}));

const SocialIcon = styled(Box)(({ theme }) => ({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  border: '2px solid #ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#ffffff',
    color: theme.palette.primary.main,
  },
}));

function Footer() {
  return (
    <FooterContainer id="contact">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <LogoContainer>
              <img 
                src={logo2} 
                style={{ 
                  maxHeight: '120px', 
                  height: 'auto',
                  maxWidth: '100%'
                }} 
                alt="M Cabinet Design" 
              />
            </LogoContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h2" 
              sx={{ 
                color: 'secondary.main', 
                mb: 3, 
                fontWeight: 600,
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              Get In Touch
            </Typography>
            <ContactItem>
              <LocationOnIcon sx={{ color: 'secondary.main', mt: 0.5, flexShrink: 0 }} />
              <Typography variant="body1" sx={{ color: 'secondary.main', lineHeight: 1.8 }}>
                03 Balcombe St Sunshine North Vic 3020
              </Typography>
            </ContactItem>
            <ContactItem>
              <EmailIcon sx={{ color: 'secondary.main', mt: 0.5, flexShrink: 0 }} />
              <Typography variant="body1" sx={{ color: 'secondary.main', lineHeight: 1.8 }}>
                justav4m@hotmail.com
              </Typography>
            </ContactItem>
            <ContactItem>
              <PhoneIcon sx={{ color: 'secondary.main', mt: 0.5, flexShrink: 0 }} />
              <Typography variant="body1" sx={{ color: 'secondary.main', lineHeight: 1.8 }}>
                +61 433 131 290
              </Typography>
            </ContactItem>
            <Box sx={{ display: 'flex', gap: 2, mt: 3, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <SocialIcon>
                <FacebookIcon />
              </SocialIcon>
              <SocialIcon>
                <TwitterIcon />
              </SocialIcon>
              <SocialIcon>
                <LinkedInIcon />
              </SocialIcon>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 4, pt: 3, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Typography variant="body2" sx={{ color: '#ffffff', opacity: 0.8 }}>
            ©2025 by M Cabinet Design
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
}

export default Footer;

