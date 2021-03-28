import React from "react";
import BlockContent from "../blockContent";
import { dataServices } from "../../dataServices";
import TariffItem from "./tariffItem";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  content: {
    background: "#E1E9F1"
  },
  gridItem: {
    width: "250px",
    flexShrink: 0,
    padding: "20px"
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      height: "10px"
      // width: "30px"
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#fff",
      height: "10px"
      // width: "10px"
    }
  },
  title: {
    fontSize: "2rem",
    fontFamily: "Segoe UI, sans-serif",
    paddingBottom: "40px",
    fontWeight: "bold"
  }
}));

export default function Tariffs() {
  const classes = useStyles();
  return (
    <BlockContent title="Тарифы" className={classes.content}>
      {dataServices.map((el) => (
        <Grid item className={classes.gridItem} key={el.id}>
          <TariffItem
            img={el.img2}
            title={el.name}
            connectionCost={el.connectionCost}
            subscriptionFee={el.subscriptionFee}
          />
        </Grid>
      ))}
    </BlockContent>
  );
}
