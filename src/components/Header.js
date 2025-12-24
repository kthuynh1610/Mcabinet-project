import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
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

  return (
    <StyledAppBar isOverHero={isOverHero}>
      <Toolbar sx={{ justifyContent: 'space-between', py: 2.5, minHeight: '100px !important' }}>
        <LogoContainer onClick={handleLogoClick} sx={{ cursor: 'pointer', ml:'20px' }}>
          <img src={logo} style={{height:'50px'}}/>
          
        </LogoContainer>
        <Box sx={{ display: 'flex', gap: 6, justifyContent: 'center', alignItems: 'center' }}>
          <NavButton onClick={() => scrollToSection('top')}>HOME</NavButton>
          <NavButton onClick={() => scrollToSection('our-background')}>ABOUT US</NavButton>
          <NavButton>SERVICES</NavButton>
          <NavButton>BLOG</NavButton>
          <NavButton onClick={() => scrollToSection('contact')}>CONTACT</NavButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;

