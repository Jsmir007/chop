import React from "react";
import MainContent from "../components/mainContent";
import Feedback from "../components/wrapper/feedback";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as LogoIcon } from "./location.svg";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "50px 0px 50px 0px"
  },
  title: {
    padding: "20px 0px 10px 0px"
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
  }
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <>
      <MainContent>
        <div className={classes.blockText}>
          <Grid container direction="column">
            <Grid item>
              <p className={classes.blockText_number}>Екатеринбург</p>
            </Grid>
            <Grid item container direction="column">
              <Grid item>
                <Typography
                  variant="h5"
                  component="p"
                  className={classes.title}
                >
                  Адрес
                </Typography>
              </Grid>
              <Grid item>
                <p className={classes.blockText_description}>
                  г. Екатеринбург ул. Ленина, дом 1, офис 123
                </p>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h5" component="p" className={classes.title}>
                Контактные данные
              </Typography>
              <Grid item container>
                <Grid item xs={2}>
                  <p className={classes.blockText_description}>Телефон:</p>
                </Grid>
                <Grid item>
                  <p className={classes.blockText_description}>
                    8-800-100-12-12
                  </p>
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={2}>
                  <p className={classes.blockText_description}>E-mail:</p>
                </Grid>
                <Grid item>
                  <p className={classes.blockText_description}>
                    security@mail.ru
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <span className={classes.svgStyle}>
          <SvgIcon
            component={LogoIcon}
            viewBox="0 0 24 30"
            style={{ fontSize: "18rem", color: "white" }}
            className="svgAnimation"
          />
        </span>
      </MainContent>
      <Feedback />
    </>
  );
}
