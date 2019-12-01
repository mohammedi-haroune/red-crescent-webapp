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
    textAlign:'center',
  },
  imageContainer: {
    margin: '0 auto',
    width: '200px',
    height: 'auto',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title:{
    fontSize: '15px',
    fontWeight:'700',
    margin:'10px 0',
    width: '100%',
    color: 'black',
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
            src={`${window.location.origin}${hospital.imageUrl}`}
            height="200"
          />
        </div>
        <Typography
          align="center"
          gutterBottom
          className={classes.title}
        >
          {hospital.name}
        </Typography>

        <Divider />
        <Button
          className={classes.button}
          onClick = {() => {window.open(`https://www.google.com/maps/place/${hospital.location}`, '_blank')}}>
            Localisation
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
