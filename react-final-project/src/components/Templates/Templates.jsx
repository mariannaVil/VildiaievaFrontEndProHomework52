import { Grid } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

const Templates = ({ handleInputChange }) => (
  <Grid container>
    <Grid item xs={12}>
      <Header />
    </Grid>
    <Grid item xs={3}>
      <Sidebar handleInputChange={handleInputChange} />
    </Grid>
    <Grid item xs={9}>
      <Outlet />
    </Grid>
    <Grid item xs={12}>
      <Footer />
    </Grid>
  </Grid>
);
export default Templates;
