import React from "react";
import {config} from "../../config";
import {dataServices} from "../../dataServices";
import ButtonComponent from "../buttonComponent";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: "#06305C",
    color: "#FFFFFF",
    padding: "30px",
    fontSize: "0.85rem",
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center"
    }
  },
  divider: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.25)"
  },
  buttonOrandge: {
    backgroundColor: "#DB6825",
    color: "#EBF0F5",
    fontSize: "12px",
    height: "40px"
  },
  gridItem: {
    margin: "10px"
  },
  gridItemHidden: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  gridItemMobile: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      width: "100%",
      textAlign: "center",
      margin: "10px"
    }
  },
  button: {
    padding: "0px 20px 0px 20px"
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid container className={classes.footer}>
      <Grid
        item
        container
        wrap="nowrap"
        className={clsx(classes.gridItem, classes.gridItemHidden)}
      >
        <Grid item xs={2} container direction="column">
          <Typography variant="caption">Телефон</Typography>
          <Typography>8-800-111-22</Typography>
        </Grid>
        <Grid item xs={2} container direction="column">
          <Typography variant="caption">E-mail</Typography>
          <Typography>security@mail.ru</Typography>
        </Grid>
        <Grid item xs={5} container direction="column">
          <Typography variant="caption">Адрес</Typography>
          <Typography>г. Екатеринбург, ул. Ленина, дом 1, офис 123</Typography>
        </Grid>
        <Grid item xs={3} container className={classes.button}>
          <ButtonComponent title="Задать вопрос" fullWidth/>
        </Grid>
      </Grid>

      <Typography
        align="center"
        variant="h4"
        component="p"
        className={classes.gridItemMobile}
      >
        8 800 100 11 22
      </Typography>

      <Divider className={classes.divider} />
      <Grid
        item
        container
        wrap="nowrap"
        className={clsx(classes.gridItem, classes.gridItemHidden)}
      >
        <Grid item container alignContent="flex-start">
          <Typography variant="caption">Услуги</Typography>
          <Grid item container direction="column">
            {dataServices.map(el => (
              <Grid item key={el.id}>{el.name}</Grid>
            ))}
          </Grid>
        </Grid>
        {/* <Grid item container alignContent="flex-start">
          <Typography variant="caption">Цены</Typography>
          <Grid item container direction="column">
            <Grid item>Калькулятор</Grid>
          </Grid>
        </Grid>
        <Grid item container alignContent="flex-start">
          <Typography variant="caption">Новости</Typography>
        </Grid> */}
        <Grid item container alignContent="flex-start">
          <Typography variant="caption">О Компании</Typography>
          <Grid item container direction="column">
            <Grid item>О нас </Grid>
            <Grid item>Лицензии</Grid>
            <Grid item>Вакансии</Grid>
          </Grid>
        </Grid>
        <Grid item container alignContent="flex-start">
          <Typography variant="caption">Контакты</Typography>
        </Grid>
      </Grid>
      <Grid item container wrap="nowrap" className={classes.gridItem}>
        <Grid item container>
          <Typography>
            © 1993–2021 {config.FORM_REDUCTION} {config.NAME_PROJECT} ИНН 666123434 ОГРН 12345678901234
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
