import React, { useState } from 'react';
import clsx from 'clsx';
import * as emailjs from 'emailjs-com';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/Help';
import MessageIcon from '@material-ui/icons/Message';
import EmailIcon from '@material-ui/icons/Email';
import validator from 'validator';

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
    margin: '40px auto 0 auto',
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
    padding:'10px 60px',
    marginBottom:'20px',
    backgroundColor:'#00e676',
    color: '#f1f8e9',
    fontSize: '40px'
  },
  errorSubmitMsg: {
    padding:'10px 20px',
    marginBottom:'20px',
    backgroundColor:'#ff1744',
    color: '#f1f8e9',
    fontSize: '40px'
  },
  errorStyle: {
    textTransform: 'capitalize',
    color: 'red',
    fontSize: '15px',
    textAlign:'left',
  }
}));

const AccountDetails = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const [values, setValues] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
    submit: false,
    errorSubmit: false
  });
  const [errors, setErrors] = useState({
    fullNameError: '',
    emailError: '',
    subjectError: '',
    messageError: ''
  });

  const handleChange = event => {
    const inputName = event.target.name;
    const errorInputName = event.target.name+"Error";
    if(values.submit)
      setValues({
        ...values,
        submit: false,
        [inputName]: event.target.value,
      });
    else
      setValues({
        ...values,
        [inputName]: event.target.value,
      });
    setErrors({
      ...errors,
      [errorInputName]: '',
    });
  }

  const validForm = () => {
    let valid = true;
    let emailError = "";
    let fullNameError = "";
    let subjectError = "";
    let messageError = "";
    if(!validator.isEmail(values.email)){
      emailError = 'Email non valide'
      valid = false;
    }
    if(validator.isEmpty(values.email)){
      emailError = 'email vide'
      valid = false;
    }
    if(validator.isEmpty(values.fullName)){
      fullNameError = 'Nom est vide'
      valid = false;
    }
    if(validator.isEmpty(values.subject)){
      subjectError = 'Sujet Vide'
      valid = false;
    }
    if(validator.isEmpty(values.message)){
      valid = false;
      messageError = 'message vide'
    }
    setErrors({
      fullNameError: fullNameError,
      emailError: emailError,
      subjectError: subjectError,
      messageError: messageError
    });
    return valid;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(!validForm()){
      setValues({
        ...values,
        submit: true,
        errorSubmit: true
      });
      return;
    }
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
          {values.submit
            ?(values.errorSubmit
              ?(<div className={classes.errorSubmitMsg}>
                Erreur: Message Non-Envoyer
                </div>)
                :(<div className={classes.submitMsg}>
                  Message Envoyer
                  </div>)
                )
                :<></>
              }
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
              <div className={classes.errorStyle}>
                {errors.fullNameError}
              </div>
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
              <div className={classes.errorStyle}>
                {errors.emailError}
              </div>
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
              <div className={classes.errorStyle}>
                {errors.subjectError}
              </div>
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
              <div className={classes.errorStyle}>
                {errors.messageError}
              </div>
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
        </CardContent>
      </form>
    </Card>
  );
};


export default AccountDetails;
