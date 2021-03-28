import React, {useCallback} from "react";
import ButtonComponent from "../buttonComponent";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import {useHistory} from 'react-router-dom';
import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as LogoIcon } from "./logo.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "50px 0px 50px 0px"
  },

  cardContent: {
    // padding: "0rem 5rem 0rem 5rem"
  },
  blockText: {
    background: "rgba(6,48,92,0.16)",
    margin: "20px 0px 20px 0px",
    padding: "20px",
    color: "white"
  },
  blockText_number: {
    fontSize: "1.8rem",
    fontWeight: "bold"
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
    height: "100%",
    position: "relative",
    "&::before": {
      width: "81%",
      bottom: 0,
      height: "104%",
      content: '""',
      position: "absolute",
      background: "#06305c",
      borderRadius: "100% / 100% ",
      top: " 162%",
      left: "9%",
      filter: "blur(5px)"
    }
  },
  blockLeft: {
    order: 2
  },
  blockRight: {
    order: 1,
    [theme.breakpoints.up("sm")]: {
      order: 2
    }
  }
}));

export default function Slider() {
  const classes = useStyles();
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/about'), [history]);
  return (
    <Grid>
      <Grid container alignItems="center" className={classes.content}>
        <Grid item xs={12} sm={6} className={classes.blockLeft}>
          <div className={classes.cardContent}>
            <div className={classes.blockContent}>
              <div className={classes.blockText}>
                <p className={classes.blockText_number}>10+</p>
                <p className={classes.blockText_description}>
                  лет успешной работы
                </p>
              </div>
              <div className={classes.blockText}>
                <p className={classes.blockText_number}>300</p>
                <p className={classes.blockText_description}>
                  объектов под нашей охраной
                </p>
              </div>
              <div className={classes.blockText}>
                <p className={classes.blockText_number}>1000</p>
                <p className={classes.blockText_description}>
                  задержанных провонарушителей
                </p>
              </div>
              <CardActions>
                  <ButtonComponent title="Подробнее" onClick={handleOnClick} fullWidth/>
              </CardActions>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.blockRight}>
          <span className={classes.svgStyle}>
            <SvgIcon
              component={LogoIcon}
              viewBox="0 0 24 30"
              style={{ fontSize: "18rem" }}
              className="svgAnimation"
            />
          </span>
        </Grid>
      </Grid>
    </Grid>
  );
}
