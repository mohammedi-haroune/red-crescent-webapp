import React, {Component} from "react";
// @material-ui/core components
import { withStyles } from "@material-ui/styles";
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import {
  Avatar,
  Typography,
  Divider,
  IconButton
} from '@material-ui/core';


const useStyles = theme => ({
  root: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    '&:hover':{
      border: '5px solid #f44336',
    },
    '&:focus':{
      border: '10px solid blue',
      width: '30%',
      height: 'auto'
    },
    "@media (min-width: 300px)": {
      width: '40px',
      height: '40px',
    },
    "@media (min-width: 530px)": {
      width: '70px',
      height: '70px',
    },
    "@media (min-width: 768px)": {
      width: '90px',
      height: '90px',
    },
    "@media (min-width: 900px)": {
      width: '120px',
      height: '120px',
    },
    "@media (min-width: 1100)": {
      width: '140px',
      height: '140px',
    },
    "@media (min-width: 1200px)": {
      width: '150px',
      height: '150px',
    },
  },
  name: {
    marginTop: '10px',
    fontWeight: '800',
    textAlign: 'center',
    color:'#333',
  }
});

const infoContributors = [
  {
    id: 0,
    name: 'Hichem Touahria',
    email: 'hichem.touahria@gmail.com',
    profession: 'Medical student',
    socialMedia: {
      facebook:'https://www.facebook.com/hichem.touahria',
      linkedin:'https://www.linkedin.com/in/hichem-touahria-4b3799b1',
    }
  },
  {
    id: 1,
    name: 'Mohammedi Haroune',
    email: 'mohammedi.haroun@gmail.com',
    profession: 'Software Engineer & Fonder Madrassaty',
    socialMedia: {
      facebook:'https://www.facebook.com/haroun.mohammedi',
      github:'https://github.com/mohammedi-haroune',
      linkedin: 'https://www.linkedin.com/in/mohammedi-haroune-3b3836170'
    }
  },
  {
    id: 2,
    name: 'Dallel Gaham',
    email: 'dallelgaham10@gmail.com',
    profession: 'Full Stack developer',
    socialMedia: {
      facebook:'https://www.facebook.com/dallel.ghhm',
      linkedin:'https://www.linkedin.com/in/dallel-gaham/',
      github: 'https://github.com/dallelgaham'
    }
  },
  {
    id: 3,
    name: 'Mehdi Messarat',
    email: 'medimessarat@gmail.com',
    profession: 'Full Stack Web-Developer',
    socialMedia: {
      facebook:'https://www.facebook.com/mehdi.messarat',
      github:'https://github.com/MediMESS',
      linkedin: 'https://www.linkedin.com/in/mehdi-messarat-554a34112/'
    }
  },
  {
    id: 4,
    name: '',
    email: '',
    profession: '',
    socialMedia: {
      facebook:'',
      linkedin:'',
      instagram: ''
    }
  }
]

class Contributors extends Component{
  constructor(props) {
    super(props);
    this.state = {
      contributorId: 4,
    }
  }

  setContributorId = (id) => {
    this.setState({
      contributorId: id
    });
  }

  render () {
    const {classes, ...rest} = this.props;
    const contributor = infoContributors[this.state.contributorId];
    return (
        <div
          {...rest}
          className={classes.root}
        >
        <div style ={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
          <Avatar
            alt="Person"
            className={classes.avatar}
            src= 'pictures/contributors/hichem.jpg'
            onMouseOver={() => {this.setContributorId(0)}}
          />
          <Avatar
            alt="Person"
            className={classes.avatar}
            src= 'pictures/contributors/haroun.jpg'
            onMouseOver={() => {this.setContributorId(1)}}

          />
          <Avatar
            alt="Person"
            className={classes.avatar}
            src= 'pictures/contributors/dalel.jpg'
            onMouseOver={() => {this.setContributorId(2)}}
          />
          <Avatar
            alt="Person"
            className={classes.avatar}
            src= 'pictures/contributors/mehdi.jpg'
            size="cover"
            onMouseOver={() => {this.setContributorId(3)}}
          />
        </div>
          <Typography
            className={classes.name}
            variant="h6"
          >
            {contributor.name}
          </Typography>
          <Divider style={{borderTop: '1px solid #333', width: '100%', marginTop: '10px'}} />
          <Typography variant="body1" style={{marginTop: '10px', textAlign: 'center', color: '#222'}} >{contributor.profession}</Typography>

          {contributor.email
            ?<div style={{display: 'flex', flexFlow: 'row wrap', justifyContent:'center', marginTop: '10px'}} >
              <span style={{color:'#ff0000'}}>
                <EmailIcon/>
              </span>
              <Typography variant="body1" style={{color: '#333'}}>
                {contributor.email}
              </Typography>
            </div>
          :<></>
          }
          <div style={{display: 'flex'}} >
              {contributor.socialMedia.facebook
                ?<IconButton
                  target="_blank"
                  href={contributor.socialMedia.facebook}
                  style={{cursor:'pointer'}}>
                    <FacebookIcon style={{color:'#3b5998', fontSize: '30px'}}/>
                </IconButton>
                :<></>
              }
              {contributor.socialMedia.linkedin
                ?<IconButton
                  target="_blank"
                  href={contributor.socialMedia.linkedin}
                  style={{cursor:'pointer'}}>
                    <LinkedInIcon style={{color:'#2867B2', fontSize: '30px'}}/>
                </IconButton>
                :<></>
              }
              {contributor.socialMedia.github
                ?<IconButton
                  target="_blank"
                  href={contributor.socialMedia.github}
                  style={{cursor:'pointer'}}>
                    <GitHubIcon style={{color:'#333', fontSize: '30px'}}/>
                </IconButton>
                :<></>
              }
          </div>
      </div>
      );
    }
}
export default withStyles(useStyles)(Contributors);
