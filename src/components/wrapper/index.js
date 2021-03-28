import React from "react";
import Slider from "./slider";
import Services from "./services";
import Tariffs from "./tariffs";
import Feedback from "./feedback";
import News from "./news";
import Box from "@material-ui/core/Box";

export default function Wrapper() {
  return (
    <Box>
      <Slider />
      <Services />
      <Tariffs />
      <Feedback />
      {/* <News /> */}
    </Box>
  );
}
