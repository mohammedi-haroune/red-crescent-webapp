import React, {Component} from "react";
// nodejs library that concatenates classes
import { withStyles } from "@material-ui/styles";
import classNames from "classnames";

// core components
import Header from "./components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import useStyles from "assets/jss/views/landingPage.js";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import Contributors from "./components/Contributors/Contributors";
import './LandingPage.css';


const dashboardRoutes = [];

class LandingPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      popUp: false,
    };
  }
  setPopUp = (open) => {
    this.setState({ popUp: open });
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
        <div className={classNames(classes.container, "bg")}>

          <div className={classes.landing}>
            <Header
              color="transparent"
              routes={dashboardRoutes}
              brand=""
              setPopUp={this.setPopUp}
              fixed
              {...rest}
            />
            <Popup
              open={this.state.popUp}
              closeOnDocumentClick
              onClose={()=>{this.setPopUp(false)}}
              lockScroll = {false}
              contentStyle={{
                transition: 'all 2s ease',
                marginTop: '100px',
                width: '55%',
                borderRadius: '10px'
              }}
            >
            {this.state.popUp
              ?<Contributors />
              :<></>
            }
            </Popup>
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
}
export default withStyles(useStyles)(LandingPage);
