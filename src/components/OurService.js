import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import service1 from '../assets/service1.jpg';
import service2 from '../assets/service2.jpg';
import service3 from '../assets/service3.jpg';
import service4 from '../assets/service4.jpg';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 0),
  },
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '350px',
  borderRadius: 0,
  boxShadow: 'none',
  border: 'none',
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const CardImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'relative',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

const CardBottomSection = styled(CardContent)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  background: `linear-gradient(to top, rgba(53, 23, 13, 0.8) 0%, rgba(53, 23, 13, 0.1) 100%)`,
  color: '#ffffff',
  padding: theme.spacing(2, 2),
  display: 'flex',
  flexDirection: 'column',
}));

const ArrowButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#ffffff',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  width: '40px',
  height: '40px',
}));

const services = [
  {
    number: '01',
    title: 'Excellent Design',
    subtitle: 'Satisfaction Guaranteed',
    image: service1,
  },
  {
    number: '02',
    title: 'Professional',
    subtitle: 'Here For You',
    image: service2,
  },
  {
    number: '03',
    title: 'Fast Planning',
    subtitle: 'Next Level Service',
    image: service3,
  },
  {
    number: '04',
    title: 'Cost Effective',
    subtitle: 'Outstanding Products',
    image: service4,
  },
];

function OurService() {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4} mb={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={5}>
            <Typography variant="h2" sx={{ color: 'primary.main', mb: 1 }}>
              Our Service
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="body1" sx={{ mb: 2, fontSize: '1.05rem', lineHeight: 1.8, color:'primary.main' }}>
              M Cabinet Design work with high-end builders has earned us a reputation for excellence and distinctive custom designed and made cabinetry.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.05rem', lineHeight: 1.8,  color:'primary.main' }}>
              We are delighted to work with your existing plans and drawings or come on-site to measure up and discuss ideas for designs, as well as budgets and timelines, with you.
            </Typography>
          </Grid>
        </Grid>
        <Box>
          <Grid container spacing={{ xs: 3, sm: 4, md: 4 }}>
            {services.map((service, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <ServiceCard>
                  <CardImage>
                    <LazyLoadImage 
                      src={service.image} 
                      effect="blur" 
                      alt={service.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </CardImage>
                  <CardBottomSection>
                    <Typography variant="caption" sx={{ color: '#ffffff', fontWeight: 600, fontSize: '0.85rem', mb: 0.5 }}>
                      {service.number}
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#ffffff', mt: 0.5, mb: 0.5, fontWeight: 600 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#ffffff', fontSize: '0.875rem', opacity: 0.9 }}>
                      {service.subtitle}
                    </Typography>
                  </CardBottomSection>
                </ServiceCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </SectionContainer>
  );
}

export default OurService;

