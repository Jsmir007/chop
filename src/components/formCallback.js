import React, { useState } from "react";
import ButtonComponent from "./buttonComponent";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: "0px 20px 0px 7px"
  },
  buttonOrandge: {
    backgroundColor: "#DB6825",
    color: "#EBF0F5",
    fontSize: "12px",
    textTransform: "none",
    fontWeight: "normal"
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
const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: "#DB6825",
    color: "#EBF0F5",
    "&:hover": {
      backgroundColor: "#B25C16"
    }
  }
}))(Button);

export default function FormCallback(props) {
  const classes = useStyles();
  const [data, setData] = useState({ tel: "", message: "" });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className={classes.paper}>
      <Grid className={classes.title}>Мы Вам перезвоним!</Grid>
      <form autoComplete="off">
        <Grid className={classes.inputStyle}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="component-outlined">Телефон</InputLabel>
            <OutlinedInput
              id="component-outlined"
              type="tel"
              name="tel"
              value={data.tel}
              onChange={handleChange}
              label="Телефон "
              required
            />
          </FormControl>
        </Grid>
        <Grid className={classes.inputStyle}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="component-outlined">Сообщение</InputLabel>
            <OutlinedInput
              id="component-outlined"
              type="text"
              name="message"
              value={data.message}
              onChange={handleChange}
              label="Сообщение "
              required
            />
          </FormControl>
        </Grid>
        <Grid className={classes.blockButton}>
          <ButtonComponent
            type="submit"
            title="Отправить!"
            fullWidth
            // onClick={props.onClick}
          />
        </Grid>
      </form>
    </div>
  );
}
