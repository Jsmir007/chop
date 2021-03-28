import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ScrollToTop from "../lib/scrolTop";
import Services from "../components/wrapper/services";
import Feedback from "../components/wrapper/feedback";
import ButtonComponent from "../components/buttonComponent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import MainContent from "../components/mainContent";
import { dataServices } from "../dataServices";
import { Route, Switch, Link } from "react-router-dom";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles((theme) => ({
  gridList: {
    // flexWrap: "nowrap",
    transform: "translateZ(0)"
    // overflow: "auto",
  },
  gridItemStyle: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    background: "#285692",
    overflow: "hidden"
  },
  gridBlockStyle: {
    background: "#ffffff",
    padding: "70px 24px 70px 24px"
  },
  blockServices: {
    width:"100px",
    padding: "20px"
  },
  blockServiceItemText: {
    fontSize: "1rem"
  },
  title: {
    fontSize: "2rem",
    fontFamily: "Segoe UI, sans-serif",
    paddingBottom: "40px",
    fontWeight: "bold"
  },
  media: {
    backgroundSize: "contain",
    height: "70px",
    margin: "10px"
  },
  cardContent: {
    // padding: "0rem 5rem 0rem 5rem"
  },
  blockText: {
    background: "rgba(6,48,92,0.16)",
    margin: "20px 0px 20px 0px",
    padding: "20px",
    color: "white",
    textAlign: "left"
  },
  blockText_title: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    padding: "20px 20px 20px 0px"
  },
  blockText_description: {
    fontSize: "1rem"
  },
  blockContent: {
    width: "70%",
    margin: "0 auto"
  },
  buttonOrandge: {
    backgroundColor: "#DB6825",
    color: "#EBF0F5",
    fontSize: "12px"
  },
  svgStyle: {
    width: "100%",
    height: "200px",
    position: "relative",
    background: "url('../apartments.png') no-repeat",
    // backgroundImage: "url(../apartments.png)",
    backgroundSize: "contain",
    // "&::before": {
    //   width: "81%",
    //   bottom: 0,
    //   height: "104%",
    //   content: '""',
    //   position: "absolute",
    //   background: "#06305c",
    //   borderRadius: "100% / 100% ",
    //   top: " 162%",
    //   left: "9%",
    //   filter: "blur(5px)"
    // }
  }
}));

export default function ServicesPage() {
  return (
    <Switch>
      <Route exact path="/services" component={FullServices} />
      <Route path="/services/:url" component={ServiceItem} />
    </Switch>
  );
}
const ServiceItem = (props) => {
  const classes = useStyles();
  
  function get(url) {
    const isItem = (p) => p.url === url;
    return dataServices.find(isItem);
  }
  const item = get(props.match.params.url);
  if (!item) {
    return <div>Sorry, but the player was not found</div>;
  }
  return (
    <>
    <ScrollToTop/>
      <MainContent>
        <div className={classes.cardContent}>
          <div className={classes.blockContent}>
            <div className={classes.blockText}>
              <h1 className={classes.blockText_title}>{item.name}</h1>
              <p className={classes.blockText_description}>
                {item.description}
              </p>
            </div>
            <CardActions>
              <ButtonComponent title="Оставить заявку" />
            </CardActions>
          </div>
        </div>

        <div className={classes.svgStyle}>
          {/* <SvgIcon
            component={LogoIcon}
            viewBox="0 0 24 30"
            style={{ fontSize: "18rem" }}
            className="svgAnimation"
          /> */}
          <div className="svgAnimation"></div>
        </div>
      </MainContent>
      <Services/>
      <Feedback/>
    </>
  );
};
const FullServices = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.gridBlockStyle}>
      <Typography className={classes.title}>Услуги</Typography>
      <Grid container className={classes.gridList}>
        {dataServices.map((el, id) => (
          <Grid className={classes.blockServices} key={el.id}>
            <div className={classes.gridItemStyle}>
              <CardMedia
                className={classes.media}
                image="apartments3.svg"
                title={el.name}
              />
            </div>
            <Link to={`/services/${el.url}`} style={{ color: "black" }}>
              <div className={classes.blockServiceItemText}>{el.name}</div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
