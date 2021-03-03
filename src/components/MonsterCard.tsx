import Typography from '@material-ui/core/Typography';
import { Card, CardActionArea, makeStyles } from '@material-ui/core';
import React from 'react';
import { Monster, MonsterCardProps } from '../services/types';
import { useHistory } from 'react-router-dom';
import { CardActions } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "200px",
    height: "120px",
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
    fontSize: "0.5vw",
    flexWrap: "wrap"
  },
  content: {
    textAlign: "center",
    fontWeight: "bolder",
    position: "sticky",
    top: 0,

  },
  button: {
    margin: "auto",
    marginTop: "auto",
    height: "20px"
  }
});

export default function MonsterCard({monster}: MonsterCardProps) {
  const classes = useStyles();
  const history = useHistory()

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.media}  onClick={() => navigateToDetail(monster.index, history)}>
          <Typography className={classes.content} variant="h6">
            {monster.name}
          </Typography>
      </CardActionArea>
      <CardActions className={classes.button}>
        <IconButton style={{color:"white"}} aria-label="Add-Monster" onClick={() => navigateToEncounter(monster, history)}>
          <FontAwesomeIcon icon={faPlusCircle} />
        </IconButton>
      </CardActions>
    </Card>
  );
}

const navigateToDetail = (url:string, history:any) => {
    history.push("monsters/detail/"+url)
}
const navigateToEncounter = (monster:Monster, history:any) => {
    history.push("encounter/"+ monster.index)
}