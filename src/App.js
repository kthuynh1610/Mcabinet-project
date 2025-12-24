import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import OurBackground from './components/OurBackground';
import OurService from './components/OurService';
import OpeningHours from './components/OpeningHours';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#35170d', // Dark brown
      light: '#8b6040',
      dark: '#4d3018',
    },
    secondary: {
      main: '#fef6e3', // Light beige
      light: '#e8ddd4',
      dark: '#b8a99c',
    },
    background: {
      default: '#fef6e3',
      paper: '#ffffff',
    },
    text: {
      primary: '#fef6e3',
      secondary: '#6b4423',
    },
  },
  typography: {
    fontFamily:  '"Montserrat", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <HeroSection />
      <OurBackground />
      <OurService />
      <OpeningHours />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

