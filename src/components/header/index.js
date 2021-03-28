import React from "react";
import FormCallback from "../formCallback";
import ButtonComponent from "../buttonComponent";
import clsx from "clsx";
import {Link } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import SvgIcon from "@material-ui/core/SvgIcon";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { ReactComponent as LogoIcon } from "./logo.svg";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {},
  title: {
    margin: "0px 20px 0px 7px"
  },
  titleFirst: {
    fontSize: "1.6rem",
    lineHeight: "1.8rem"
  },
  titleSecond: {
    fontSize: "0.72rem"
  },
  menuStyle: {
    display: "flex",
    width: "100%",
    outline: "none"
  },
  blockInformation: {
    color: "#EBF0F5",
    // paddingLeft: "16px",
    // paddingRight: "16px"
    borderBottom: "1px solid rgba(28, 52, 89, 0.41)",
    padding: "15px 16px 10px 16px"
  },
  blockNavigation: {
    background: "#06305C",
    color: "#EBF0F5",
    paddingRight: "16px",
    // boxShadow:
    //   "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  blockContact: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    // dispaly: "none",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  gridItemContact: {
    flexWrap: "nowrap",
    // padding: "10px",
    alignItems: "center"
  },
  buttonOrandge: {
    backgroundColor: "#DB6825",
    color: "#EBF0F5",
    fontSize: "12px",
    textTransform: "none",
    fontWeight: "normal"
  },
  svgSize: {
    fontSize: "4.5rem"
  },
  paper: {
    position: "absolute",
    maxWidth: "700px",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: "5px",
    color: "#222",
    fontSize: "2rem",
    fontFamily: "Segoe UI, sans-serif",
    fontWeight: "bold",
    textAlign: "center",
    padding: "50px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backdropFilter: "blur(10px)",
    outline: "none"
  },
  inputStyle: {
    margin: "20px"
  },
  blockButton: {
    margin: "20px"
  },
  blockMenuMobile: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block"
    }
  }
}));

export default function Header() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <FormCallback />
      </Modal>
      <AppBar position="static" elevation={0} color="transparent">
        <div className={classes.blockInformation}>
          <Toolbar disableGutters>
            <Grid container justify="space-between" alignItems="center">
              <Grid item xs container alignItems="center" wrap="nowrap">
                <Link to="/">
                  <SvgIcon
                    component={LogoIcon}
                    viewBox="0 0 30 30"
                    className={classes.svgSize}
                  />
                </Link>
                <Grid>
                  <Typography
                    variant="subtitle1"
                    className={clsx(classes.title, classes.titleSecond)}
                    noWrap
                  >
                    Частное охранное предприятие
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className={clsx(classes.title, classes.titleFirst)}
                    noWrap
                  >
                    А-ЩИТ Регион
                  </Typography>
                </Grid>
              </Grid>
              <Grid item className={classes.blockContact}>
                <Grid item xs container className={classes.gridItemContact}>
                  <AccessTimeIcon fontSize="small" />
                  <Typography noWrap variant="body2" className={classes.title}>
                    Круглосуточно
                  </Typography>
                </Grid>
                <Grid item xs container className={classes.gridItemContact}>
                  <PhoneIcon fontSize="small" />
                  <Typography noWrap variant="body2" className={classes.title}>
                    8 800 111 22 33
                  </Typography>
                </Grid>
                <Grid item xs container className={classes.gridItemContact}>
                  <MailOutlineIcon fontSize="small" />
                  <Typography noWrap variant="body2" className={classes.title}>
                    security@mail.ru
                  </Typography>
                </Grid>

                <Grid item xs container className={classes.gridItemContact}>
                  <ButtonComponent
                    // type="submit"
                    title="Обратный звонок"
                    fullWidth
                    onClick={handleOpen}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid className={classes.blockMenuMobile}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Toolbar>
        </div>
        <div className={classes.blockNavigation}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <MenuList className={classes.menuStyle}>
                <MenuItem>
                  <Link to="/services">Услуги</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/price">Цены</Link>
                </MenuItem>
                {/* <MenuItem>
                  <Link to="/sale">Акции</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/news">Новости</Link>
                </MenuItem> */}
                <MenuItem>
                  <Link to="/contact">Контакты</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/about">О компании</Link>
                </MenuItem>
              </MenuList>
            </Grid>
            <Grid item xs container wrap="nowrap" justify="flex-end">
              <LocationOnOutlinedIcon />
              Екатеринбург
            </Grid>
          </Grid>
        </div>
      </AppBar>
    </>
  );
}
