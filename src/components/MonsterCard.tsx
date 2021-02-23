import Typography from '@material-ui/core/Typography';
import { Card, CardActionArea, makeStyles } from '@material-ui/core';
import React from 'react';
import { MonsterCardProps } from '../services/types';

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

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.media}>
          <Typography className={classes.content} variant="h6">
            {monster.name}
          </Typography>
      </CardActionArea>
    </Card>
  );
}