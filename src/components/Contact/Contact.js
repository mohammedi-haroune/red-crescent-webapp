import React, { useState } from 'react';
import clsx from 'clsx';
import * as emailjs from 'emailjs-com';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/Help';
import MessageIcon from '@material-ui/icons/Message';
import EmailIcon from '@material-ui/icons/Email';

import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    margin: '10px auto',
  },
  cardHeader: {
    margin: '20px',
    backgroundColor: '#f48fb1'
  },
  rootCardContent: {
    width: '70%',
    margin: '0 auto',
  },
  textField: {
    fontSize: '20px',
    padding: '15px 0',
  },
  MessagetextField:{
    minHeight: '80px',
    fontSize: '20px',
    padding: '15px 0',
  },
  title: {
    fontWeight: '1000',
    fontSize: '30px'
  },
  subHeader: {
    fontWeight: '1000',
    fontSize: '30px'
  },
  submitMsg: {
    width: '50%',
    padding:'10px 60px',
    backgroundColor:'#00e676',
    color: '#f1f8e9',
    fontSize: '40px'
  },
  errorSubmitMsg: {
    width: '50%',
    padding:'10px 60px',
    backgroundColor:'#ff1744',
    color: '#f1f8e9',
    fontSize: '40px'
  }
}));

const AccountDetails = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const [values, setValues] = useState({
    fullName: "",
    email: "",
    subject: '',
    message: '',
    submit: false,
    errorSubmit: false
  });
  const [errors, setErros] = useState({
    fullNameError: "",
    emailError: "",
    subjectError: '',
    messageError: '',
  });

  const handleChange = event => {
    if(values.submit)
      setValues({
        ...values,
        submit: false,
        [event.target.name]: event.target.value,
      });
    else
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });

  };

  const onSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: values.email,
      to_name: 'redcrescentwebapp@gmail.com',
      subject: values.subject,
      message_html: values.message,
    };
    emailjs.send(
      'gmail',
      'template_wHsTREgr',
       templateParams,
      'user_VggCn99Lmk1Bvcb5lxiSv'
    );
    setValues({
      fullName: '',
      email: '',
      subject: '',
      message: '',
      submit: true,
      errorSubmit: false
    });
  }
  return (

    <Card
      {...rest}
      className={clsx(classes.root, className)}
      color="secondary"
    >
      <form
        autoComplete="off"
        noValidate
      >
        <CardHeader
          classes={{
            root: classes.cardHeader,
            title: classes.title,
            subheader: classes.subHeader
          }}
          subheader="Si vous avez n'importe quelle question? Nous sommes la pour vous!"
          title="Contactez Nous"
        />
        <Divider />
        <CardContent
          classes = {{root: classes.rootCardContent,
            content: classes.cardContent}}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                color="secondary"
                name="fullName"
                label="Nom Complet"
                value={values.fullName}
                margin="dense"
                placeholder="Indiquer votre nom complet"
                onChange={handleChange}
                required
                variant="outlined"
                InputProps={{
                  classes: {
                    input: classes.textField
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle style={{color:'#2196f3', fontSize: '30px'}}/>
                    </InputAdornment>
                  ),
                }}
            />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                color="secondary"
                name="email"
                value={values.email}
                label="Adresse e-mail"
                margin="dense"
                placeholder="Veuillez indiquer votre adresse mail"
                onChange={handleChange}
                required
                variant="outlined"
                InputProps={{
                  classes: {
                    input: classes.textField
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon style={{color:'#e91e63', fontSize: '30px'}}/>
                    </InputAdornment>
                  ),
                }}
            />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                color="secondary"
                name="subject"
                label="Subject Du Message"
                value={values.subject}
                placeholder="exemple: don de sang question"
                margin="dense"
                onChange={handleChange}
                required
                variant="outlined"
                InputProps={{
                  classes: {
                    input: classes.textField
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <HelpIcon style={{color:'#4caf50', fontSize: '30px'}}/>
                    </InputAdornment>
                  ),
                }}
              />
              {

              }
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                multiline
                color="secondary"
                name="message"
                value={values.message}
                label="Message"
                placeholder="Veuillez écrire votre méssage ici"
                margin="normal"
                onChange={handleChange}
                required
                variant="outlined"
                InputProps={{
                  classes: {
                    input: classes.MessagetextField

                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <MessageIcon style={{color:'#2196f3', fontSize: '30px'}}/>
                    </InputAdornment>
                  ),
                }}
            />
            </Grid>
          </Grid>
          <Divider />
          <CardActions>
            <Button
              color="primary"
              variant="contained"
              style={{fontSize: '20px', width:'200px'}}
              onClick={(e) => onSubmit(e)}
            >
              Envoyer
            </Button>
          </CardActions>
            { console.log(values.submit, values.errorSubmit),
              values.submit
              ?(values.errorSubmit
                ?(<div className={classes.errorSubmitMsg}>
                    Error Message Not Sent!
                  </div>)
                :(<div className={classes.submitMsg}>
                    Message Sent!
                  </div>)
              )
              :<></>
            }
        </CardContent>
      </form>
    </Card>
  );
};


export default AccountDetails;
