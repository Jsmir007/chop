import React from "react";
import {config} from "../config";
import { makeStyles } from "@material-ui/core/styles";
import BlockContent from "../components/blockContent";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "0px 50px 0px 50px",
    textAlign: "left"
  },

}))

export default function About() {
  const classes = useStyles();
  return (
    <BlockContent title="О нас">
      <div className={classes.content}>
        Защищаем клиентов с 1993 года. Компания {config.NAME_PROJECT}, основана в 1993 году. С
        первого дня работы мы не просто оказываем охранные услуги клиентам, но и
        тщательно исследуем технологии и принципы обеспечения безопасности.
      </div>
    </BlockContent>
  );
}
