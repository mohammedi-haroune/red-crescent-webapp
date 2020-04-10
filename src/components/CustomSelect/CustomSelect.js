import React from 'react';
import wilayas from './wilayas.json';
import {FormControl,Select,MenuItem,InputLabel} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


export default class CustomSelect extends React.Component{

constructor(props) {
    super(props)

    this.state = {
         selectedCoordinates: [0,0],
         age: 5
    }
    }

   handleChange = (event) => {
       this.props.handleChange(event.target.value);
       this.setState({selectedCoordinates:event.target.value});
  };

   useStyles = ()=> makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      backgroundColor: theme.colors.white
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

render() { 
    const classes = this.useStyles();
    const data = wilayas;
    const {selectedCoordinates} = this.state;
    return(
    <>
  <FormControl variant="outlined" className={classes.formControl} color='secondary'>

        <Select
                  className={classes.selectEmpty}
          id="demo-simple-select"
          value={selectedCoordinates}
          onChange={this.handleChange}
          key="Wilaya"
        >

        {data.map((item, index) =>{return ( <MenuItem value={item.geometry.coordinates} key={index}>{item.properties.code} - {item.properties.name}</MenuItem>);})}
        
        </Select>
      </FormControl>
    </>
);}

}
