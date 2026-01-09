import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function Projects() {
  return (
    <Box sx={{ minHeight: '80vh', pt: { xs: '100px', md: '140px' }, pb: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h1" sx={{ color: 'primary.main', mb: 4 }}>
          Projects
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
          Content coming soon...
        </Typography>
      </Container>
    </Box>
  );
}

export default Projects;

