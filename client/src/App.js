import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles'; // not from systems
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { themeSettings } from './theme';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';
import Products from './components/Products';
import Customers from './components/Customers';
import Transactions from './components/Transactions';
import Geography from './components/Geography';
import Overview from './components/Overview';
import Daily from './components/Daily';
import Monthly from './components/Monthly';
import Breakdown from './components/Breakdown';
import Admin from './components/Admins';
import Performance from './components/Performance'


function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Navigate to='/dashboard' replace />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/products' element={<Products />} />
              <Route path='/customers' element={<Customers />} />
              <Route path='/transactions' element={<Transactions />} />
              <Route path='/geography' element={<Geography />} />
              <Route path='/overview' element={<Overview />} />
              <Route path='/daily' element={<Daily />} />
              <Route path='/monthly' element={<Monthly />} />
              <Route path='/breakdown' element={<Breakdown />} />
              <Route path='/admin' element={<Admin />} /> 
              <Route path='/performance' element={<Performance />} /> 
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
