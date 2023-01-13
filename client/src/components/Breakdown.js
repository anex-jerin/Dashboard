import React from 'react';
import { Box } from '@mui/material';
import Header from './pages/Header';
import BreakdownChart from './pages/BreakdownChart';

const Breakdown = () => {
  return (
    <Box m='1.5rem 2.5rem'>
      <Header title='BREAKDOWN' subTitle='Breakdown of sales By Category' />
      <Box mt='40px' height='75vh'>
        <BreakdownChart />
      </Box>
    </Box>
  );
};

export default Breakdown;
