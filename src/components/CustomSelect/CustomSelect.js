import React from 'react';
import wilayas from './wilayas.json';
import {FormControl,Select,MenuItem,InputLabel} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';


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

   theme = () => createMuiTheme({
    palette: {
      secondary: {
        light: '#ff7961',
        main: '#ba000d',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });
   useStyles = ()=> makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      backgroundColor: theme.colors.white
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    select : {
      backgroundColor: theme.colors.grayDark
    }
  }));

render() { 
    const classes = this.useStyles();
    const data = wilayas;
    const {selectedCoordinates} = this.state;
    return(
    <>
  <FormControl variant="filled" className={classes.formControl} color='secondary'>
       <InputLabel htmlFor="age-native-simple">Wialaya</InputLabel>

        <Select native
         className={classes.selectEmpty}
          id="demo-simple-select"
          value={selectedCoordinates}
          onChange={this.handleChange}
          key="Wilaya"
          inputProps={{
            name: 'wilaya',
            id: 'age-native-simple',
          }}        >

        {data.map((item, index) =>{return ( <option value={item.geometry.coordinates}>{item.properties.code} - {item.properties.name}</option>);})}
        
        </Select>
      </FormControl>
    </>
);}

}
