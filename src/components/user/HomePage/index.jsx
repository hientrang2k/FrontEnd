import React from 'react';
import { Box } from '@mui/material';
import Header from '../HomeComponent/Header';
import './style.css';
import Slideshow from '../HomeComponent/ListTopic';

const HomePage = () => {
  return (
    <Box>
      <Box className='header-slide'>
        <Header />
        <Slideshow />
      </Box>
    </Box>
  );
};

export default HomePage;
