import Typography from '@material-ui/core/Typography';
import { Card, CardActionArea, CardContent, makeStyles } from '@material-ui/core';
import React from 'react';
import { MonsterCardProps } from '../services/types';

const useStyles = makeStyles({
  root: {
    width: "20%",
    height: "15%"
  },
  media: {
    height: "100%",
  },
});

export default function MonsterCard({monster}: MonsterCardProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {monster.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}