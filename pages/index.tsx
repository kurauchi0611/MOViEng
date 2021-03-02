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
import { GeneralFlex } from "styles/flex/GeneralFlexStyle";
import GeneralColorStyle from "styles/colors/GeneralColorStyle";
import CardAtoms from "../components/atoms/CardAtoms";
import MovieCardMolecules from "../components/molecules/MovieCardMolecules";
import LogoAtoms from "../components/atoms/LogoAtoms";
import { auth } from "../utils/firebase/firebase";
import GeneralText, {
  GeneralFontSize,
  GeneralTag,
} from "../styles/typography/GeneralTextStyle";

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

  return (
    <React.Fragment>
      <CssBaseline />
      <Box>
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
        <GeneralText fontSize={GeneralFontSize.SIZE_16} fontColor={"#BDBDBD"} tag={GeneralTag.P}>
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
