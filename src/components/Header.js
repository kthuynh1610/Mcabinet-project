import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import logo from '../assets/Mcabinet.png'
const StyledAppBar = styled(AppBar)(({ theme, isOverHero }) => ({
  backgroundColor: isOverHero ? 'transparent' : theme.palette.primary.main,
  boxShadow: 'none',
  position: 'absolute',
  top: 0,
  zIndex: theme.zIndex.appBar,
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
}));

const LogoIcon = styled(Box)(({ theme, imageUrl }) => ({
  width: '56px',
  height: '56px',
  backgroundColor: theme.palette.secondary.main,
  display: 'flex',
  alignItems: 'center',
  backgroundImage: `url(${imageUrl})`,
  justifyContent: 'center',
  borderRadius: '4px',
  fontSize: '32px',
  fontWeight: 'bold',
  color: theme.palette.primary.main,
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#ffffff',
  textTransform: 'uppercase',
  fontWeight: 500,
  fontSize: '1rem',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

function Header() {
  const [isOverHero, setIsOverHero] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('top');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const heroBottom = heroRect.bottom;
        // Check if we're still within the hero section (with a small buffer)
        setIsOverHero(heroBottom > 0);
      }
    };

    // Check initial position
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    setMobileOpen(false); // Close mobile menu when navigating
    
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'contact') {
      // Special handling for contact - scroll to center the hours card
      const card = document.getElementById('hours-card');
      if (card) {
        const cardRect = card.getBoundingClientRect();
        const cardTop = cardRect.top + window.pageYOffset;
        const cardHeight = cardRect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll position to center the card vertically
        const scrollPosition = cardTop - (windowHeight / 2) + (cardHeight / 2);
        
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
      }
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 100; // Approximate header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleLogoClick = () => {
    scrollToSection('top');
  };

  const menuItems = [
    { label: 'HOME', onClick: () => scrollToSection('top') },
    { label: 'ABOUT US', onClick: () => scrollToSection('our-background') },
    { label: 'SERVICES', onClick: () => {} },
    { label: 'BLOG', onClick: () => {} },
    { label: 'CONTACT', onClick: () => scrollToSection('contact') },
  ];

  return (
    <>
      <StyledAppBar isOverHero={isOverHero}>
        <Toolbar sx={{ justifyContent: 'space-between', py: 2.5, minHeight: { xs: '70px', md: '100px' }, px: { xs: 2, md: 3 } }}>
          <LogoContainer onClick={handleLogoClick} sx={{ cursor: 'pointer', ml: { xs: 0, md: '20px' } }}>
            <img src={logo} style={{ height: isMobile ? '40px' : '50px' }} alt="M Cabinet Logo" />
          </LogoContainer>
          
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 6, justifyContent: 'center', alignItems: 'center' }}>
            {menuItems.map((item, index) => (
              <NavButton key={index} onClick={item.onClick}>
                {item.label}
              </NavButton>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </StyledAppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: '70%',
            maxWidth: '300px',
            backgroundColor: 'primary.main',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: '#ffffff' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={item.onClick}
              sx={{
                py: 2,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  color: '#ffffff',
                  textAlign: 'center',
                  '& .MuiTypography-root': {
                    fontWeight: 600,
                    fontSize: '1.1rem',
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Header;

