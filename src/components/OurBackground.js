import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import background1 from '../assets/background1.jpg';
import background2 from '../assets/background2.jpg';
import background3 from '../assets/background3.jpg';
import background4 from '../assets/background4.jpg';

const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#fef6e3',
  padding: theme.spacing(8, 0),
}));

const ImageGridContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '650px',
  display: 'grid',
  gridTemplateColumns: 'repeat(10, 1fr)',
  gridTemplateRows: 'repeat(10, 1fr)',
  gap: theme.spacing(2),
}));

const BackgroundImage = styled(Box)(({ theme, imageUrl }) => ({
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: '4px',
}));

// Top-left image (small vertical)
const Image1 = styled(BackgroundImage)({
  gridColumn: '1 / 4',
  gridRow: '1 / 4',
});

// Top-right/Middle large image (horizontal)
const Image2 = styled(BackgroundImage)({
  gridColumn: '4 / 11',
  gridRow: '1 / 5',
});

// Bottom large image (horizontal)
const Image3 = styled(BackgroundImage)({
  gridColumn: '1 / 8',
  gridRow: '5 / 11',
});

// Bottom-right small image (vertical)
const Image4 = styled(BackgroundImage)({
  gridColumn: '8 / 11',
  gridRow: '5 / 11',
});

const ViewProjectButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  padding: theme.spacing(1.5, 4),
  marginTop: theme.spacing(3),
  textTransform: 'uppercase',
  fontWeight: 600,
  borderRadius: 0,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

function OurBackground() {
  return (
    <SectionContainer id="our-background">
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <ImageGridContainer>
              <Image1 imageUrl={background1} />
              <Image2 imageUrl={background2} />
              <Image3 imageUrl={background3} />
              <Image4 imageUrl={background4} />
            </ImageGridContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: '2px', fontSize:'1.25rem' }}>
              M CABINET DESIGN
            </Typography>
            <Typography variant="h2" sx={{ color: 'primary.main', mb: 3, mt: 1 }}>
              Our Background
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.8,  color: 'primary.main' }}>
              Since being established in 2009, Mdesign&Joinery has been known for an unparalleled commitment to customer satisfaction. It's this standard of excellence that has provided the impetus for us to grow into the business we are today. For more information about the products and services we provide, reach out today.
            </Typography>
            <ViewProjectButton variant="contained">
              View Project
            </ViewProjectButton>
          </Grid>
        </Grid>
      </Container>
    </SectionContainer>
  );
}

export default OurBackground;