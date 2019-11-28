/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          className={classes.navLink}
        >
          <ContactSupportIcon className={classes.icons} style={{color: '#2196f3'}}/> Contact Us
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          className={classes.navLink}
        >
          <PeopleAltIcon className={classes.icons} style={{color: '#ff9100'}}/> Contributors
        </Button>
      </ListItem>
    </List>
  );
}
