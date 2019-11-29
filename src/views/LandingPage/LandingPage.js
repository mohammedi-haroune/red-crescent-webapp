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
import { Link } from "react-router-dom";


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
              <h1 className={classes.title}>Donnez du <span style={{color: '#f44336'}}>Sang</span>, Sauvez une <span style={{color: '#f44336'}}>Vie♥</span></h1>
              <h4 className={classes.subtitle}>
                Le Don de Sang est un geste qui ne prend pas plus de 30 minutes,
                grâce auquel jusqu’à 3 VIES peuvent être sauvées.
                S’effectue tous les jours dans les hopitaux.
              </h4>
              <br />
              <Link to={"/hopitaux"} style={{color: 'inherit'}}>

                <Button
                  color="danger"
                  size="lg"
                  className={classes.button}
                  rel="Don De Sang"
                >
                  <i className="fas fa-play" />
                  Hopitaux Don de Sang
                </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
    </div>
  );
}
