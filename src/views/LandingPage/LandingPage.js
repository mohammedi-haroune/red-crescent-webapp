import React from "react";
// nodejs library that concatenates classes
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/views/landingPage.js";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
      <div className={classes.container}>
        <div className={classes.landing}>
          <Header
            color="transparent"
            routes={dashboardRoutes}
            brand=""
            rightLinks={<HeaderLinks />}
            fixed
            {...rest}
          />
          <GridContainer>
            <GridItem className={classes.gridContainer} xs={12} sm={12} md={12}>
              <h1 className={classes.title}>Donner du <span style={{color: '#f44336'}}>Sang</span>, Sauvez une <span style={{color: '#f44336'}}>Vie♥</span></h1>
              <h4 className={classes.subtitle}>
                Le Don de Sang est un geste qui ne prend pas plus de 30 minutes,
                grâce auquel jusqu’à 3 VIES peuvent être sauvées.
                S’effectue tous les jours dans les hopitaux.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                className={classes.button}
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Hopitaux Don de Sang
              </Button>
            </GridItem>
          </GridContainer>
        </div>
    </div>
  );
}
