import React, { useState } from 'react';
import { FormControl, MenuItem, InputLabel, Box, Select } from '@mui/material';
import OverviewChart from './pages/OverviewChart.js';
import Header from './pages/Header.js';
const Overview = () => {
  const [view, setView] = useState('units');
  return (
    <Box m='1.5rem 2.5rem'>
      <Header title='OVERVIEW' subTitle='Overview of revenue and Profit' />
      <Box height='75vh'>
        <FormControl sx={{ mt: '1rem' }}>
            <InputLabel>View</InputLabel>
            <Select value={view} label='view' onChange={(e)=>setView(e.target.value)}>
                <MenuItem value='sales'>Sales</MenuItem>
                <MenuItem value='units'>Units</MenuItem>
            </Select>
        </FormControl>
        <OverviewChart view={view}/>
      </Box>
    </Box>
  );
};

export default Overview;
