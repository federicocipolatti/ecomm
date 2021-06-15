import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  const myPromise = new Promise((resolve, reject) => {

    const data = [
        {
            titulo: 'Producto 1',
            subtitulo: 'blablabla',
            img: 'asdasd'
        },

        {
            titulo: 'Producto 2',
            subtitulo: 'blablabla',
            img: 'asdasd'
        },

        {
            titulo: 'Producto 2',
            subtitulo: 'blablabla',
            img: 'asdasd'
        }
    ];

    if(data.lenght > 1){
        resolve(data)
    }else{
        reject("Oops! Error al obtener el array")
    }
})

setTimeout (() => {
    myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
}, 2000);

const Tarjeta = ({titulo, subtitulo, img, i}) => {

    const classes = useStyles();

    <React.Fragment key={i}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {titulo}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {subtitulo}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="large" color="primary">AÑADIR AL CARRITO</Button>
          </CardActions>
        </Card>
    </React.Fragment>
}


export const Item = props => {


    const listaDeTarjetas = data.map((element, i) => <Tarjeta titulo={element.titulo} i={i}/>)

    return <div>
        {listaDeTarjetas}
    </div>
}