import React from "react";
import BlockContent from "../blockContent";
import { dataServices } from "../../dataServices";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  gridItemStyle: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    background: "#285692",
    overflow: "hidden"
  },
  blockServices: {
    padding: "20px"
  },
  blockServiceItemText: {
    fontSize: "1rem",
    padding: "15px"
  },
  media: {
    backgroundSize: "contain",
    height: "100px",
    margin: "10px"
  }
}));

export default function Services() {
  const classes = useStyles();
  return (
    <BlockContent title="Услуги">
      {dataServices.map((el) => (
        <Grid className={classes.blockServices} key={el.id}>
          <Link to={`/services/${el.url}`} style={{ color: "black" }}>
          <div className={classes.gridItemStyle}>
            <CardMedia
              className={classes.media}
              image={el.img}
              title={el.name}
            />
          </div>
          <div className={classes.blockServiceItemText}>{el.name}</div>
          </Link>
        </Grid>
      ))}
    </BlockContent>
  );
}
