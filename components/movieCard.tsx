import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            hoge
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            hoge県　hoge市　hoge
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
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
}
