import Typography from '@material-ui/core/Typography';
import { Card, CardActionArea, makeStyles } from '@material-ui/core';
import React from 'react';
import { MonsterCardProps } from '../services/types';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: "20vw",
    height: "10vh",
    marginTop: "1vh",
    marginBottom: "1vh",
    marginLeft: "0.75vw",
    marginRight: "0.75vw"
  },
  media: {
    width: "100%",
    height: "100%"
  },
  content: {
    margin: "auto"
  }
});

export default function MonsterCard({monster}: MonsterCardProps) {
  const classes = useStyles();
  const history = useHistory()

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.media} onClick={() => navigateToDetail(monster.index, history)}>
          <Typography className={classes.content} variant="h6">
            {monster.name}
          </Typography>
      </CardActionArea>
    </Card>
  );
}

const navigateToDetail = (url:string, history:any) => {
    history.push("monsters/detail/"+url)
}