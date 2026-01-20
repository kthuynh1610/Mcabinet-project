import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Grid, IconButton, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const HeroSection = styled(Box)(({ theme }) => ({
  paddingTop: '140px',
  paddingBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down('md')]: {
    paddingTop: '100px',
  },
}));

const ImageGallery = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(6),
}));

const MainImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '750px',
  backgroundColor: 'grey.300',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    height: '350px',
  },
}));

const ThumbnailGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const ThumbnailImage = styled(Box)(({ theme, active }) => ({
  width: '100%',
  height: '150px',
  backgroundColor: 'grey.300',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  cursor: 'pointer',
  border: active ? `3px solid ${theme.palette.primary.main}` : '3px solid transparent',
  transition: 'all 0.3s ease',
  '&:hover': {
    border: `3px solid ${theme.palette.primary.main}`,
    transform: 'scale(1.02)',
  },
  [theme.breakpoints.down('md')]: {
    height: '100px',
  },
}));

const BackButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  marginBottom: theme.spacing(4),
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    // Load project data from JSON
    fetch('/data/projects.json')
      .then(res => res.json())
      .then(data => {
        const foundProject = data.find(p => p.id === parseInt(id));
        setProject(foundProject);
      })
      .catch(error => console.error('Error loading project:', error));
  }, [id]);

  if (!project) {
    return (
      <Box sx={{ minHeight: '80vh', pt: { xs: '100px', md: '140px' }, pb: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ color: 'primary.main' }}>
            Loading project...
          </Typography>
        </Container>
      </Box>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <HeroSection>
        <Container maxWidth="lg">
          <BackButton
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/projects')}
          >
            Back to Projects
          </BackButton>

          <Typography
            variant="h1"
            sx={{
              color: 'primary.main',
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            {project.title}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 6 }}>
            <CalendarTodayIcon sx={{ color: 'text.secondary', fontSize: '1.2rem' }} />
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              {formatDate(project.date)}
            </Typography>
          </Box>

          {/* Image Gallery */}
          <ImageGallery>
            {/* Main Image */}
            <MainImage
              sx={{
                backgroundImage: project.images && project.images[selectedImage] 
                  ? `url(${project.images[selectedImage]})` 
                  : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {(!project.images || !project.images[selectedImage]) && (
                <Typography variant="body2" sx={{ color: 'grey.600' }}>
                  Project Image {selectedImage + 1}
                </Typography>
              )}
            </MainImage>

            {/* Thumbnail Grid */}
            {project.images.length > 1 && (
              <ThumbnailGrid container spacing={2}>
                {project.images.map((image, index) => (
                  <Grid item xs={4} sm={3} md={2} key={index}>
                    <ThumbnailImage
                      active={selectedImage === index}
                      onClick={() => setSelectedImage(index)}
                      sx={{
                        backgroundImage: image ? `url(${image})` : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      {!image && (
                        <Typography variant="caption" sx={{ color: 'grey.600' }}>
                          {index + 1}
                        </Typography>
                      )}
                    </ThumbnailImage>
                  </Grid>
                ))}
              </ThumbnailGrid>
            )}
          </ImageGallery>

          {/* Project Details */}
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h3"
              sx={{
                color: 'primary.main',
                mb: 3,
                fontWeight: 600,
              }}
            >
              Project Details
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h4" sx={{ color: 'primary.main', mb: 1, fontSize: '1.1rem' }}>
                  Category
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
                  {project.category}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h4" sx={{ color: 'primary.main', mb: 1, fontSize: '1.1rem' }}>
                  Completion Date
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  {formatDate(project.date)}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </HeroSection>
    </Box>
  );
}

export default ProjectDetail;

