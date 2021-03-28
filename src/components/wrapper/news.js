import React from "react";
import BlockContent from "../blockContent";
import NewsItem from "./newsItem";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const dataSlider = [
  {
    date: "12.02.2020 10:34",
    img: "1.jpg",
    description: "Турнир по рукопашному бою"
  },
  {
    date: "13.02.2020 10:34",
    img: "1.jpg",
    description: "Как правильно выбрать видеокамеры на дом?"
  },
  {
    date: "14.02.2020 10:34",
    img: "1.jpg",
    description: "Магазины 'Пятерочка' доверила нам свои cклады!"
  },
  {
    date: "15.02.2020 10:34",
    img: "1.jpg",
    description: "Как правильно выбрать видеокамеры на дом?"
  },
  {
    date: "16.02.2020 10:34",
    img: "1.jpg",
    description: "Турнир по рукопашному бою"
  }
];
const useStyles = makeStyles((theme) => ({
  content: {
    padding: "70px 24px 70px 24px",
    background: "#0A498E"
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
      background: "#ddd",
      height: "10px"
      // width: "10px"
    }
  },
  title: {
    fontSize: "2rem",
    fontFamily: "Segoe UI, sans-serif",
    paddingBottom: "40px",
    fontWeight: "bold",
    color: "#FFFFFF"
  },
  containerSlider: {
    width: "250px"
  }
}));
const asd = { width: "250px" };
export default function News() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = dataSlider.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <BlockContent title="Новости" className={classes.content}>
      {/* <AutoPlaySwipeableViews
          axis="x"
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          containerStyle={asd}
          style={asd}
        >
          {dataSlider.map((step, index) => (
            // <div >
            //   {Math.abs(activeStep - index) <= 2 ? (
            //     <img className={classes.img} src={step.imgPath} alt={step.label} />
            //   ) : null}
            // </div>
            <Grid item className={classes.gridItem} key={step.label}>
              <NewsItem
                img={step.img}
                date={step.date}
                description={step.description}
              />
            </Grid>
          ))}
        </AutoPlaySwipeableViews> */}

      <Grid item className={classes.gridItem}>
        <NewsItem
          img="1.jpg"
          date="12.02.2020 10:34"
          description="Как правильно выбрать видеокамеры на дом?"
        />
      </Grid>
      <Grid item className={classes.gridItem}>
        <NewsItem
          img="1.jpg"
          date="12.02.2020 10:34"
          description="Магазины 'Пятерочка' доверила нам свои cклады!"
        />
      </Grid>
      <Grid item className={classes.gridItem}>
        <NewsItem img="1.jpg" date="12.02.2020 10:34" description="2990" />
      </Grid>
      <Grid item className={classes.gridItem}>
        <NewsItem
          img="1.jpg"
          date="12.02.2020 10:34"
          description="Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать."
        />
      </Grid>
      <Grid item className={classes.gridItem}>
        <NewsItem
          img="1.jpg"
          date="12.02.2020 10:34"
          description="При создании генератора мы использовали небезизвестный."
        />
      </Grid>
    </BlockContent>
  );
}
