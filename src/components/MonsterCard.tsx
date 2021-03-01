import Typography from '@material-ui/core/Typography';
import { Card, CardActionArea, makeStyles } from '@material-ui/core';
import React from 'react';
import { MonsterCardProps } from '../services/types';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: "15vw",
    height: "10vh",
    border: "5px solid #ffffff",
    background: "linear-gradient(to right , #cb2d3e, #ef473a )",
    color: "white",
    marginTop: "1vh",
    marginBottom: "1vh",
    marginLeft: "0.75vw",
    marginRight: "0.75vw",
    boxShadow: "0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.4)"
  },
  media: {
    margin: "auto",
    padding: "5px",
    width: "100%",
    height: "100%"
  },
  content: {
    textAlign: "center",
    fontWeight: "bolder",
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