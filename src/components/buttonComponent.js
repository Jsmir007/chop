import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: "#DB6825",
    color: "#EBF0F5",
    padding: "6px 15px",
    whiteSpace: "nowrap",
    height:"35px",
    [theme.breakpoints.down("xs")]: {
      width: "100%"
      // backgroundColor: "#000"
    },
    "&:hover": {
      backgroundColor: "#B25C16"
    }
  }
}))(Button);

export default function ButtonComponent({ title, className, ...other }) {
  return (
    <ColorButton className={className} {...other}>
      {title}
    </ColorButton>
  );
}
