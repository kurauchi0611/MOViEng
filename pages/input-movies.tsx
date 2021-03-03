import React from "react";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import MovieCard from "../components/movieCard";
import TextField from "@material-ui/core/TextField";

import firebase, { db } from "utils/firebase/firebase";
import { tmdbKey } from "utils/tmdb";
import { IconType } from "../consts/IconConsts";
import GeneralColorStyle from "../styles/colors/GeneralColorStyle";

import { GeneralFlex } from "styles/flex/GeneralFlexStyle";
import TextFieldAtoms from "components/atoms/TextFieldAtoms";
import ButtonMolecules from "components/molecules/buttons/ButtonMolecules";
import GeneralText from "styles/typography/GeneralTextStyle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#fee101",
      padding: theme.spacing(2),
    },
    check: {
      fontWeight: 700,
    },
    content: {
      backgroundColor: "#FAFAFA",
    },
    roota: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    head: {
      fontSize: 100,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  })
);

type Schedule = {
  good: number;
  movie: Movie;
  openTime: Object;
  place: Place;
  startTime: Object;
  wantWatch: number;
};
type Movie = {
  title: String;
  description: String;
  picture: String;
};

type Place = {
  prefecture: String;
  city: String;
  other: String;
};

export default function Home() {
  const classes = useStyles();
  const [movieNum, setMovieNum] = React.useState<string>("635302");
  const [startTime, setStartTime] = React.useState("2021-02-10T15:30");
  const [movieData, setMovieData] = React.useState<{
    title: string | any;
    image: string | any;
    description: string | any;
  }>({
    title: "",
    image: "",
    description: "",
  });
  const [place, setPlace] = React.useState<{
    prefecture: string;
    city: string;
    other: string;
  }>({
    prefecture: "青森県",
    city: "青森市",
    other: "市民ホール",
  });
  const getMovie = () => {
    console.log(movieNum);
    const url = `https://api.themoviedb.org/3/movie/${movieNum}?api_key=${tmdbKey}&language=ja`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovieData({
          title: data.title,
          description: data.overview,
          image: `https://image.tmdb.org/t/p/w300${data.poster_path}`,
        });
      });
  };
  const changeMovieValue = (e) => {
    setMovieNum(e.target.value);
  };
  const changeStartTime = (e) => {
    setStartTime(e.target.value);
  };
  const changePrefecture = (e) => {
    setPlace({ ...place, prefecture: e.target.value });
  };
  const changeCity = (e) => {
    setPlace({ ...place, city: e.target.value });
  };
  const changePlaceOther = (e) => {
    setPlace({ ...place, other: e.target.value });
  };

  const addSchedule = () => {
    console.log(startTime);
    console.log(place);
    const transTime = new Date(startTime);
    const openTime = transTime.setMinutes(transTime.getMinutes() - 30);
    console.log(transTime);
    console.log(openTime);

    db.collection("schedule").add({
      movie: movieData,
      place: place,
      openTime: firebase.firestore.Timestamp.fromDate(new Date(openTime)),
      startTime: firebase.firestore.Timestamp.fromDate(new Date(startTime)),
      good: 0,
      wantWatch: 0,
    });
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <GeneralFlex direction="row" alignItems="flex-end" justify="center">
          <Box>
            <TextFieldAtoms
              placeholder="500"
              label="映画番号"
              value={movieNum}
              changeValue={changeMovieValue}
            />
          </Box>
          <ButtonMolecules
            text="取得"
            textColor={GeneralColorStyle.White}
            btnColor={GeneralColorStyle.Twitter}
            width={200}
            iconType={IconType.MAN}
            onClick={getMovie}
          />
        </GeneralFlex>
        <GeneralFlex direction="column" alignItems="center" justify="center">
          <GeneralText fontSize={28} fontWeight={"bold"}>
            {movieData.title}
          </GeneralText>
          <img src={movieData.image} alt="" />
        </GeneralFlex>
        <GeneralText fontSize={20}>{movieData.description}</GeneralText>
        <GeneralFlex direction="row" alignItems="flex-end" justify="center">
          <TextField
            id="datetime-local"
            label="開始日時"
            type="datetime-local"
            defaultValue="2021-02-10T15:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={changeStartTime}
          />
          <Box>
            <TextFieldAtoms
              placeholder="東京都"
              label="都道府県"
              value={place.prefecture}
              changeValue={changePrefecture}
            />
          </Box>
          <Box>
            <TextFieldAtoms
              placeholder="新宿区"
              label="市区町村"
              value={place.city}
              changeValue={changeCity}
            />
          </Box>
          <Box>
            <TextFieldAtoms
              placeholder="コクーンタワー"
              label="他"
              value={place.other}
              changeValue={changePlaceOther}
            />
          </Box>
          <Box>
            <ButtonMolecules
              text="スケジュール登録"
              textColor={GeneralColorStyle.White}
              btnColor={GeneralColorStyle.Twitter}
              width={200}
              iconType={IconType.MAN}
              onClick={addSchedule}
            />
          </Box>
        </GeneralFlex>
      </Container>
    </React.Fragment>
  );
}
