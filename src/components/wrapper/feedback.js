import React, { useState } from "react";
import BlockContent from "../blockContent";
import ButtonComponent from "../buttonComponent";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  styleBlockButton: {
    padding: "10px 20px 10px 20px"
    // width: "100%",
    // textAlign: "right"
  },
  inputItem: {
    padding: "10px 20px 10px 20px"
  }
}));

export default function Feedback() {
  const classes = useStyles();
  const [data, setData] = useState({
    fio: "",
    tel: "",
    email: "",
    message: ""
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const { fio, tel, email, message } = data;
  return (
    <BlockContent title="Задать вопрос">
      <form autoComplete="off">
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            container
            alignContent="space-between"
            // className={classes.padding}
          >
            <Grid item xs={12} className={classes.inputItem}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="component-outlined">ФИО</InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  type="text"
                  name="fio"
                  value={fio}
                  onChange={handleChange}
                  label="ФИО "
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} className={classes.inputItem}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="component-outlined">Телефон</InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  type="tel"
                  name="tel"
                  value={tel}
                  onChange={handleChange}
                  label="Телефон "
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} className={classes.inputItem}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="component-outlined">E-mail</InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  label="E-mail "
                  required
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} container className={classes.inputItem}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="component-outlined">Сообщение</InputLabel>
              <OutlinedInput
                required
                id="filled-textarea"
                type="text"
                name="message"
                label="Сообщение "
                multiline
                rows="11"
                value={message}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            container
            className={classes.styleBlockButton}
            justify="flex-end"
          >
            {/* <div > */}
            <ButtonComponent type="submit" title="Отправить" size="medium" />
            {/* </div> */}
          </Grid>
        </Grid>
      </form>
    </BlockContent>
  );
}
