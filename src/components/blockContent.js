import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      height: "10px"
      // width: "30px"
    },
    "&::-webkit-scrollbar-thumb": {
      background: "rgba(40, 86, 146, 0.5)",
      height: "10px",
      borderRadius: "10px"
    }
  },
  gridBlockStyle: {
    background: "#ffffff",
    padding: "70px 0px 70px 0px",
    borderRadius: "5px",
    // marginBottom: "50px",
    marginTop: "50px",
    [theme.breakpoints.down("xs")]: {
      padding: "70px 0px 70px 0px"
    }
  },
  title: {
    fontSize: "2rem",
    fontFamily: "Segoe UI, sans-serif",
    paddingBottom: "30px",
    fontWeight: "bold"
  }
}));

export default function BlockContent({ title, children, className }) {
  const classes = useStyles();
  return (
    <Grid className={clsx(classes.gridBlockStyle, className)}>
      <Typography className={classes.title}>{title}</Typography>
      <Grid container className={classes.gridList}>
        {children}
      </Grid>
    </Grid>
  );
}
