import React from "react";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import MovieCard from "../components/movieCard";
import { db } from "../firebase/firebase";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

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

type Place ={
  prefecture:String;
  city:String;
  other:String;
}

export default function Home() {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();
  const [now, setNow] = React.useState(true);
  const [movie, setMovies] = React.useState<Schedule[] | null>([
    {
      good: 0,
      openTime: {
        sec: 0,
        milSec: 0,
      },
      startTime: {
        sec: 0,
        milSec: 0,
      },
      place: {
        city: "新宿区",
        other: "コクーンタワー",
        prefecture: "青森県",
      },
      wantWatch: 0,
      movie: {
        title: "HAL東京",
        picture: "hogehoge",
        description: "とっても面白い映画",
      },
    },
  ]);
  // React.useEffect(() => {
  //   const clump = () => {
  //     let getMovies = [];
  //     db.collection("yoyaku").doc()
  //       .get()
  //       .then((querySnapshot) => {
  //         querySnapshot.forEach(async (doc) => {
  //           const nowhantei = doc.data().now;
  //           if (nowhantei) setNow(true);
  //         });
  //       });
  //     console.log(getMovies);
  //   };
  //   clump();
  // }, []);
  React.useEffect(() => {
    const clump = () => {
      let getMovies = [];
      db.collection("schedule")
        .get()
        .then((querySnapshot) => {
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
              movie: await movieDetail.data(),
            };
            getMovies.push(movieData);
            setMovies(getMovies);
          });
        });
      console.log(getMovies);
    };
    clump();
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
        {now &&
           (
            <Card className={classes.roota}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    パラサイト
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    2021年1月26日15時40分
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link
                  href="movies/para"
                  // onClick={preventDefault}
                  variant="body2"
                >
                  詳細
                </Link>
              </CardActions>
            </Card>
          )
          }
      <Container className={classes.content} maxWidth="lg">
        <Typography variant="caption" color="textSecondary">
          2020年12月・2021年1月上映予定作品
        </Typography>
        <Divider />
        {movie.map((movi) => {
          return (
            <Card className={classes.roota}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {movi.movie.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {movi.place.prefecture}
                    {movi.place.city}
                    {movi.place.other}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    2021年1月26日15時40分
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link
                  href="movies/para"
                  // onClick={preventDefault}
                  variant="body2"
                >
                  詳細
                </Link>
              </CardActions>
            </Card>
          );
        })}
        <Divider />
        <MovieCard />
        <Divider />
        <MovieCard />
        <Divider />
        <MovieCard />
        <Divider />
        <MovieCard />
        <Divider />
        <MovieCard />
        <Divider />
        <MovieCard />
      </Container>
    </React.Fragment>
  );
}
