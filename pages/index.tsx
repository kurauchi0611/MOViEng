import React from "react";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import MovieCard from "../components/movieCard";
import { db } from "utils/firebase/firebase";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

import NextLink from "next/link";
import {
  GeneralAlignItems,
  GeneralDirection,
  GeneralFlex,
  GeneralJustify,
} from "styles/flex/GeneralFlexStyle";
import GeneralColorStyle from "styles/colors/GeneralColorStyle";
import CardAtoms from "../components/atoms/CardAtoms";
import MovieCardMolecules from "../components/molecules/MovieCardMolecules";
import LogoAtoms from "../components/atoms/LogoAtoms";
import { auth } from "../utils/firebase/firebase";
import GeneralText, {
  GeneralFontSize,
} from "../styles/typography/GeneralTextStyle";
import firebase from "firebase";
import ButtonMolecules from "components/molecules/buttons/ButtonMolecules";
import { GeneralSpacer } from "styles/spacer/GeneralSpacerStyle";
import { IconType } from "consts/IconConsts";
import router from "next/router";
import CircleButtonMolecules from "components/molecules/buttons/CircleButtonMolecules";

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
  })
);

type Schedule = {
  good: number;
  movie: Movie;
  openTime: any;
  place: Place;
  startTime: any;
  wantWatch: number;
  id: string;
};
type Movie = {
  title: String;
  description: String;
  image: String;
};

type Place = {
  prefecture: String;
  city: String;
  other: String;
};

export default function Home() {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();
  const [now, setNow] = React.useState(true);
  const [movies, setMovies] = React.useState<Schedule[] | null>([]);
  const [todayMovie, setTodayMovie] = React.useState<any | null>();
  React.useEffect(() => {
    const clump = async () => {
      let getMovies = [];
      await db
        .collection("schedule")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach(async (doc) => {
            console.log(doc.data());
            getMovies.push({ ...doc.data(), id: doc.id });
          });
          setMovies(getMovies);
        });
      console.log(getMovies);
    };
    clump();
  }, []);
  const user = auth.currentUser;
  React.useEffect(() => {
    const clump = async () => {
      const today = new Date();
      const start = new Date(
        `${today.getFullYear()}/${
          today.getMonth() + 1
        }/${today.getDate()} 00:00:00`
      );
      const end = new Date(
        `${today.getFullYear()}/${
          today.getMonth() + 1
        }/${today.getDate()} 23:59:59`
      );
      console.log(today);

      if (user) {
        await db
          .collection("users")
          .doc(user.uid)
          .collection("reservation")
          .orderBy("startTime", "asc")
          .startAt(start)
          .endAt(end)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach(async (doc) => {
              setTodayMovie(doc.data());
            });
          });
      }
    };
    clump();
  }, [user]);
  const moveMoney = () => {
    router.push(`my_page/${user.uid}/payment_registration`);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Box style={{ display: "flex" }}>
        <LogoAtoms size={200} />
      </Box>
      <Box className={classes.root}>
        <Typography component="p" variant="h6" className={classes.check}>
          会場と上映スケジュールを
          <br />
          チェックしよう！
        </Typography>
      </Box>

      <Container className={classes.content} maxWidth="lg">
        {todayMovie && (
          <>
            <MovieCardMolecules
              city={todayMovie.place.city}
              other={todayMovie.place.other}
              prefecture={todayMovie.place.prefecture}
              picture={todayMovie.movie.image}
              title={todayMovie.movie.title}
              movieId={todayMovie.uid}
              startTime={todayMovie.startTime.toDate()}
              good={todayMovie.good}
              wantWatch={todayMovie.wantWatch}
            />
            <GeneralFlex
              direction={GeneralDirection.ROW}
              justify={GeneralJustify.CENTER}
              alignItems={GeneralAlignItems.CENTER}
            >
              <GeneralSpacer horizontal={16} />
              <ButtonMolecules
                text={"投げ銭する"}
                textColor={GeneralColorStyle.Black}
                width={376}
                btnColor={GeneralColorStyle.Yellow}
                iconType={IconType.COIN}
                onClick={moveMoney}
              />
              <GeneralSpacer horizontal={16} />
            </GeneralFlex>
            <GeneralSpacer horizontal={16} />
            <hr style={{ margin: 0 }} />
            <div style={{ position: "fixed", right: "16px", bottom: "96px" }}>
              <CircleButtonMolecules
                size={48}
                btnColor={GeneralColorStyle.Yellow}
                iconColor={GeneralColorStyle.Black}
                iconType={IconType.COIN}
                onClick={moveMoney}
              />
            </div>
          </>
        )}
        <GeneralText fontSize={GeneralFontSize.SIZE_16} fontColor={"#BDBDBD"}>
          2020年12月・2021年1月上映予定作品
        </GeneralText>

        <hr style={{ margin: 0 }} />

        {movies.map((movie, index) => {
          return (
            <>
              <MovieCardMolecules
                key={index}
                city={movie.place.city}
                other={movie.place.other}
                prefecture={movie.place.prefecture}
                picture={movie.movie.image}
                title={movie.movie.title}
                movieId={movie.id}
                startTime={movie.startTime.toDate()}
                good={movie.good}
                wantWatch={movie.wantWatch}
              />
              <hr style={{ margin: 0 }} />
            </>
          );
        })}
      </Container>
    </React.Fragment>
  );
}
