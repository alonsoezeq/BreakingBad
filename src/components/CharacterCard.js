import React from 'react';
import { makeStyles, Box, Card, CardActionArea, CardContent, CardMedia, Typography, Chip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  chip: {
    padding: theme.spacing(0.5),
    margin: theme.spacing(0.5)
  }
}));


const CharacterCard = ({character}) => {
  const classes = useStyles();

  console.log('Rendering CharacterCard: ', character);
  
  const { name, birthday, occupation, img, status, nickname, portrayed } = character;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name}
          image={img}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name} ({nickname})
          </Typography>
          <Typography gutterBottom color="textSecondary">
            {portrayed}
          </Typography>
          <Typography component="div">
            <Box display="inline" fontWeight="fontWeightBold" m={1}>Birthdate:</Box>
            {birthday}
          </Typography>
          <Typography component="div">
            <Box display="inline" fontWeight="fontWeightBold" m={1}>Status:</Box>
            {status}
          </Typography>
          {
            occupation.map((occupation) => (
              <Chip className={classes.chip} label={occupation} />
            ))
          }
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CharacterCard;