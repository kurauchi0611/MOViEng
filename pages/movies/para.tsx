import React from "react";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import MovieCard from "../../components/movieCard";
import Button from '@material-ui/core/Button';

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
  const [movie, setMovies] = React.useState<Schedule[] | null>(null);
  React.useEffect(() => {}, []);
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
          パラサイト
        </Typography>
        <Box>
          <Typography>日時</Typography>
          <Typography>2021年1月26日</Typography>
          <Typography>開場：15時00分</Typography>
          <Typography>開演：15時40分</Typography>
          <Typography>会場</Typography>
          <Typography>青森県青森市市民ホール</Typography>
        </Box>
        <Box>
          <Typography>
            <PanToolIcon />
            参加します
          </Typography>
          <Typography>11</Typography>
          <Typography>
            <FavoriteIcon />
            いいね
          </Typography>
          <Typography>31</Typography>
        </Box>
        <Box>
          <Typography>あらすじ</Typography>
          <Typography>
            “半地下住宅”に暮らす貧しい4人家族のキム一家。ある時長男ギウの友人ミニョクが自分が留学中に家庭教師を代わってほしいとバイトの話を持ってくる。向かった先は高台にある豪邸のパク一家。　初日に母娘の信頼を勝ち取り、見事家庭教師の職を得たギウは、パク家の息子ダソンに紹介したい家庭教師がいると巧みに持ちかける。そして連れてきたのはジェシカと名乗る妹のギジョンだった。　ダソンの美術教師になり母の信頼を得たギジョンは次にある仕掛けをする。徐々にパク家に取り入っていくキム一家。この二つの家族に待ち受けている衝撃の展開とは……。
          </Typography>
        </Box>
        <Button href="/movies/yoyaku" variant="contained" color="primary">予約する</Button>
      </Container>
    </React.Fragment>
  );
}
