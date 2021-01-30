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

import { useRouter } from 'next/router'

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
  const router=useRouter()
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();
  const [movie, setMovies] = React.useState<Schedule[] | null>(null);
  React.useEffect(() => {}, []);
  const yoyaku=()=>{
    db.collection("yoyaku").doc().set({
      user:"hoge",

    }).then(()=>{
      console.log("yoyaku kanryo!!");
      router.push("/movies/kanryo")
    })
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Box className={classes.root}>
        <Typography component="h1" variant="h4">
          予約確認
        </Typography>
      </Box>

      <Container className={classes.content} maxWidth="lg">
        <Box>
          <Typography>作品</Typography>
          <Typography>パラサイト</Typography>
          <Typography>日時</Typography>
          <Typography>2021年1月26日</Typography>
          <Typography>開場：15時00分</Typography>
          <Typography>開演：15時40分</Typography>
          <Typography>会場</Typography>
          <Typography>青森県青森市市民ホール</Typography>
        </Box>
        <Box>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.0573600211624!2d140.7311008157251!3d40.82670373852665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9b9f192daebddf%3A0x5c934a60b0ae37a2!2z6Z2S5qOu5biC5rCR44Ob44O844Or77yI44Oq44Oz44Kv44Oi44Ki5bmz5a6J6Zaj5biC5rCR44Ob44O844Or77yJ!5e0!3m2!1sja!2sjp!4v1611597305162!5m2!1sja!2sjp"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </Box>
        <Button href="" variant="contained" color="primary" onClick={yoyaku}>
          予約を確定する
        </Button>
      </Container>
    </React.Fragment>
  );
}
