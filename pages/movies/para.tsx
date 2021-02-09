import React from "react";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import MovieCard from "../../components/movieCard";
import Button from "@material-ui/core/Button";
import { db } from "utils/firebase/firebase";

import PanToolIcon from "@material-ui/icons/PanTool";
import FavoriteIcon from "@material-ui/icons/Favorite";

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
    root2: {
      maxWidth: 345,
    },
    media: {
      height: 140,
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
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();
  const [movie, setMovies] = React.useState<Schedule | null>(null);
  React.useEffect(() => {
    const clump = () => {
      db.collection("schedule")
        .doc("xnc3hftcAjtLrgA0umao")
        .get()
        .then(async (doc) => {
          console.log(doc.data());
          const movieDetail = await doc.data().movie.get();
          console.log(movieDetail.data());
          const movieData = {
            id: doc.id,
            good: doc.data().good,
            openTime: doc.data().openTime,
            place: doc.data().place,
            startTime: doc.data().startTime,
            wantWatch: doc.data().wantWatch,
            movie: await movieDetail.data(),
          };
          setMovies(movieData);
        });
    };
    clump();
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <Box className={classes.root}>
        <Typography component="h1" variant="h4">
          上映情報
        </Typography>
      </Box>
      {movie !== null && (
        <Container className={classes.content} maxWidth="lg">
          <Typography component="h2" variant="h5">
            {movie.movie.title}
          </Typography>
          <Box>
            <Typography>日時</Typography>
            <Typography>2021年1月26日</Typography>
            <Typography>開場：15時00分</Typography>
            <Typography>開演：15時40分</Typography>
            <Typography>会場</Typography>
            <Typography>
              {movie.place.prefecture}
              {movie.place.city}
              {movie.place.other}
            </Typography>
          </Box>
          <Box>
            <Typography>
              <PanToolIcon />
              参加します
            </Typography>
            <Typography>{movie.wantWatch}</Typography>
            <Typography>
              <FavoriteIcon />
              いいね
            </Typography>
            <Typography>{movie.good}</Typography>
          </Box>
          <Box>
            <Typography>あらすじ</Typography>
            <Typography>{movie.movie.description}</Typography>
          </Box>
          <Button href="/movies/yoyaku" variant="contained" color="primary">
            予約する
          </Button>
        </Container>
      )}
    </React.Fragment>
  );
}
