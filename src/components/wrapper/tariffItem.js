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
    maxWidth: 238
  },
  media: {
    backgroundSize: "contain",
    height: 140,
    margin: "10px"
  }
});

export default function TariffItem({
  img,
  title,
  connectionCost,
  subscriptionFee
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`/${img}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Подключение
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            gutterBottom
            component="p"
          >
            от {connectionCost} руб
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Абонентская плата
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" component="p">
            от {subscriptionFee} руб/мес
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Подробнее
        </Button>
      </CardActions>
    </Card>
  );
}
