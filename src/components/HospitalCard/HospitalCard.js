import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
  },
  imageContainer: {
    margin: '0 auto',
    // border: `1px solid ${theme.palette.divider}`,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title:{
    fontSize: '25px',
    fontWeight:'700',
    margin:'10px 0',
    width: '100%',
    color: 'black',
    // theme.palette.text.primary,
  },
  button: {
    textAlign: 'center',
    margin: '10px',
    background: 'deepskyblue',
  },
}));


const HospitalCard = props => {
  const classes = useStyles();
  const {hospital} = props;

  return (
    <Card>
      <CardContent
        style={{paddingBottom: '0'}}
        className={classes.root}
      >
        <div className={classes.imageContainer}>
          <img
            alt="Product"
            src={hospital.imageUrl}
            height="300"
          />
        </div>
        <Typography
          align="center"
          gutterBottom
          className={classes.title}
        >
          {hospital.title}
        </Typography>

        <Divider />
        <Button
          className={classes.button}
          onClick = {() => {window.open(`https://www.google.com/maps/place/${hospital.location}`, '_blank')}}>
            Location
        </Button>
      </CardContent>
    </Card>
  );
};

HospitalCard.propTypes = {
  className: PropTypes.string,
  hospital: PropTypes.object.isRequired
};

export default HospitalCard;
