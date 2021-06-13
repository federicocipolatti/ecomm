import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const ItemCount = props => {

  const stock = 10;
  const minimo = 1;

  let [num, setNum] = useState(1);

  let handleIncrement = ()=> {
    if (num < stock){
      setNum(num+1);
    } 
  }

  let handleDecrement = ()=> {
    if (num > minimo){
      setNum(num-1);
    }
  }

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/img/game.ico"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            ¿Cuántos vas a llevar?
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            {
              num
            }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={handleDecrement} size="large" color="secondary">
          MENOS
        </Button>
        <Button onClick={handleIncrement} size="large" color="primary">
          MÁS
        </Button>
      </CardActions>
    </Card>
  );
}