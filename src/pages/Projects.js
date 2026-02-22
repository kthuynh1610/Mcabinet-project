import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';
import heroBackground from '../assets/background1.jpg';

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
  marginBottom: theme.spacing(8),
  [theme.breakpoints.down('md')]: {
    height: '300px',
    paddingTop: '70px',
    marginBottom: theme.spacing(6),
  },
}));

const CategoryTabs = styled(Tabs)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  borderBottom: `2px solid ${theme.palette.primary.main}`,
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.primary.main,
    height: '3px',
  },
}));

const CategoryTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 600,
  fontSize: '1rem',
  textTransform: 'none',
  minWidth: 'auto',
  padding: theme.spacing(2, 3),
  '&.Mui-selected': {
    color: theme.palette.primary.main,
  },
  '&:hover': {
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875rem',
    padding: theme.spacing(1.5, 2),
  },
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
  },
}));

function Projects() {
  const navigate = useNavigate();
  
  // Categories for filtering
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'kitchen-living', label: 'Kitchen & Living' },
    { id: 'bathroom', label: 'Bathroom' },
    { id: 'laundry', label: 'Laudries' },
    { id: 'wardrobe', label: 'Wardrobes' },
    { id: 'study', label: 'Projects & Study Station' },
    { id: 'storage', label: 'Storage' },
  ];

  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  // Load projects from JSON file
  useEffect(() => {
    fetch('/data/projects.json')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading projects:', error);
        setLoading(false);
      });
  }, []);

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  if (loading) {
    return (
      <Box sx={{ minHeight: '80vh', pt: { xs: '100px', md: '140px' }, pb: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ color: 'primary.main', textAlign: 'center' }}>
            Loading projects...
          </Typography>
        </Container>
      </Box>
    );
  }

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
          Projects
        </Typography>
      </HeroSection>

      {/* Projects Content */}
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        {/* Category Filter Tabs */}
        <CategoryTabs
          value={selectedCategory}
          onChange={handleCategoryChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
        >
          {categories.map((category) => (
            <CategoryTab
              key={category.id}
              label={category.label}
              value={category.id}
            />
          ))}
        </CategoryTabs>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <ProjectCard onClick={() => handleProjectClick(project.id)}>
                  <CardMedia
                    component="div"
                    sx={{
                      height: 250,
                      backgroundColor: 'grey.300',
                      backgroundImage: project.images && project.images[0] ? `url(${project.images[0]})` : 'none',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {(!project.images || !project.images[0]) && (
                      <Typography variant="body2" sx={{ color: 'grey.600' }}>
                        Project Image
                      </Typography>
                    )}
                  </CardMedia>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: 'primary.main',
                        mb: 1,
                        fontWeight: 600,
                        fontSize: '1.25rem',
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                      {new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                    </Typography>
                  </CardContent>
                </ProjectCard>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Box sx={{ textAlign: 'center', py: 8 }}>
                <Typography variant="h4" sx={{ color: 'text.secondary' }}>
                  No projects found in this category
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>

        {/* Total Projects Count */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.label}`}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Projects;

