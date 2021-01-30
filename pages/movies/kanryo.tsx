import React from "react";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import MovieCard from "../../components/movieCard";
import Button from "@material-ui/core/Button";
import { db } from "../../firebase/firebase";

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
  const [movie, setMovies] = React.useState<Schedule | null>(null);
  React.useEffect(() => {
    
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <Box className={classes.root}>
        <Typography component="h1" variant="h4">
          上映情報
        </Typography>
      </Box>
        <Container className={classes.content} maxWidth="lg">
          <Typography component="h2" variant="h5">
            ご予約ありがとうございます。当日のご来場お待ちしております。
          </Typography>
          <Box>
          
          </Box>
          <Button href="/" variant="contained" color="primary">
            トップに戻る
          </Button>
        </Container>
    </React.Fragment>
  );
}
