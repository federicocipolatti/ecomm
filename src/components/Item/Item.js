import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './ItemStyle.css'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export const Item = props => {
  
  const classes = useStyles();

    return <div className='item'>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.img}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.titulo}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.subtitulo}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="large" color="primary">AÑADIR AL CARRITO</Button>
          </CardActions>
        </Card>
    </div>
}