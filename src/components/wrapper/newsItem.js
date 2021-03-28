import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 238,
    height: "100%"
    // position: "relative"
  },
  media: {
    height: 140
    // margin: "10px"
  },
  button: {
    // position: "absolute",
    // bottom: 0
  },
  content: {
    height: "80px"
  }
});

export default function NewsItem({ img, date, description, subscriptionFee }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`/${img}`}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography
            align="left"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {date}
          </Typography>
          <Typography
            align="left"
            variant="subtitle1"
            color="textSecondary"
            gutterBottom
            component="p"
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.button}>
        <Button size="small" color="primary">
          Подробнее
        </Button>
      </CardActions>
    </Card>
  );
}
