import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import HospitalCard from '../HospitalCard/HospitalCard';
import {Grid} from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  content: {
    marginTop: '10px',
    padding: '20px',
  },
  paper: {
    transition: '.2s transform',
    '&:hover':{
      cursor: 'pointer',
      transform: 'scale(1.06)',
    }
  }
}));


const Hospitals = props => {
  const { className, hospitals, ...rest } = props;
  const classes = useStyles();

  return (
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {hospitals.map(hospital => (
            <Grid
              item
              key={hospital.id}
              lg={4}
              md={4}
              sm={6}
              xs={12}
              className={classes.paper}
            >
              <HospitalCard hospital={hospital} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }

export default Hospitals;
