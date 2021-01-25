import React from "react";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import MovieCard from "../components/movieCard";
import { db } from "../firebase/firebase";

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
  place: Object;
  startTime: Object;
  wantWatch: number;
};
type Movie = {
  title: String;
  description: String;
  picture: String;
};

export default function Home() {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();
  const [movie, setMovies] = React.useState<Schedule[] | null>(null);
  React.useEffect(() => {
    db.collection("schedule")
      .get()
      .then((querySnapshot) => {
        let getMovies = [];
        querySnapshot.forEach(async (doc) => {
          const movieDetail = await doc.data().movie.get();
          console.log(movieDetail.data());

          const movieData = {
            id: doc.id,
            good: doc.data().good,
            openTime: doc.data().openTime,
            place: doc.data().place,
            startTime: doc.data().startTime,
            wantWatch: doc.data().wantWatch,
            movie: movieDetail.data(),
          };
          getMovies.push(movieData);
        });
        setMovies(getMovies);
        console.log(getMovies);
      });
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <Box>
        <Typography component="h1" variant="h4">
          MOViEng
        </Typography>
      </Box>
      <Box className={classes.root}>
        <Typography component="p" variant="h6" className={classes.check}>
          会場と上映スケジュールを
          <br />
          チェックしよう！
        </Typography>
      </Box>
      <Container className={classes.content} maxWidth="lg">
        <Typography variant="caption" color="textSecondary">
          2020年12月・2021年1月上映予定作品
        </Typography>
        <Divider />
        <MovieCard></MovieCard>
        <Divider />
        <MovieCard></MovieCard>
        <Divider />
        <MovieCard></MovieCard>
        <Divider />
      </Container>
    </React.Fragment>
  );
}
