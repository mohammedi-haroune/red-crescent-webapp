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
  const {setPopUp} = props;
  return (
    <div>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Link to={"/Contact"} style={{color: '#3f51b5', textDecoration: 'none'}}>
            <Button
              color="transparent"
              className={classes.navLink}
            >
              <ContactSupportIcon className={classes.icons} style={{color: '#3f51b5'}}/> Contacez Nous
            </Button>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            color="transparent"
            style={{color: '#ff5722'}}
            className={classes.navLink}
            onClick={()=>{setPopUp(true)}}
          >
            <PeopleAltIcon className={classes.icons} style={{color: '#ff5722'}}/> Contributors
          </Button>
        </ListItem>
      </List>

    </div>
  );
}
