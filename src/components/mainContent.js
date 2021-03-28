import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";


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
  }
}));

export default function MainContent(props) {
  const classes = useStyles();
  return (
    <Grid>
      <Grid container alignItems="center" className={classes.content}>
        <Grid item xs={6}>
          {props.children[0]}
        </Grid>
        <Grid item xs={6}>
          {props.children[1]}
        </Grid>
      </Grid>
    </Grid>
  );
}
